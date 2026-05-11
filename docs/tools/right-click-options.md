---
id: right-click-options
title: Right Click Options
---

# Right Click Options

Right-click on a **mask point** or a **shape point** in the viewer to open the option menu.

![Right click menu](/img/2YFiB7Nj7m.gif)

---

## Mask Point Options

### Control Null

Creates a **null object in AE that controls** the selected mask point. Animate the null and the mask point follows — making it a clean, labelled rig handle in the AE timeline.

:::caution
Not working in SVG Mode at this time.
:::

![Control null icon](/img/dR2lFAv28p.png)

![Control Null](/img/rco-control-null.gif)

**Control Null — All Points** applies the same to every point of the mask at once.

---

### Follow Null

Creates a **null object in AE that follows** the selected mask point. The null moves whenever the mask point moves — useful for parenting other layers to a rig point.

![Follow null icon](/img/qACJZwfuWk.png)

![Follow Null](/img/rco-follow-null.gif)

**Follow Null — All Points** creates individual follow nulls for every point of the mask.

![Follow Null — All Points](/img/rco-follow-all-null.gif)

---

### Control vs Follow — Which to Use?

| Situation | Use |
|---|---|
| You want to **animate** a mask point from AE (null drives the mask) | **Control Null** |
| You want a null that **tracks** a mask point (mask drives the null) | **Follow Null** |
| You already have nulls in your scene to use as controls | **Follow Null** |
| You want Shapper to generate clean rig handles | **Control Null** |
| Apply to every point of a mask at once | **Control All** or **Follow All** |

---

### Wave Path

**Wave** creates a dynamic oscillating animation across all mask points using the **ShapperSway** effect in AE.

![Wave Path](/img/rco-wave-path.gif)

#### ShapperSway Parameters

![ShapperSway effects panel](/img/AfterFX_0IrJnT7r71.png)

| Parameter | Description |
|---|---|
| **Amplitude** | Height of the wave |
| **Frequency** | Speed of the wave |
| **Delay** | Delay between each point |
| **Points Mask Exclude** | Exclude a range of points (Point In → Point Out). Example: In=2, Out=4 excludes points 2, 3, 4 |
| **Angle** | Wave direction (0°–360°) — auto-calculated on apply |
| **Invert Direction** | Reverses the wave direction |

---

### IK — Inverse Kinematics

**IK** lets you chain mask points so that moving the end of the chain repositions the intermediate points automatically — like a limb following a foot.

1. Right-click a mask point → **IK** → Shapper enters chain selection mode
2. Click the mask points that form your chain, in order from root to tip
3. Click **Validate IK** to confirm

See [IK System](./ik-system) for full details.

---

## Shape Point Options

### Follow Shape

Creates a null that **follows** your selected shape point in AE. Parent any layer to it to attach it to a shape point position.

**Follow Shape — All Points** creates individual follow nulls for every point of the shape.
