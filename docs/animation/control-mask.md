---
id: control-mask
title: Control Mask
---

# 🎬 Control Mask

## Moving Points and Keyframes

- **Drag and drop** mask points to move your shapes.
- Moving a mask point automatically **creates a new keyframe** on the mask path property at the current time.
- In **SVG Mode**, Shape Path keyframes are created too.

<video controls width="680">
  <source src="/img/FocuSee_Project_2025-03-24_21-01-49_4.mp4" type="video/mp4" />
</video>

---

## Transform Box

To avoid selecting shape points while selecting mask points, use the **"S" keyboard shortcut** (or the corresponding button).

<video controls width="680">
  <source src="/img/FocuSee_Project_2025-03-24_21-13-44_1.mp4" type="video/mp4" />
</video>

When selecting **multiple mask points**, a transform box appears. Use it to:
- Resize
- Rotate
- Reposition

If you change the **anchor point** of a box and then deselect, the original anchor point is restored on reselect.

<video controls width="680">
  <source src="/img/AfterFX_wYjRE7k9KG.mp4" type="video/mp4" />
</video>

- You can **lock** the box to keep it visible during modifications.
- Select multiple boxes with **Shift + Click**.

![Multiple transform boxes](/img/AfterFX_Rq0NujVS8y.gif)

---

## Link Points

Link points allow you to **parent a mask to another** — when you select the parent, all children are selected too.

:::note
This parent link only exists inside the Shapper panel — it is not saved in After Effects.
:::

- **Alt + click** on a mask point, drag to the parent point and release when over it.  
  A dashed line will appear between the two points.

![Creating a link between points](/img/6hd13LCfeq.gif)

- Child points can still be moved individually.
- To **remove the link**: Alt + click on the line or the arrow.

![Removing a link](/img/D9ABcm4HHh.gif)
