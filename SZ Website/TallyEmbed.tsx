import React from 'react';

export default function TallyEmbed() {
  return (
    <div 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        width: '100%', 
        height: '650px', 
        borderRadius: '12px' 
      }}
    >
      <iframe 
        src="YOUR_TALLY_EMBED_URL?hideTitle=1&transparentBackground=1" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '710px', 
          border: 'none' 
        }} 
        title="Contact Form"
      />
    </div>
  );
}
