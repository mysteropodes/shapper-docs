---
id: path-animation
title: Path Animation
---

# <ToolIcon src="/img/icons/icon-two-point-deformer.png" size={36} /> Path Animation

Path Animation is a powerful feature that lets you **keyframe shape point positions directly in After Effects**, while the mask deformation continues to apply on top. You get the best of both worlds: precise manual shape control through keyframes, combined with the dynamic influence of your mask rig.

:::tip GIF coming soon
_Illustration: move a shape point in the viewer → a keyframe is automatically created on the AE timeline → the shape deforms from masks AND the keyframed position_
:::

## How It Works

When you **move a shape point** in Shapper's viewer, a keyframe is automatically placed on the current AE frame for that point's path property. If you then move to a different frame and move the point again, a second keyframe is created — and AE interpolates between them.

The mask-driven deformation still applies **on top** of these keyframes. The two systems are additive:

```
Final shape position = Path keyframe position + Mask deformation offset
```

This means you can:
- Use masks to drive the overall deformation of a character
- Use path keyframes to refine specific shapes at specific moments in time

## Workflow

1. Load your composition in Shapper (**Load** button)
2. Set up your mask influences as usual
3. **Go to the frame** in AE where you want to keyframe a shape
4. **Drag a shape point** in the Shapper viewer → a keyframe is automatically written to AE for that point
5. Move to another frame and drag again to create a new keyframe
6. AE interpolates the path between your keyframes

:::tip GIF coming soon
_Illustration: multi-frame workflow — move point on frame 0, move point on frame 24, playback shows smooth interpolation + deformation_
:::

## Use Cases

### Corrective shapes
Your mask rig looks great in most positions, but at a specific frame the shape needs a slight correction. Move the affected point at that frame — the correction is keyframed, the rest of the animation stays driven by masks.

### Lip sync / facial shapes
Animate the mouth shape with path keyframes for precise lip sync, while the head follows a mask-driven perspective deform.

### Squash & stretch accents
Add exaggerated shape keyframes at impact frames on top of an existing mask rig, without breaking the rig.

## Notes

- Keyframes are created on the **shape path property** in AE, at the current time indicator position
- Only the points you **actually moved** get a keyframe — untouched points are not affected
- If a shape point already has a keyframe on that frame, moving it **updates** the existing keyframe
- Works in **Expression Mode** — the expression and the path keyframes coexist
