import React from 'react';
import { media } from '../data/media';

export default function Media() {
  return (
    <div className="container">
      <h2>Media</h2>
      {media.map(m => (
        <div className="section" key={m.title}>
          <h3>
            {m.link
              ? <a href={m.link} target="_blank" rel="noopener noreferrer">{m.title}</a>
              : m.title}
          </h3>
          <p>
            {m.author}. <em>{m.outlet}</em>, {m.date}.
            <br/>
            <strong>{m.kind}</strong> · {m.project}
          </p>
          {m.audio && <audio controls preload="none" src={m.audio} style={{ width: '100%', maxWidth: 480 }}/>}
          {m.audioNotice && <p style={{ fontSize: '0.8em', opacity: 0.75, marginTop: '0.25rem' }}>{m.audioNotice}</p>}
        </div>
      ))}
    </div>
  );
}
