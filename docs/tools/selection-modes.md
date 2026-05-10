---
id: selection-modes
title: Selection Modes
---

# Selection Modes

Shapper has two selection modes that control which type of points your clicks and marquee selections target.

## Shape Mode vs Mask Mode

| Icon | Mode | What you select |
|:---:|---|---|
| <ToolIcon src="/img/icons/icon-select-shape.png" size={32} /> | **Shape mode** | Shape vertices (blue points) |
| <ToolIcon src="/img/icons/icon-select-mask.png" size={32} /> | **Mask mode** | Mask vertices (color inherited from AE mask) |

## Switching Modes

- Press **S** to toggle between modes
- Or click the mode button in the toolbar

The active mode is shown on the Lock button icon.

## Why It Matters

Both shape and mask points are displayed in the viewer at the same time. Without selection modes, clicking near overlapping points would be ambiguous.

**Example workflow:**
1. Switch to **Mask mode** → move mask points to set the rig position
2. Switch to **Shape mode** → select shape points to assign influences or use the Magnet Brush
3. Switch back to **Mask mode** → animate

## With Marquee Selection

Drag to draw a selection rectangle in the viewer — only points of the **active mode** are selected. This makes it easy to box-select all mask points in an area without accidentally picking up shape points, or vice versa.

![Selection modes — marquee](/img/selection-modes.gif)

![Selection mode switch](/img/selection-modes-switch.gif)

## Shortcut

| Action | Shortcut |
|---|---|
| Toggle selection mode | **S** |
