---
id: rco-follow-null
title: Follow Null
---

# Follow Null

Creates a **null object in AE that follows** the selected mask point. The null moves whenever the mask point moves — useful for parenting other layers to a rig point.

![Follow null icon](/img/qACJZwfuWk.png)

![Follow Null](/img/rco-follow-null.gif)

**Follow Null — All Points** creates individual follow nulls for every point of the mask.

![Follow Null — All Points](/img/rco-follow-all-null.gif)

---

## Control vs Follow — Which to Use?

| Situation | Use |
|---|---|
| You want to **animate** a mask point from AE (null drives the mask) | **Control Null** |
| You want a null that **tracks** a mask point (mask drives the null) | **Follow Null** |
| You already have nulls in your scene to use as controls | **Follow Null** |
| You want Shapper to generate clean rig handles | **Control Null** |
| Apply to every point of a mask at once | **Control All** or **Follow All** |
