import React from 'react';
import { media } from '../data/media';

export default function Media() {
  return (
    <div className="container">
      <h2>Media</h2>
      {media.map(m => (
        <div className="section" key={m.link}>
          <h3>
            <a href={m.link} target="_blank" rel="noopener noreferrer">{m.title}</a>
          </h3>
          <p>
            {m.author}. <em>{m.outlet}</em>, {m.date}.
            <br/>
            <strong>{m.kind}</strong> · {m.project}
          </p>
        </div>
      ))}
    </div>
  );
}
