import React from 'react';

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
};

export default function Contact() {
  return (
    <div>
      <p style={headingStyle}>Contact Number</p>
      <p style={paragraphStyle}>
        <strong>ARCHANA:</strong> 9400562619<br />
        <strong>THANVIR:</strong> 9633009690<br />
        <strong>KRISHNA PRADEEP:</strong> 6282334929<br />
        <strong>NAYANA:</strong> 8590955473<br />
        <strong>KRISHNA:</strong> 8590987104
      </p>
    </div>
  );
}
