---
id: autosway
title: Autosway
---

# Autosway

Autosway generates an **automatic oscillation animation** on a mask point using a sine wave expression. Perfect for organic, looping motion like hair, clothing, or vegetation — without hand-animating every keyframe.

![Autosway overview](/img/autosway.gif)

## Activating

1. **Right-click** on a mask point in the viewer
2. Select **Wave** from the context menu
3. Shapper writes a sine-wave expression onto that mask point in AE

The mask point will now oscillate automatically when you play the AE timeline. Because the shape is influenced by this mask, the shape sways accordingly.

## How It Works

Autosway writes a mathematical expression (sinusoidal oscillation) directly on the mask path property in After Effects. The expression runs natively in AE — no Shapper connection needed at render time.

The oscillation is based on:
- **Amplitude** — how far the point swings
- **Frequency** — how fast it oscillates
- **Phase offset** — offset in time, useful to stagger multiple points

## Use Cases

- **Hair and ponytails** — apply Wave to the tip mask point of a hair rig
- **Clothing and fabric** — add gentle sway to jacket edges or skirt points
- **Vegetation** — leaves, grass, tree branches
- **Tails and antennae** — anything that should bounce or wobble passively

## Notes

- Autosway is applied per mask point — apply it to multiple points with different parameters for more complex motion
- Since it's an AE expression, it plays back at any frame rate without re-rendering
- You can edit the expression parameters (amplitude, frequency) directly in the AE expression field after applying
