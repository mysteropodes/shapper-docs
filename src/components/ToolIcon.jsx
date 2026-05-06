import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ToolIcon({ src, size = 32 }) {
  const url = useBaseUrl(src);
  return (
    <img
      src={url}
      width={size}
      height={size}
      style={{ verticalAlign: 'middle', display: 'inline-block' }}
    />
  );
}
