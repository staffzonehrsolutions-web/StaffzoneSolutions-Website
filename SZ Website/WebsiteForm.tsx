import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmibhpfeshrwuyzbwazp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaWJocGZlc2hyd3V5emJ3YXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MzY4MzgsImV4cCI6MjEwNjAxMjgzOH0.oTc6jMbm40Mgc_Ry9dO2w0yooGrZc5IPXPZ9addwx7Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function WebsiteForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting application...');
    
    const formData = new FormData(e.currentTarget);
    const file = formData.get('cv') as File;
    let cvPath = null;

    // 1. Upload CV to Storage if provided
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

    // 2. Save form text to Database
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
      e.currentTarget.reset();
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label>
          <strong>Name</strong><br/>
          <input type="text" name="name" required style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          <strong>Email</strong><br/>
          <input type="email" name="email" required style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          <strong>Message</strong><br/>
          <textarea name="message" required rows={4} style={{ width: '100%', padding: '8px' }}></textarea>
        </label>
        <label>
          <strong>Upload CV (PDF or Word)</strong><br/>
          <input type="file" name="cv" accept=".pdf,.doc,.docx" required style={{ padding: '8px 0' }} />
        </label>
        
        <button 
          type="submit" 
          disabled={status === 'Submitting application...'}
          style={{ padding: '12px', background: '#0056b3', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Submit Application
        </button>
      </form>
      
      {status && <p style={{ marginTop: '15px', fontWeight: 'bold', color: status.includes('Success') ? 'green' : 'red' }}>{status}</p>}
    </div>
  );
}
