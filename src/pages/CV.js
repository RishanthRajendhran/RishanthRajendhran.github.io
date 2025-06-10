import React from 'react';

export default function CV() {
  return (
    <div className="container">
      <h2>Curriculum Vitae</h2>
      <div className="cv-viewer">
        {/* Place your real PDF at public/cv.pdf */}
        <iframe src="/cv.pdf" title="CV" frameBorder="0"/>
      </div>
      <div className="download-btn">
        <a href="/cv.pdf" download>Download CV (PDF)</a>
      </div>
    </div>
  );
}