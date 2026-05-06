---
id: ui-overview
title: Interface Overview
---

# Interface Overview

Shapper's panel is divided into several zones. Understanding each area will help you work efficiently.

## Main Layout

```
┌─────────────────────────────────────┐
│           Toolbar (RiveDemo)        │  ← buttons, mode toggles
├─────────────────────────────────────┤
│                                     │
│         SVG Viewer                  │  ← shapes, masks, influence boxes
│                                     │
├─────────────────────────────────────┤
│           Timeline                  │  ← keyframes, playback
└─────────────────────────────────────┘
```

## Toolbar

### Top row — main tools

| Icon | Button | Description |
|:---:|---|---|
| <ToolIcon src="/img/icons/icon-load-masks.png" size={36} /> | **Load Masks** | Import mask data from the active AE layer |
| <ToolIcon src="/img/icons/icon-load-shape.png" size={36} /> | **Load Shape** | Import shape path data from the active AE layer |
| <ToolIcon src="/img/icons/icon-select.png" size={36} /> | **Select** | Activate marquee / point selection |
| <ToolIcon src="/img/icons/icon-transform-shape.png" size={36} /> | **Transform Shape** | Move / deform selected shape points |
| <ToolIcon src="/img/icons/icon-transform-box.png" size={36} /> | **Transform Box** | Bounding-box transform for selected points (`Ctrl+T`) |
| <ToolIcon src="/img/icons/icon-path-animation.png" size={36} /> | **Path Animation** | Move points and record AE keyframes automatically |
| <ToolIcon src="/img/icons/icon-bake.png" size={36} /> | **Bake** | Bake all expressions into direct keyframes |
| <ToolIcon src="/img/icons/icon-expression-on.png" size={36} /> | **Expression Mode ON** | Influences are written as AE expressions |
| <ToolIcon src="/img/icons/icon-expression-off.png" size={36} /> | **Expression Mode OFF** | Influences written as static values |

### Bottom row — view & mode controls

| Icon | Button | Description |
|:---:|---|---|
| <ToolIcon src="/img/icons/icon-undo.png" size={36} /> | **Undo** | Step back through influence history (`Ctrl+Z`) |
| <ToolIcon src="/img/icons/icon-live-mode.png" size={36} /> | **Live Mode** | Toggle real-time sending to AE on/off |
| <ToolIcon src="/img/icons/icon-show-points.png" size={36} /> | **Show Points** | Show / hide influence value boxes on each point |
| <ToolIcon src="/img/icons/icon-magnet.png" size={36} /> | **Magnet Brush** | Activate the Magnet Brush tool |
| <ToolIcon src="/img/icons/icon-select-mask.png" size={36} /> | **Mask Mode** | Switch selection to mask points (`S`) |
| <ToolIcon src="/img/icons/icon-select-shape.png" size={36} /> | **Shape Mode** | Switch selection to shape points (`S`) |

## SVG Viewer

The central area displays your shapes and masks as an interactive SVG canvas.

- **Blue points** — shape vertices
- **Orange points** — mask vertices
- **Influence boxes** — numerical values on each shape point showing how much each mask affects it
- **Ghost points** — semi-transparent orange dots showing a shape point's original (undeformed) position when it has been offset

### Navigation
- **Scroll** — zoom in / out
- **Alt + drag** — pan the view
- **Click + drag** (empty area) — marquee selection

## Timeline

The bottom strip shows keyframe data when animation is loaded from AE.

- **Load Keyframes** button — imports the current keyframe data from AE into the internal timeline
- **Play / Pause** — preview the animation inside Shapper
- Keyframe markers correspond to AE timeline positions

## Selection Mode indicator

The **Lock button** (shortcut **S**) in the toolbar shows the active selection mode:

- **Shape mode** — clicking and marquee-selecting targets shape points
- **Mask mode** — clicking and marquee-selecting targets mask points

The active mode is highlighted. Switch quickly with **S**.
