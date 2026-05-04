---
id: svg-mode
title: SVG Mode
---

# ⚡ SVG Mode

SVG Mode works like Expression Mode but **without expressions** in your shape.  
All animation preview and mask modifications must be done inside Shapper.

- When you edit a mask, keyframes are **automatically added or modified** in your shape layer.
- You can edit influences, add/remove keyframes directly in the After Effects timeline, then **update the Shapper timeline** to apply changes.
- All influences are saved into the **effect** (don't delete it if you want to keep your data).

:::warning JSON file management
If you delete a layer, you must **manually delete the associated JSON file**.  
It is located at the root of your After Effects project, inside the **Shapper SvgMode** folder.
:::

![SvgMode folder](/img/explorer_4m2OFXqB9s.png)
