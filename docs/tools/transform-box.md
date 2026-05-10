---
id: transform-box
title: Transform Box
---

# Transform Box

The Transform Box lets you **move, rotate, and scale a group of selected points** as a unit — both shape points and mask points.

![Transform Box](/img/transform-box.gif)

## Activating

1. Select one or more points (click or marquee)
2. Press **Ctrl+T** or click the <ToolIcon src="/img/icons/icon-transform-box.png" size={24} /> **Transform Box** button — a bounding box appears around the selection

Press **Ctrl+T** again or **Escape** to exit the Transform Box.

## Operations

With the Transform Box active:

| Handle | Action |
|---|---|
| **Corner handles** | Scale the selection (drag to resize) |
| **Edge handles** | Scale along one axis |
| **Center** | Move the entire selection |
| **Rotation handle** (outside corner) | Rotate around the center |

## Works on Shapes and Masks

The Transform Box works in both [selection modes](./selection-modes):

- **Shape mode** — transforms selected shape points
- **Mask mode** — transforms selected mask points

Switch modes with **S** before activating the transform box to control which points are affected.

## Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Activate / deactivate | **Ctrl+T** |
| Exit | **Escape** or **Ctrl+T** |
