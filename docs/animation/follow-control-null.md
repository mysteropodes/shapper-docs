---
id: follow-control-null
title: Follow & Control Null
---

# Follow & Control Null

Shapper can link mask points to **null objects** in After Effects in two directions: the mask can follow a null, or a null can control the mask.

## Follow Null

A mask point **follows** a null object. When the null moves in AE, the mask point moves with it — and the shape deforms accordingly.

Useful for: attaching a rig control point to a parent null that you animate in AE's main timeline.

### Variants

| Option | What it does |
|---|---|
| **Follow (single)** | Links the selected mask point to a null |
| **Follow All** | Links all mask points of the selected mask to individual nulls at once |

**To set up:** right-click a mask point → **Follow** → select (or create) the target null in AE.

:::tip GIF coming soon
_Illustration: mask point following a null — null moves, mask follows, shape deforms_
:::

## Control Null

A **null object** is created that controls the mask point. The null becomes the animation handle — you animate the null in AE, the mask point follows.

Useful for: exposing rig controls as clean, labelable null objects in the AE timeline.

### Variants

| Option | What it does |
|---|---|
| **Control (single)** | Creates a null linked to the selected mask point |
| **Control All** | Creates nulls for all mask points of the selected mask |

**To set up:** right-click a mask point → **Control Null**.

:::tip GIF coming soon
_Illustration: Control Null created — animate the null in AE, mask point follows, shape deforms_
:::

## Follow vs Control — Which to Choose?

| Situation | Use |
|---|---|
| You already have nulls in your scene you want to use as controls | **Follow Null** |
| You want Shapper to create clean rig handles for you | **Control Null** |
| You want to link all points of a mask at once | **Follow All** or **Control All** |
