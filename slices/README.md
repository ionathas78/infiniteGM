# infiniteGM

*A living Game Master. A rules engine with a pulse.*

**infiniteGM (iGM)** is a modular, rules-aware tabletop roleplaying engine designed to run games with deep mechanical integrity, strong player agency, and long-form narrative memory.

This is not a plot machine.  
This is a **world simulator that remembers what you did to it**.

---

## What infiniteGM Is

- A **Game Master architecture**, not a single system
- **System-agnostic**, adapter-driven, and ruleset-flexible
- Built for **long campaigns**, not one-shots that forget your name
- Obsessed with **consequence, continuity, and earned growth**

infiniteGM tracks:
- World state
- NPC memory and trust
- Player habits and learned behavior
- Mechanical scars left by success and failure
- Narrative meaning that only becomes clear in hindsight

If you’ve ever wanted a GM that plays fair, hits hard, and *learns alongside you*—this is that.

---

## Design Philosophy

infiniteGM is guided by three permanent storytelling laws:

1. **Law of Visible Progression**  
   Growth, difficulty, and reward escalate in rhythm. Power should *feel* earned.

2. **Law of Apparent Disconnection**  
   Detours matter. Side paths secretly train the skills needed for the finale.

3. **Law of Retrospective Causality**  
   Meaning crystallizes later. Early chaos gains shape only in hindsight.

These laws are enforced quietly, through structure—not narration.

---

## Core Architecture — The Seven Slices

The system is divided into **seven slices**, each with a single, hard responsibility:

1. **Core** — Truth, authority, invariants, continuity  
2. **World** — Geography, factions, cultures, logistics, history  
3. **Cast** — NPCs, PCs, trust, secrets, archetypes  
4. **Systems** — Rules engines: combat, social, conditions, special mechanics  
5. **Story** — Arcs, echoes, callbacks, narrative pressure  
6. **Meta** — Preferences, safety, audits, logging, tooling  
7. **Learning** — Habits, skill emergence, unlocks, earned instinct  

Slices are designed to be **modular, replaceable, and externally versioned**.

No slice does another’s job. That’s how the middle stays sharp.

---

## Key Features

- 🎲 **Dice Integrity** — rolls matter; fudging is rare, logged, and purposeful  
- 🧠 **Learning Systems** — characters evolve through use, failure, and habit  
- 🎭 **NPCs With Memory** — trust, fear, loyalty, and bias persist  
- 🗺️ **World Persistence** — the world keeps moving when players don’t  
- 🛠️ **Adapter-Driven** — supports many RPG systems without flattening them  
- 📜 **Hidden Mechanics** — players feel systems before they ever see them  

---

## Repository Structure (Typical)

```text
/manifest
  slices.manifest.json

/slices
  /01_core
  /02_world
  /03_cast
  /04_systems
  /05_story
  /06_meta
  /07_learning

/agents
/tools
/docs
```

Exact layouts may vary by campaign or adapter.

---

## Usage

This repository is intended to be used as:

- A **core engine** for GPT-based Game Masters
- A **rules and narrative backbone** for multiple campaigns
- A **design lab** for testing mechanics, pacing, and story logic

To use infiniteGM:
1. Load the core instruction set into your GPT
2. Attach or reference slice modules as external files
3. Select or build an adapter for your chosen RPG system
4. Play

The system will remember the rest.

---

## What This Is *Not*

- ❌ A railroad generator  
- ❌ A random plot spitter  
- ❌ A lightweight improv toy  

infiniteGM expects engagement, curiosity, and consequence.

It gives back exactly what you put in—sometimes later, sometimes sideways.

---

## License

This project is licensed under **Creative Commons Attribution–ShareAlike 4.0 International (CC BY-SA 4.0)**.

You are free to:
- Share
- Adapt
- Remix
- Build upon

As long as you:
- Attribute the original work
- Share derivative works under the same license

See `LICENSE.md` for full details.

---

## Final Word

If you’re here looking for certainty, you won’t find it.

If you’re here looking for **meaning earned through play**—  
welcome.

The world is already moving.
