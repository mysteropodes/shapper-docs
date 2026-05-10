---
id: ui-overview
title: Interface Overview
---

# Interface Overview

Shapper's panel is divided into several zones. Understanding each area will help you work efficiently.

## Main Layout

![Interface Overview](/img/ui-overview.jpg)

## Toolbar

### Top row — main tools

| Icon | Button | Description |
|:---:|---|---|
| <ToolIcon src="/img/icons/icon-load-masks.png" size={36} /> | **Load Mask Influence** | Import both shapes and mask data from the selected AE layer |
| <ToolIcon src="/img/icons/icon-rig-optimize.png" size={36} /> | **Rig Optimize** | Optimize and clean up the rig |
| <ToolIcon src="/img/icons/icon-perspective-shape.png" size={36} /> | **Perspective Shape** | Apply perspective deform to one shape |
| <ToolIcon src="/img/icons/icon-perspective-all.png" size={36} /> | **Perspective All Shapes** | Apply perspective deform to all shapes |
| <ToolIcon src="/img/icons/icon-perspective-text.png" size={36} /> | **Text Perspective** | Apply perspective deform to a text layer |
| <ToolIcon src="/img/icons/icon-two-point-deformer.png" size={36} /> | **Two Point Deformer** | Deform between two control points |
| <ToolIcon src="/img/icons/icon-bake.png" size={36} /> | **Bake** | Bake all expressions into direct keyframes |
| <ToolIcon src="/img/icons/icon-expression-on.png" size={36} /> | **Expression Mode ON** | Influences written as AE expressions (live deform) |
| <ToolIcon src="/img/icons/icon-expression-off.png" size={36} /> | **Expression Mode OFF** | Expressions disabled |

### Bottom row — view & mode controls

| Icon | Button | Description |
|:---:|---|---|
| <ToolIcon src="/img/icons/icon-undo.png" size={36} /> | **Undo** | Step back through influence history (`Ctrl+Z`) |
| <ToolIcon src="/img/icons/icon-show-influences.png" size={36} /> | **Show/Hide Influence Boxes** | Show or hide the influence value overlays on each shape point |
| <ToolIcon src="/img/icons/icon-transform-box.png" size={36} /> | **Transform Box** | Activate bounding-box transform for selected points (`Ctrl+T`) |
| <ToolIcon src="/img/icons/icon-magnet.png" size={36} /> | **Magnet Brush** | Activate the Magnet Brush tool |
| <ToolIcon src="/img/icons/icon-select-mask.png" size={36} /> | **Mask Mode** | Switch selection to mask points (`S`) |
| <ToolIcon src="/img/icons/icon-select-shape.png" size={36} /> | **Shape Mode** | Switch selection to shape points (`S`) |
| <ToolIcon src="/img/icons/icon-live-mode.png" size={36} /> | **Live Mode** | Toggle real-time sending to After Effects |

## SVG Viewer

The central area displays your shapes and masks as an interactive SVG canvas.

- **Blue points** — shape vertices
- **Mask points** — displayed with their AE mask color (highlighted on selection)
- **Influence boxes** — numerical values on each shape point showing how much each mask affects it
- **Ghost points** — semi-transparent dots showing a shape point's original (undeformed) position when it has been offset

### Navigation
- **Scroll** — zoom in / out
- **Alt + drag** — pan the view
- **Click + drag** (empty area) — marquee selection

## Timeline

The bottom strip shows keyframe data when animation is loaded from AE.

- **Load Keyframes** button — imports the current keyframe data from AE into the internal timeline
- **Play / Pause** — preview the animation inside Shapper
- Keyframe markers correspond to AE timeline positions

## Selection Mode

The **S** key switches between the two selection modes:

- **Shape mode** — clicking and marquee-selecting targets shape points (blue)
- **Mask mode** — clicking and marquee-selecting targets mask points

The active mode button is highlighted in the bottom toolbar.
