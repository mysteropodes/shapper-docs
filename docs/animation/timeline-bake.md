---
id: timeline-bake
title: Bake Keyframes
---

# Bake Keyframes

## In SVG Mode

In SVG Mode, you can bake keyframes once your animation is complete.  
This creates all keyframes on all your Shape paths, **preserving all easing and interpolation**.

Click the bake button:

![Bake button](/img/AfterFX_3qndvpMwZw.png)

:::tip Re-baking
If you want to modify after baking, just rebake.  
Deleting baked keyframes in AE won't delete your animation if you keep the Mask keyframes.
:::

<video controls width="680">
  <source src="/img/AfterFX_SfMjw7PzrT.mp4" type="video/mp4" />
</video>

## In Expression Mode (ExpMode)

If you no longer want animation through expressions, you can bake the animation while **keeping your expression data**.

Keyframes will be added to the path based on your animation, and the expression will be **disabled**.

<video controls width="680">
  <source src="/img/AfterFX_B9Wk2POdCA.mp4" type="video/mp4" />
</video>
