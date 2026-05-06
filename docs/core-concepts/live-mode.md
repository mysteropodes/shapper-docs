---
id: live-mode
title: Live Mode
---

# Live Mode

Live Mode controls whether Shapper sends influence changes to After Effects **immediately** as you work, or only when you manually click **Send**.

## Toggle

The **Live Mode** button is in the main toolbar. It shows its current state:

- **ON** — every influence change is sent to AE in real time
- **OFF** — changes accumulate locally in Shapper; AE is only updated when you click Send

## When to Use Each Mode

### Live Mode ON
Best for:
- Setting up and fine-tuning influences while watching the result directly in AE
- Working with simple rigs (few shapes, few mask points)
- Final adjustments before sending

### Live Mode OFF
Best for:
- Complex rigs with many points — each send triggers an AE script evaluation, which can slow things down
- Bulk changes (adjusting many influence values in sequence)
- Working on the Shapper viewer without needing constant AE feedback

## Performance Note

Each time Shapper sends data to AE, it runs a JSX script evaluation. On large compositions with many shape paths and mask points, this can cause a brief lag in AE. Turning Live Mode off eliminates this overhead while you work, then send once when ready.

## Tip

You can keep Live Mode **OFF** while setting up your rig and only turn it **ON** when you want to preview the final deformation in AE.
