---
id: timeline
title: Timeline
---

# Timeline

:::note
Animation key management is primarily done in After Effects.  
The Shapper timeline is designed to **preview** the animation within the extension.
:::

## Opening the Timeline

Open the timeline with the timeline button:

![Timeline button](/img/AfterFX_fRIMZ9XMTR.png)

Hide the timeline here:

![Hide timeline](/img/AfterFX_FnX0VwndAx.gif)

---

## Keyframes

- If keyframes are already present in After Effects, they will be **loaded upon opening**.
- To retrieve new animation keys or new easing settings, click the **refresh button**.

![Refresh keyframes](/img/AfterFX_Xtc68jkKQb.gif)

- The timeline duration is updated based on the **first and last keyframes** of the selected layer's masks.
- To extend the timeline: move After Effects' time cursor beyond the last keyframe, then return to Shapper — the duration extends automatically.
- The Shapper playhead and the After Effects timeline are **synchronized** in both directions.

<video controls width="680">
  <source src="/img/AfterFX_Z8B9DXJIp7.mp4" type="video/mp4" />
</video>

---

## Bake Keyframes

### In SVG Mode

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

### In Expression Mode (ExpMode)

If you no longer want animation through expressions, you can bake the animation while **keeping your expression data**.

Keyframes will be added to the path based on your animation, and the expression will be **disabled**.

<video controls width="680">
  <source src="/img/AfterFX_B9Wk2POdCA.mp4" type="video/mp4" />
</video>

---

## Timeline Shortcuts

| Key | Action |
|---|---|
| `J` | Previous keyframe |
| `K` | Next keyframe |
| `<` `>` | Frame by frame |
| `Space` | Play / Pause |
