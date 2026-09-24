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
      {/* ⚠️ CRITICAL FIX: Replace the link below with your actual Tally link ⚠️ */}
      <iframe 
        src="https://tally.so/embed/YOUR_FORM_ID_HERE?hideTitle=1&transparentBackground=1" 
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
