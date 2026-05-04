/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Welcome',
    },
    {
      type: 'doc',
      id: 'installation',
      label: '📦 Installation',
    },
    {
      type: 'category',
      label: '🎭 Mask Influences',
      collapsed: false,
      items: [
        'mask-influences/what-is',
        'mask-influences/getting-started',
        'mask-influences/set-influences',
      ],
    },
    {
      type: 'category',
      label: '🎬 Animation & Control',
      collapsed: false,
      items: [
        'animation/control-mask',
        'animation/control-shape',
        'animation/initial-state',
        'animation/timeline',
        'animation/right-click-options',
      ],
    },
    {
      type: 'doc',
      id: 'ui-navigation',
      label: '🧭 UI Navigation',
    },
    {
      type: 'doc',
      id: 'svg-mode',
      label: '⚡ SVG Mode',
    },
    {
      type: 'doc',
      id: 'rig-optimize',
      label: '🔧 Rig Optimize',
    },
    {
      type: 'category',
      label: '📐 Perspective Deform',
      collapsed: false,
      items: [
        'perspective/perspective-shape',
        'perspective/perspective-all-shapes',
        'perspective/perspective-text',
        'perspective/two-point-deformer',
      ],
    },
    {
      type: 'doc',
      id: 'bake',
      label: '🧊 Bake',
    },
    {
      type: 'doc',
      id: 'shortcuts',
      label: '⌨️ Shortcuts',
    },
    {
      type: 'doc',
      id: 'feedback',
      label: '💡 Feedback',
    },
  ],
};

module.exports = sidebars;
