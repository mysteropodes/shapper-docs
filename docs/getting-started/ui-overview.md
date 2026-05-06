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

The top toolbar contains all main controls:

| Button | Description |
|---|---|
| **Load** | Read shape and mask data from the active AE composition |
| **Send** | Apply current influence data back to After Effects |
| **Exp / SVG toggle** | Switch between Expression Mode and SVG Mode |
| **Live Mode** | Toggle real-time sending to AE on/off |
| **Magnet Brush** | Activate the Magnet Brush tool |
| **Eye icon** | Show / hide influence value boxes on each point |
| **Lock icon (S)** | Switch selection mode between Shape and Mask |
| **Undo (Ctrl+Z)** | Step back through influence history |

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
