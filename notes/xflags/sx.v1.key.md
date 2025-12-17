# note:xflags:sx.v1:key — Bit + enum key (human readable)

## Bits
- 0: `ambient.weather_ok` — allow coarse weather callouts
- 1: `ambient.time_ok` — allow local-time callouts
- 2: `meta.character_lens_ok` — allow character-lens contributions when constructive & non-derailing
- 3: `meta.gear_visibility_ok` — allow soft gear/structure talk in convo mode
- 4: `safety.forbid_precision` — forbid creepy precision phrasing (timestamps/window talk)
- 5: `runtime.hedge_mode` — prefer hedged/optional phrasing (uncertainty/change-point)
- 6: `convo.allow_resume` — allow player to resume prior convo state
- 7: `convo.default_resume` — default start mode resume (only if player gives no instruction)

## Enums
- bits 8–9: `narration_density` = 0 low | 1 medium | 2 high | 3 auto
- bits 10–11: `option_density_mode` = 0 sparse | 1 normal | 2 dense | 3 auto
- bits 12–13: `meta_visibility` = 0 hidden | 1 soft | 2 explicit | 3 auto
- bits 14–16: `recovery_style_hint` = 0 unknown | 1 levity | 2 mastery | 3 reassurance | 4 quiet | 5 distraction | 6 auto | 7 auto
