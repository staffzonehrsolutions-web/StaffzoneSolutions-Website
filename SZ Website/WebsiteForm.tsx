import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmibhpfeshrwuyzbwazp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaWJocGZlc2hyd3V5emJ3YXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MzY4MzgsImV4cCI6MjEwNjAxMjgzOH0.oTc6jMbm40Mgc_Ry9dO2w0yooGrZc5IPXPZ9addwx7Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function WebsiteForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Save form reference before async calls
    setStatus('Submitting application...');
    
    const formData = new FormData(form);
    const file = formData.get('cv') as File;
    let cvPath = null;

    if (file && file.size > 0) {
      const fileName = `${Date.now()}-${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('cv_uploads')
        .upload(fileName, file);
      
      if (uploadError) {
        setStatus('Error uploading CV. Please try again.');
        return;
      }
      cvPath = uploadData?.path;
    }

    const { error: dbError } = await supabase
      .from('applications')
      .insert([
        {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          cv_path: cvPath
        }
      ]);

    if (dbError) {
      setStatus('Error saving application. Please try again.');
    } else {
      setStatus('Success! Your application has been securely submitted.');
      form.reset(); // Clears all input fields and file upload boxes
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    marginTop: '6px',
    outline: 'none',
    fontFamily: 'inherit'
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box', padding: '10px 0' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '100%' }}>
        <label style={{ width: '100%', display: 'block', fontWeight: '600', fontSize: '14px' }}>
          Name
          <input type="text" name="name" required style={inputStyle} placeholder="Your full name" />
        </label>

        <label style={{ width: '100%', display: 'block', fontWeight: '600', fontSize: '14px' }}>
          Email
          <input type="email" name="email" required style={inputStyle} placeholder="name@example.com" />
        </label>

        <label style={{ width: '100%', display: 'block', fontWeight: '600', fontSize: '14px' }}>
          Message
          <textarea name="message" required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="How can we help you?" />
        </label>

        <label style={{ width: '100%', display: 'block', fontWeight: '600', fontSize: '14px' }}>
          Upload CV (PDF or Word)
          <input type="file" name="cv" accept=".pdf,.doc,.docx" required style={{ ...inputStyle, padding: '8px', background: '#f9fafb' }} />
        </label>
        
        <button 
          type="submit" 
          disabled={status === 'Submitting application...'}
          style={{ 
            width: '100%',
            padding: '14px', 
            background: '#0056b3', 
            color: '#ffffff', 
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer', 
            fontWeight: '600',
            fontSize: '16px',
            marginTop: '8px'
          }}
        >
          Submit Application
        </button>
      </form>
      
      {status && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: status.includes('Success') ? '#15803d' : '#b91c1c' }}>
          {status}
        </p>
      )}
    </div>
  );
}
