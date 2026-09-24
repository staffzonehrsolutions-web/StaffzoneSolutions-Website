import React from 'react';

type TallyEmbedProps = {
  formId: string;
  title?: string;
  height?: number;
};

export default function TallyEmbed({
  formId,
  title = "StaffZone Solutions Form",
  height = 650,
}: TallyEmbedProps) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: `${height}px`, // Container height
        borderRadius: '12px',
      }}
    >
      <iframe
        src={`https://tally.so/embed/${formId}?hideTitle=1&transparentBackground=1`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${height + 60}px`, // Adds 60px to push the Tally badge out of the visible container
          border: 'none',
        }}
        title={title}
      />
    </div>
  );
}
