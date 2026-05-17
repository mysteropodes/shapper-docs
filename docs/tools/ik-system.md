---
id: ik-system
title: IK System
---

# IK System — Inverse Kinematics

The IK system lets you link mask points into a **chain** so that moving the end of the chain automatically repositions the intermediate joint — like a limb following a foot.

## Concept

In a standard rig, you move each mask point manually. With IK, you define a **3-point chain** (root → joint → end) and then just move the **end point**. Shapper calculates where the joint should be to reach that target, using a 2-bone solver based on the law of cosines.

This is particularly useful for:
- Character limbs (arms, legs)
- Tails and tentacles
- Any jointed structure

## Setting Up an IK Chain

1. **Switch to Mask mode** (press **S** until the Mask mode button is highlighted)
2. **Right-click** on a mask point in the viewer
3. Select **IK** from the context menu — Shapper enters IK selection mode
4. **Click 3 mask points in order**: root → joint → end
5. Click **Validate IK** to confirm the chain

Shapper records the distances between points (L1 = root→joint, L2 = joint→end) and stores the chain internally.

:::tip
You can set the **Flip** option on a chain to flip the bend direction of the joint (left vs right bend).
:::

## Using the IK Chain

Once the chain is set up, **drag the end point** in the viewer — the joint follows automatically using the 2-bone IK solver. The root stays fixed.

You can have **multiple IK chains** in the same rig.

## Notes

- IK chains work on **mask points** only
- The chain is exactly **3 points**: root, joint, end
- The root point stays fixed; only the joint is repositioned by the solver
- Works in both Expression Mode and SVG Mode
