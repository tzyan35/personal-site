import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Toh Zhongyan personal website. Nanyang Technological University graduate'
    + ''}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            My Personal Website.Generated using Modern Javascript and React JS.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Alternatively, check out my LinkedIn <a href="https://www.linkedin.com/in/toh-zhongyan-754301205/">here</a>.</p>
      <p> All credits for website design goes to <a href="https://github.com/mldangelo/personal-site">Michael D Angelo</a>.</p>
    </article>
  </Main>
);

export default Index;
