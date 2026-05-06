/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // ── Getting Started ──────────────────────────────────
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Welcome',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'installation',
        'getting-started/ui-overview',
      ],
    },

    // ── Core Concepts ─────────────────────────────────────
    {
      type: 'category',
      label: '💡 Core Concepts',
      collapsed: false,
      items: [
        'core-concepts/how-it-works',
        'core-concepts/expression-mode',
        'core-concepts/live-mode',
      ],
    },

    // ── Mask Influences ───────────────────────────────────
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

    // ── Tools ─────────────────────────────────────────────
    {
      type: 'category',
      label: '🛠️ Tools',
      collapsed: false,
      items: [
        'tools/selection-modes',
        { type: 'doc', id: 'tools/magnet-brush',   label: 'Magnet Brush (NEW)' },
        { type: 'doc', id: 'tools/transform-box',  label: 'Transform Box (NEW)' },
        { type: 'doc', id: 'tools/ik-system',      label: 'IK System (Coming Soon)' },
      ],
    },

    // ── Animation ─────────────────────────────────────────
    {
      type: 'category',
      label: '🎬 Animation',
      collapsed: false,
      items: [
        { type: 'doc', id: 'animation/path-animation',      label: 'Path Animation (NEW)' },
        'animation/control-mask',
        'animation/control-shape',
        { type: 'doc', id: 'animation/follow-control-null', label: 'Follow & Control Null (NEW)' },
        { type: 'doc', id: 'animation/autosway',            label: 'Autosway (NEW)' },
        'animation/timeline',
        'animation/right-click-options',
      ],
    },

    // ── Perspective ───────────────────────────────────────
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

    // ── Solo pages ────────────────────────────────────────
    { type: 'doc', id: 'bake',         label: '🧊 Bake' },
    { type: 'doc', id: 'rig-optimize', label: '🔧 Rig Optimize' },
    { type: 'doc', id: 'shortcuts',    label: '⌨️ Shortcuts' },
    { type: 'doc', id: 'feedback',     label: '💡 Feedback' },
  ],
};

module.exports = sidebars;
