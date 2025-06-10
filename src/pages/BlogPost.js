import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p=>p.slug===slug);
  if(!post) return <p>Post not found.</p>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p className="blog-date">{post.date}</p>
      <p><em>Authors: {post.authors}</em></p>
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        Read original paper
      </a>
      {post.desc.map(sec=>(
        <div key={sec.heading} className="blog-section">
          <h3>{sec.heading}</h3>
          <ul>
            {sec.content.map((item,i)=><li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}