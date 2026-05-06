---
id: expression-mode
title: Expression Mode
---

# Expression Mode

Expression Mode is Shapper's primary operating mode. It writes an **After Effects expression** directly onto your shape's path property, so the deformation is calculated in real time by AE itself — no baking required.

## How It Works

When you click **Send**, Shapper writes the influence data into an expression on each shape path. The expression reads the current positions of the mask points and computes the deformed shape on the fly.

**Result:** your shape deforms live as you animate the mask points in the AE timeline. The masks are your animation controls.

## Advantages

- **Non-destructive** — the original shape path is preserved, the expression drives the deformation
- **Fully animatable** — animate the masks in AE and the shape follows automatically
- **Compatible with Path Animation** — you can keyframe the shape's own path on top of the expression-driven deformation (see [Path Animation](../animation/path-animation))
- **Live preview** — with Live Mode on, you see the result in AE instantly as you adjust influences

## Workflow

1. Load your composition into Shapper (**Load** button)
2. Set up influences between shape points and mask points
3. Click **Send** → Shapper writes the expression into AE
4. Animate your masks in the AE timeline

## Toggle in the Toolbar

| Icon | State |
|:---:|---|
| <ToolIcon src="/img/icons/icon-expression-on.png" size={32} /> | **Expression Mode ON** — deformation is written as an AE expression |
| <ToolIcon src="/img/icons/icon-expression-off.png" size={32} /> | **Expression Mode OFF** — influences written as static values only |

## Expression Mode vs Bake

| | Expression Mode | Bake |
|---|---|---|
| Shape path | Driven by expression | Direct keyframes |
| Mask required at render | Yes | No |
| Editable after | Yes (adjust influences & resend) | No (keyframes are fixed) |
| Use when | Normal rigging workflow | Final export / compatibility |

To convert an expression-driven rig to keyframes, use the [Bake](../bake) function.
