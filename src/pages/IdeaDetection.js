import React, { useState, useEffect, useRef } from 'react';

// Must match scripts/encrypt-idea-detection.js
const ITERATIONS = 600000;
const PAGES = [
  { id: 'sol', label: 'Sol vs IdeaLens', file: 'sol-vs-idealens.enc' },
  { id: 'twicetold', label: 'TwiceTold Judge Comparison', file: 'twicetold.enc' },
];

async function decrypt(buf, password) {
  const data = new Uint8Array(buf);
  const salt = data.slice(0, 16);
  const iv = data.slice(16, 28);
  const body = data.slice(28);
  const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    material, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  return crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, body);
}

export default function IdeaDetection() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('locked'); // locked | loading | open
  const [error, setError] = useState('');
  const [urls, setUrls] = useState({});
  const [active, setActive] = useState(PAGES[0].id);
  const urlsRef = useRef({});

  useEffect(() => () => Object.values(urlsRef.current).forEach(URL.revokeObjectURL), []);

  async function unlock(e) {
    e.preventDefault();
    setError('');
    setStatus('loading');
    try {
      const next = {};
      for (const p of PAGES) {
        const res = await fetch(`${process.env.PUBLIC_URL}/idea-detection/${p.file}`);
        if (!res.ok) throw new Error('fetch');
        const html = await decrypt(await res.arrayBuffer(), password);
        next[p.id] = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
      }
      urlsRef.current = next;
      setUrls(next);
      setPassword('');
      setStatus('open');
    } catch (err) {
      setError(err.message === 'fetch' ? 'Could not load the pages.' : 'Incorrect password.');
      setStatus('locked');
    }
  }

  if (status !== 'open') {
    return (
      <div className="container">
        <h2>Idea Detection</h2>
        <p>This page is password protected.</p>
        <form onSubmit={unlock}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            disabled={status === 'loading'}
            style={{ padding: '0.5rem', marginRight: '0.5rem' }}
          />
          <button type="submit" disabled={status === 'loading' || !password}>
            {status === 'loading' ? 'Decrypting…' : 'Unlock'}
          </button>
        </form>
        {error && <p role="alert" style={{ color: '#c0392b' }}>{error}</p>}
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Idea Detection</h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        {PAGES.map(p => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            aria-pressed={active === p.id}
            style={{ padding: '0.4rem 0.8rem', fontWeight: active === p.id ? 700 : 400 }}
          >
            {p.label}
          </button>
        ))}
        <a href={urls[active]} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', alignSelf: 'center' }}>
          Open in new tab ↗
        </a>
      </div>
      {PAGES.map(p => (
        <iframe
          key={p.id}
          src={urls[p.id]}
          title={p.label}
          style={{ display: active === p.id ? 'block' : 'none', width: '100%', height: '80vh', border: '1px solid #8884', borderRadius: 6 }}
        />
      ))}
    </div>
  );
}
