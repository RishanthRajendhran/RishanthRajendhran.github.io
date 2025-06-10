import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogIndex() {
  return (
    <div className="container">
      <h2>Blog</h2>
      <ul className="blog-list">
        {blogPosts.map(post=>(
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}