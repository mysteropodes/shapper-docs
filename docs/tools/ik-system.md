---
id: ik-system
title: IK System (Coming Soon)
---

# IK System — Inverse Kinematics *(Coming Soon)*

:::caution Coming Soon
This feature is currently in development and not yet available in the current release.
:::


The IK system lets you link mask points into a **chain** so that moving the end of the chain automatically repositions the intermediate points — like a limb following a foot.

:::tip GIF coming soon
_Illustration: move the end mask point of a chain, intermediate points bend naturally_
:::

## Concept

In a standard rig, you move each mask point manually. With IK, you define a **chain** of mask points (e.g. hip → knee → foot) and then just move the **end point** (the foot). Shapper calculates where the intermediate points (knee, hip) should be to reach that target.

This is particularly useful for:
- Character limbs (arms, legs)
- Tails and tentacles
- Any jointed structure

## Setting Up an IK Chain

1. **Right-click** on a mask point in the viewer
2. Select **IK** from the context menu → Shapper enters IK selection mode
3. **Click the mask points** that form your chain, in order from root to tip
4. Click **Validate IK** (or select `validIk` from the menu) to confirm the chain

:::tip GIF coming soon
_Illustration: right-click → IK → click chain points in order → validate_
:::

## Using the IK Chain

Once set up, move the **tip point** of the chain in the viewer — the rest of the chain follows using IK solving.

## Notes

- IK chains work on **mask points** only (switch to Mask mode with **S** to interact with them)
- You can have multiple IK chains in the same rig
- IK solving works inside Shapper's viewer; results are sent to AE via the normal **Send** workflow
