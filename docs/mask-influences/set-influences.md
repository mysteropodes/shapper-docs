---
id: set-influences
title: Set Influences
---

# Set Influences

## 1. How Does It Work?

The extension **automatically calculates influence** based on proximity between shape points and mask points.  
This automatic calculation provides a `ready-to-use rig` that you can fine-tune by adjusting specific points.

![Auto-calculated influences](/img/AfterFX_dNA11h8htr.gif)

Influence allows a shape point **to be affected** by one or multiple mask points.  
The closer the value is to **100**, the more the point will follow that mask point.  
At **0**, it is not affected at all.

![Influence values demo](/img/AfterFX_OaXtKrEBRs.gif)

---

## 2. Influences Box

`Influence boxes` appear when selecting one or multiple shape points.  
Adjust the values of one or more `influence boxes linked to the mask points` — they will be affected as a percentage.

![Influence boxes](/img/AfterFX_ci3J3R6FON.gif)

- **Double-click** on an influence box to type in a value directly.

![Double click to type influence](/img/7xy5Htgo9t.gif)

- For more precise control, **click on a tangent** of the shape. It will appear isolated while other shapes are hidden.

![Tangent click for precise control](/img/AfterFX_t54krpTMyk.gif)

:::tip Preserve your animation
If you change influences during animation, it will affect the entire rig across the timeline while **preserving your existing animation**.
:::

- In **expression mode**, influences update automatically by default.  
  To delay the update until you've defined all influences, click the pause button:

![Pause update button](/img/AfterFX_SiWahTGCqg.gif)

Updates are paused — click again to apply all changes at once.

![Apply all changes](/img/AfterFX_gJ4A4fbnJG.gif)
