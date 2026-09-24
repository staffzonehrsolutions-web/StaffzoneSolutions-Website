import React from 'react';

export default function TallyEmbed() {
  return (
    <form 
      action="https://api.web3forms.com/submit" 
      method="POST" 
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '24px',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Replace YOUR_ACCESS_KEY_HERE with key sent to admin@staffzonesolutions.in */}
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="name" style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: '#1f2937' }}>
          Full Name*
        </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required 
          placeholder="Enter your name"
          style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: '#1f2937' }}>
          Email Address*
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required 
          placeholder="name@example.com"
          style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="phone" style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: '#1f2937' }}>
          Mobile Number*
        </label>
        <input 
          type="tel" 
          name="phone" 
          id="phone" 
          required 
          placeholder="Enter mobile number"
          style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="enquiry" style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: '#1f2937' }}>
          Enquiry Type*
        </label>
        <select 
          name="enquiry" 
          id="enquiry" 
          required
          style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
        >
          <option value="">Select Option</option>
          <option value="Hiring">Hiring / Staffing</option>
          <option value="Job Seeker">Looking for Opportunity</option>
          <option value="Partnership">Training Partnership</option>
          <option value="Other">Other Enquiry</option>
        </select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="message" style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: '#1f2937' }}>
          Message*
        </label>
        <textarea 
          name="message" 
          id="message" 
          rows={4} 
          required 
          placeholder="Write your message..."
          style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
        />
      </div>

      <button 
        type="submit" 
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          border: 'none',
          padding: '12px 24px',
          fontSize: '15px',
          fontWeight: 600,
          borderRadius: '8px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Submit
      </button>
    </form>
  );
}
