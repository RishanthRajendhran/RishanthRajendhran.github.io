import React from 'react';
import { personal }     from '../data/personal';
import { publications } from '../data/publications';

export default function Publications() {
  return (
    <div className="container">
        <h2>Publications</h2>
        <div className="publications-grid">
            {publications
            .sort((a, b) => {
                const d = new Date(b.date) - new Date(a.date);
                if (d !== 0) return d;
                const af = a.authors[0] === personal.name ? -1 : 1;
                const bf = b.authors[0] === personal.name ? -1 : 1;
                return af - bf;
            })
            .map(pub => (
                <div className="publication-card" key={pub.id}>
                <h3>
                    <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {pub.title}
                    </a>
                </h3>
                <p className="pub-authors">
                    {pub.authors.map((author, idx) => (
                    <span key={idx}>
                        {author === personal.name
                        ? <strong>{author}</strong>
                        : author}
                        {idx < pub.authors.length - 1 && ', '}
                    </span>
                    ))}
                </p>
                <p className="pub-meta">
                    {pub.conf} — {pub.id}
                </p>
                <p className="pub-meta">
                    <strong><a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Paper
                    </a></strong> / <strong><a
                    href={pub.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Github
                    </a></strong>
                </p>
                </div>
            ))}
        </div>
    </div>
  );
}