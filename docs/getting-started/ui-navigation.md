---
id: ui-navigation
title: Viewer Navigation
---

# 🧭 Viewer Navigation

## Viewer — Zoom and Pan

| Action | Result |
|---|---|
| **Mouse Wheel** | Zoom in / out — centered on the cursor position |
| **Middle Mouse Button + Drag** | Pan the view |
| **Alt + Drag** | Pan the view |
| **Double-click** on empty area | Reset zoom and pan |

![Zoom demo](/img/AfterFX_3sc8NFvElF.gif)

![Pan demo](/img/AfterFX_LgafYPPZkJ.gif)

![Reset zoom](/img/AfterFX_kCX8qXYLrt.gif)

---

## Timeline — Zoom and Preview

- **Mouse Wheel** while hovering over the timeline → zoom in / out.

![Timeline zoom](/img/AfterFX_Mabw1vakVa.gif)

- The animation preview plays **only the visible portion** of the timeline.

---

## Selection in the Viewer

| Action | Result |
|---|---|
| **Click** on a point | Select that point |
| **Click + Drag** on empty area | Marquee — selects all points inside the rectangle |
| **Shift + Click / Shift + Drag** | Add to current selection |
| **S** | Toggle selection mode (Shape ↔ Mask) |

:::tip
Marquee selection only picks up points of the **active mode**. Switch with **S** before dragging to target the right type.
:::

---

## Undo

The undo button holds a **history of 10 actions**, covering:
- Mask transformations
- Shape modifications
- Influence changes

![Undo demo](/img/tEreknNpb6.gif)

---

## Keyboard Reference

| Shortcut | Action |
|---|---|
| `Mouse Wheel` | Zoom (viewer or timeline) |
| `Middle Mouse + Drag` | Pan the view |
| `Alt + Drag` | Pan the view |
| `Double-click` (empty area) | Reset zoom & pan |
| `S` | Toggle Shape / Mask selection mode |
| `Ctrl + Z` | Undo |
