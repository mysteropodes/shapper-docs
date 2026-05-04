---
id: right-click-options
title: Right Click Options
---

# Right Click Options

Right-click on a mask or shape point to open the **Option Menu**.

![Right click menu](/img/2YFiB7Nj7m.gif)

---

## Mask Options

### Control Null Mask

**Control Mask** creates a null that will **control** your selected mask point.  
This enables advanced rig/animation setups.

:::caution
Not working in SVG Mode at this time.
:::

![Control null icon](/img/dR2lFAv28p.png)

<video controls width="680">
  <source src="/img/AfterFX_bwzUjhtRKw.mp4" type="video/mp4" />
</video>

**Control Mask All Points** — same as above but applies to **all points** of the mask.

<video controls width="680">
  <source src="/img/Eagle_NIV350udYj.mp4" type="video/mp4" />
</video>

---

### Follow Null Mask

**Follow Mask** creates a null that **follows** your selected mask point.  
You can parent any layer to it.

![Follow null icon](/img/qACJZwfuWk.png)

**Follow Mask All** creates nulls that follow **all points** of your mask.

<video controls width="680">
  <source src="/img/AfterFX_zGjCJgkPTo.mp4" type="video/mp4" />
</video>

---

### Wave Path

**Wave** creates a dynamic wave animation between all your mask points.

<video controls width="680">
  <source src="/img/AfterFX_iAq9NmlBd9.mp4" type="video/mp4" />
</video>

#### ShapperSway Effect Parameters

![ShapperSway effects panel](/img/AfterFX_0IrJnT7r71.png)

| Parameter | Description |
|---|---|
| **Amplitude** | Height of the wave |
| **Frequency** | Speed of the wave |
| **Delay** | Delay of the wave animation per point |
| **Points Mask Exclude** | Exclude a range of points (Point In → Point Out). Example: In=2, Out=4 excludes points 2, 3, 4 |
| **Angle** | Wave direction (0° to 360°) — auto-calculated on apply |
| **Invert Direction** | Reverses the wave direction |

---

## Shape Options

- **Follow Shape** creates a null that follows your selected shape point. Parent any layer to it.
- **Follow Shape All** creates nulls that follow all points of your shape.
