---
id: how-it-works
title: How Shapper Works
---

# How Shapper Works

Shapper lets you control the vertices of a **shape layer** through the points of one or more **masks**, using a weight-based influence system — similar to bones or puppet pins, but built around AE's native mask structure.

## The Three Actors

### 1. Shapes
Your actual artwork — the shape layers in After Effects whose paths you want to deform or animate. Shapper reads their vertices and displays them as **blue points** in the viewer.

### 2. Masks
Special mask layers that act as **control handles**. Moving a mask point causes the shape points it influences to follow. Displayed in the viewer with their AE mask color (highlighted when selected).

### 3. Influences
Each shape point has an **influence value** (0–100%) for each mask point. A shape point influenced 100% by a mask will move exactly as that mask moves. A point with 50% influence moves half as much.

You can mix influences freely — a single shape point can be partially influenced by multiple mask points simultaneously.

## The Deformation Flow

```
Mask moves in AE
       ↓
Shapper reads new mask positions
       ↓
Computes weighted offset for each shape point
       ↓
Applies new positions to shape layer in AE
```

Shapper tracks the **original (rest) positions** of each shape vertex. When a mask moves, it calculates how far it has traveled from its own rest position, then applies that offset — weighted by the influence value — to each shape point.

This means:
- If a mask point hasn't moved → shape points are at their rest position
- If a mask point moves 100px → a shape point with 100% influence also moves 100px
- A shape point with 50% influence moves 50px

## Original vs Deformed Positions

Shapper always maintains two sets of data internally:

| Data | Description |
|---|---|
| **Original positions** | The rest-state vertices loaded from AE (undeformed) |
| **Deformed positions** | What's displayed in the viewer after influences are applied |

When you drag a shape point manually in the viewer, Shapper calculates the delta in AE space and applies it to the original position — so the deformation stays coherent.

**Ghost points** (semi-transparent) appear next to shape points that have been manually offset, showing you the original rest position for reference.

## Two Modes

Shapper operates in two distinct modes that affect how results are sent to After Effects. See [Expression Mode](./expression-mode) for details.
