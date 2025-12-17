# note:xflags:sx.v1:examples — Examples

## Example A
Turn on weather + time callouts, forbid precision, set narration density to medium.

- bits: weather_ok=1, time_ok=1, forbid_precision=1
- enum narration_density=medium (1)

## Example B
Enable hedge mode, choose sparse options, keep everything else canonical.

- bit: hedge_mode=1
- enum: option_density_mode=sparse (0)
