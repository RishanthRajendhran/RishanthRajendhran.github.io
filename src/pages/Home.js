// src/pages/Home.js
import React from 'react';
import {
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaHome
} from 'react-icons/fa';

import { interests }    from '../data/interests';
import { publications } from '../data/publications';
import { news }         from '../data/news';
import { personal }     from '../data/personal';

export default function Home() {
  return (
    <div className="container">

      {/* ◼︎ MULTI-SECTION (About | Interests | News + Sidebar + Credo */}
      <div className="multi-section">

        {/* — left: credo & email, about, interests, news */}
        <div className="multi-left">

          {/* ABOUT */}
          <section className="section about">
            {/* <h1>{personal.name}</h1> */}
            <p className="bio">
              <strong> 👋 Hey, there! </strong>
              <strong> 🙏 Vanakkam! </strong>
              <br/><br/>
              My name is Rishanth and I am a second-year Ph.D. student in Computer Science at the University of Maryland, advised by Prof. <a href="https://www.cs.umd.edu/~miyyer/" target="_blank"> Mohit Iyyer </a>. 
              <br/><br/>
              My research focuses on analysing and improving generations by large language models, particularly long-context reasoning, factuality, and reinforcement learning from human/AI feedback. 
              <br/><br/>
              I completed my masters in CS at the University of Utah, where I was fortunate to be advised by Prof. <a href="https://www.anamarasovic.com" target="_blank"> Ana Marasović </a>.
              I also hold a B.Tech. in Computer Science and Engineering from IIT Madras.
              <br/><br/>
              {/* I am obsessed with thrillers/whodunnits in any form. Big fan of the Coromoran Strike series by JK Rowling and Robert Langdon series by Dan Brown. 
              <br/><br/>
              Outside work, you can find me at the gym or on a run on Paint Branch trail. Also into biking and swimming. 
              <br/><br/>
              I took guitar lessons for a couple of months a while ago. Looking to restart. */}
            </p>
          </section>

          {/* RESEARCH INTERESTS */}
          <section className="section interests">
            <h2>Current Research Interests</h2>
            <ul>
              {interests.map(i => <li key={i.title}>{i.title}</li>)}
            </ul>
          </section>

          {/* NEWS */}
          <section className="section news">
            <h2>News</h2>
            <ul>
              {news.map(n => (
                <li key={n.title}>
                  <span className="news-date">{n.date}</span>{' '}
                  <a href={n.link} target="_blank">{n.title}</a>
                </li>
              ))}
            </ul>
          </section>

        </div>{/* /.multi-left */}

        {/* — right: Sidebar + Credo */}
        <div className='multi-right'>
            <aside className="about-sidebar">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="profile-pic"
            />
            <p className="profile-name">{personal.name}</p>
            <p className="profile-tamil">{personal.authorInTamil}</p>
            <p className="profile-location">
              <FaMapMarkerAlt /> {personal.location}
            </p>
            <p className="profile-hometown">
              <FaHome /> {personal.hometown}
            </p>
            <div className="social-links">
              <a href={personal.twitter}    target="_blank" rel="noopener noreferrer">
                <FaTwitter/>
              </a>
              <a href={`mailto:${personal.email}`}>
                <FaEnvelope />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>
            </div>
          </aside>
          {/* — Credo box */}
          <div className="credo-box">
            <p><strong>“{personal.credo}”</strong></p>
          </div>
          {/* — Credo Tamil box */}
          <div className="credo-box">
            <p><strong>“{personal.credoInTamil}”</strong></p>
          </div>
        </div>
      </div>{/* /.multi-section */}

      {/* AFFILIATIONS */}
      <section className="section affiliations">
        <h2>Affiliations</h2>
        <div className="affiliations-grid">
          {personal.affiliations.map(a => (
            <a
              key={a.name}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="affiliation-card"
            >
              <img src={a.logo} alt={a.name} />
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT-CONTD */}
      <section className="section about">
        <h1>Trivia</h1>
        <p className="bio">
          I am obsessed with thrillers/whodunnits in any form. Big fan of the Coromoran Strike series by JK Rowling and Robert Langdon series by Dan Brown. 
          <br/><br/>
          Outside work, you can find me at the gym or on a run on Paint Branch trail. Also into biking and swimming. 
          <br/><br/>
          I took guitar lessons for a couple of months a while ago. Looking to restart.
        </p>
      </section>

    </div>
  );
}