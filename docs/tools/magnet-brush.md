---
id: magnet-brush
title: Magnet Brush
---

# Magnet Brush

The Magnet Brush lets you **move multiple shape points at once** with a smooth falloff — points closer to the brush center move more, points further away move less.

:::tip GIF coming soon
_Illustration: drag the magnet brush across a shape, multiple points follow with falloff_
:::

## Activating

Click the **magnet icon** (🧲) in the toolbar, or press its shortcut. The cursor changes and a **circle** appears on the viewer representing the brush radius.

## Using the Brush

**Drag** anywhere on the viewer — all shape points inside the circle will move with a cosine falloff:
- Points at the **center** of the circle → full movement
- Points at the **edge** of the circle → minimal movement
- Points **outside** the circle → not affected

:::tip GIF coming soon
_Illustration: falloff visualized — center point moves fully, edge points barely_
:::

## Adjusting the Brush Radius

Hold **Alt** and drag the edge of the circle to resize it. Make it large for broad deformations, small for precise local edits.

## Smooth Tangents Mode

Hold **Ctrl** while dragging → the brush switches to **smooth tangents mode**. Instead of moving points, it smooths the bezier handles of points inside the brush radius, rounding out sharp corners.

Release **Ctrl** to restore the original tangents and return to normal brush behavior.

:::tip GIF coming soon
_Illustration: Ctrl + brush smoothing sharp angles on a path_
:::

## Committing

Release the mouse to **commit** the deformation. Shapper calculates the final offsets and (if Live Mode is on) sends the result to After Effects.

## Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Activate Magnet Brush | Magnet button in toolbar |
| Resize brush radius | **Alt + drag** on circle edge |
| Smooth tangents mode | Hold **Ctrl** while dragging |
| Restore tangents | Release **Ctrl** |
