#!/usr/bin/env python3
"""
infiniteGM Slice Loader (scaffold)

- Reads a manifest JSON file listing slice roots + entrypoints.
- Validates existence (strict mode) and loads file contents.
- Returns a dict keyed by slice id with loaded entrypoint payloads.

Usage:
  python tools/load_slices.py --manifest slices.manifest.json --root . --out build/slices.bundle.json
  python tools/load_slices.py --manifest slices.manifest.json --root . --no-strict
"""

from __future__ import annotations
import argparse
import json
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple


TEXT_EXTS = {".md", ".txt"}
JSON_EXTS = {".json"}
YAML_EXTS = {".yaml", ".yml"}


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _read_json(path: Path) -> Any:
    return json.loads(_read_text(path))


def _read_yaml_best_effort(path: Path) -> Any:
    """Best-effort YAML parsing.
    If PyYAML isn't available, falls back to raw text (still useful for bundling).
    """
    try:
        import yaml  # type: ignore
    except Exception:
        return {"_yaml_unparsed": True, "raw": _read_text(path)}
    return yaml.safe_load(_read_text(path))


def _load_any(path: Path) -> Any:
    ext = path.suffix.lower()
    if ext in TEXT_EXTS:
        return _read_text(path)
    if ext in JSON_EXTS:
        return _read_json(path)
    if ext in YAML_EXTS:
        return _read_yaml_best_effort(path)
    # unknown: load raw bytes as base64-ish? keep it simple: text if decodable
    try:
        return _read_text(path)
    except Exception:
        return {"_binary_unloaded": True, "path": str(path)}


def load_manifest(manifest_path: Path) -> Dict[str, Any]:
    data = _read_json(manifest_path)
    if not isinstance(data, dict) or "slices" not in data:
        raise ValueError("Manifest must be a JSON object with a top-level 'slices' array.")
    return data


def bundle_slices(manifest: Dict[str, Any], root: Path, strict: bool = True) -> Dict[str, Any]:
    bundle: Dict[str, Any] = {
        "manifest_version": manifest.get("manifest_version"),
        "project": manifest.get("project"),
        "generated_utc": manifest.get("generated_utc"),
        "slices": {}
    }

    slices = manifest.get("slices", [])
    if not isinstance(slices, list):
        raise ValueError("'slices' must be an array.")

    for s in sorted(slices, key=lambda x: x.get("order", 9999)):
        sid = s.get("id")
        if not sid:
            raise ValueError("Slice missing required field 'id'.")
        entrypoints = s.get("entrypoints", [])
        if not isinstance(entrypoints, list):
            raise ValueError(f"Slice {sid}: 'entrypoints' must be an array.")

        slice_obj: Dict[str, Any] = {
            "id": sid,
            "title": s.get("title"),
            "order": s.get("order"),
            "description": s.get("description"),
            "root": s.get("root"),
            "tags": s.get("tags", []),
            "entrypoints": {}
        }

        for rel in entrypoints:
            p = (root / rel).resolve()
            exists = p.exists()
            if strict and not exists:
                raise FileNotFoundError(f"Missing entrypoint for {sid}: {rel} (resolved: {p})")
            if exists:
                slice_obj["entrypoints"][rel] = _load_any(p)
            else:
                slice_obj["entrypoints"][rel] = {"_missing": True, "path": rel}

        bundle["slices"][sid] = slice_obj

    return bundle


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", required=True, help="Path to slices.manifest.json")
    ap.add_argument("--root", default=".", help="Project root directory (default: .)")
    ap.add_argument("--out", default="", help="Optional output bundle JSON path")
    ap.add_argument("--no-strict", action="store_true", help="Allow missing entrypoints")
    args = ap.parse_args()

    manifest_path = Path(args.manifest).resolve()
    root = Path(args.root).resolve()
    strict = not args.no_strict

    manifest = load_manifest(manifest_path)
    bundle = bundle_slices(manifest, root=root, strict=strict)

    if args.out:
        out_path = Path(args.out).resolve()
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(json.dumps(bundle, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"Wrote bundle: {out_path}")
    else:
        print(json.dumps(bundle, indent=2, ensure_ascii=False))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
