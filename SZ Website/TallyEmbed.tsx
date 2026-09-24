import React, { useState } from 'react';

export default function TallyEmbed() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please check your information and try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    }
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      {status === 'success' ? (
        <div style={{
          textAlign: 'center',
          padding: '40px 24px',
          background: '#f0fdf4',
          borderRadius: '12px',
          border: '1px solid #bbf7d0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>✓</div>
          <h3 style={{ color: '#166534', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
            Submission Successful!
          </h3>
          <p style={{ color: '#15803d', fontSize: '15px', marginBottom: '24px' }}>
            Thank you for reaching out. We have received your request and will get back to you shortly.
          </p>
          <button 
            onClick={() => { setStatus('idle'); setErrorMessage(''); }}
            style={{
              backgroundColor: '#166534',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          style={{
            width: '100%',
            padding: '28px',
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            boxSizing: 'border-box'
          }}
        >
          {/* Replace YOUR_ACCESS_KEY_HERE with the key sent to admin@staffzonesolutions.in */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          {status === 'error' && (
            <div style={{
              padding: '12px 16px',
              marginBottom: '20px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#991b1b',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500
            }}>
              ⚠️ {errorMessage}
            </div>
          )}

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
              style={{ width: '100%', padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
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
              style={{ width: '100%', padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
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
              style={{ width: '100%', padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
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
              style={{ width: '100%', padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
            >
              <option value="">Select Option</option>
              <option value="Hiring">Hiring / Staffing</option>
              <option value="Job Seeker">Looking for Opportunity</option>
              <option value="Partnership">Training Partnership</option>
              <option value="Other">Other Enquiry</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', fontWeight: 600, marginBottom: '6px', color: '#1f2937' }}>
              Message*
            </label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              required 
              placeholder="Write your message..."
              style={{ width: '100%', padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              padding: '14px 24px',
              fontSize: '15px',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              width: '100%',
              opacity: status === 'submitting' ? 0.7 : 1
            }}
          >
            {status === 'submitting' ? 'Sending...' : 'Submit Response'}
          </button>
        </form>
      )}
    </div>
  );
}
