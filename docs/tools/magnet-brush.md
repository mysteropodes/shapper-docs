---
id: magnet-brush
title: Magnet Brush
---

# Magnet Brush

The Magnet Brush lets you **move multiple shape points at once** with a smooth falloff — points closer to the brush center move more, points further away move less.

![Magnet Brush overview](/img/magnet-brush-overview.gif)

## Activating

Click the <ToolIcon src="/img/icons/icon-magnet.png" size={24} /> **Magnet Brush** button in the toolbar. The cursor changes and a **circle** appears on the viewer representing the brush radius.

## Using the Brush

**Drag** anywhere on the viewer — all shape points inside the circle will move with a cosine falloff:
- Points at the **center** of the circle → full movement
- Points at the **edge** of the circle → minimal movement
- Points **outside** the circle → not affected

![Using the Magnet Brush](/img/magnet-brush-use.gif)

## Adjusting the Brush Radius

Hold **Alt** and drag the edge of the circle to resize it. Make it large for broad deformations, small for precise local edits.

![Adjusting brush radius](/img/magnet-brush-radius.gif)

## Smooth Tangents Mode

Hold **Ctrl** while dragging → the brush switches to **smooth tangents mode**. Instead of moving points, it smooths the bezier handles of points inside the brush radius, rounding out sharp corners.

Release **Ctrl** to restore the original tangents and return to normal brush behavior.

![Smooth Tangents Mode](/img/magnet-brush-smooth.gif)

## Committing

Release the mouse to **commit** the deformation. Shapper calculates the final offsets and (if Live Mode is on) sends the result to After Effects.

## Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Activate Magnet Brush | <ToolIcon src="/img/icons/icon-magnet.png" size={20} /> button in toolbar |
| Resize brush radius | **Alt + drag** on circle edge |
| Smooth tangents mode | Hold **Ctrl** while dragging |
| Restore tangents | Release **Ctrl** |
