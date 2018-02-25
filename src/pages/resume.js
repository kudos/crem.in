import React from 'react';
import GatsbyLink from 'gatsby-link';

import photo from '../content/photo.jpg';

import Octocat from 'react-icons/lib/go/mark-github';
import InsertLink from 'react-icons/lib/md/insert-link';

import '../css/resume.css';

export default function Resume() {
  return (
    <div className="resume">
      <p><a href="mailto:jonathan@crem.in">jonathan@crem.in</a> +353&nbsp;(0)86&nbsp;806&nbsp;8070</p>
      <div id="about">
        I'm an experienced software engineering manager working primarily in distributed teams, with an interest in all aspects of web stacks.
        I'm active in the local tech community and have given talks on security, Javascript, frontend web performance and testing, Git and MongoDB.
      </div>
      <hr />

      <div className="experience">
        <h2>Work Experience</h2>

        <h3>Udemy <small>Dublin, Ireland</small></h3>
        <p>SRE Manager &mdash; November 2015 to Present</p>
        <ul>
          <li>Established SRE team and grew to eight engineers.</li>
          <li>Introduced bi-weekly operations review meeting with all engineering managers.</li>
          <li>Continued to participate fully in on-call rotation.</li>
          <li>Designed mechanism for unit testing Ansible roles using Docker and Bats.</li>
        </ul>

        <h3>Udemy <small>Dublin, Ireland</small></h3>
        <p>Technical Lead &mdash; January 2015 to November 2015</p>
        <ul>
          <li>First engineering hire in Dublin.</li>
          <li>Hired and managed new team members for web app and ops teams.</li>
          <li>Started and helped with logistics for technical meetups hosted and sponsored by Udemy.</li>
          <li>Refactored unmanageable Puppet manifest from a 4,000 line single file to be modular and easier to understand. Created tests, test harness and added CI builds.</li>
          <li>Frustrated by a remote monolithic development environment in Los Angeles, rearchitected it to run as containers locally.</li>
          <li>Built novel mechanism for load testing infrastructure at new data centre prior to move. This surfaced a number of performance issues and misconfigurations.</li>
          <li>Took part in on-call rotation and produced monitors and runbooks for existing systems.</li>
        </ul>

        <h3>Engine Yard <small>Dublin, Ireland</small></h3>
        <p>Senior Software Engineer &mdash; October 2011 to November 2014</p>
        <ul>
          <li>Built first prototype of new UI with AngularJS.</li>
          <li>Rich Javascript client communicating with an API via a thin request-signing Node proxy.</li>
          <li>New UI is now the primary interface for customers deploying PHP apps.</li>
          <li>Built our first E2E integration tests and automated testing feature branches in our QA process.</li>
          <li>Drove frontend optimisation for this product and the relaunched marketing site.</li>
        </ul>

        <h3>Echolibre <small>Dublin, Ireland</small></h3>
        <p>Software Engineer (Contractor) &mdash; May 2011 to October 2011</p>
        <ul>
          <li>Cross-browser compatibility work on a javascript and iframe heavy site.</li>
          <li>Made significant changes to enhance performance including using a CDN, spriting images, minifying and combining JS/CSS.</li>
          <li>Built an automated deployment mechanism to handle resource compilation and cache invalidation using Git.</li>
        </ul>

        <h3>Web Reservations International <small>Dublin, Ireland</small></h3>
        <p>Senior Software Engineer &mdash; October 2009 to October 2011</p>
        <ul>
          <li>Hired into the Hostelworld.com modernisation team. The project took the core business from a PHP4 procedural design to PHP5 OOP MVC using test-driven development.</li>
          <li>Gave a web application security talk to all developers and sysadmins upon discovering a lack of security awareness with vulnerable code appearing even in the modernisation project.</li>
          <li>Appointed to the Security Incident Response team for PCI DSS compliance.</li>
          <li>Performed migration from Subversion to Git to facilitate a more flexible development process and deployment mechanism, including development of those processes and systems.</li>
          <li>Joined newly created engineering team, worked on overall performance for hostelworld.com.</li>
        </ul>

        <h3>Neowin <small>Haarlem, The Netherlands</small></h3>
        <p>Software Engineer (Contractor) &mdash; March 2008 to October 2009</p>
        <ul>
          <li>Worked on heavily modified Invision Power Board site.</li>
        </ul>

        <h3>Cellcast Television <small>London, England</small></h3>
        <p>Software Engineer (Contractor) &mdash; August 2007 to January 2008</p>
        <ul>
          <li>Built staff scheduling system for independent contractors.</li>
        </ul>

        <h3>4Site Design Consultants <small>Clare, Ireland</small></h3>
        <p>Software Engineer &mdash; January 2006 to October 2009</p>
        <ul>
          <li>Built standards-adhering CMS for telecoms engineers.</li>
        </ul>

        <h3>The Gallows Bar <small>Cork, Ireland</small></h3>
        <p>Bar Manager &mdash; July 1999 to August 2003</p>
      </div>

      <hr />

      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>BSc Computer Systems, University of Limerick</li>
          <li>Leaving Certificate, Col&aacute;iste an Phiarsaigh</li>
        </ul>
      </div>

      <hr />

      <div className="education">
        <h2>Continued Learning</h2>
        <ul>
          <li><em>iOS Development</em>, Treehouse <small className="complete">Complete</small></li>
          <li><em>React Lessons</em>, Egghead <small className="complete">Complete</small></li>
          <li><em>Learning Data Structures and Algorithms</em>, Udemy <small className="complete">Complete</small></li>
          <li><em>Sketch 3: learn to create mobile and web designs</em>, Udemy <small className="in-progress">In&nbsp;Progress</small></li>
        </ul>
      </div>

      <hr />

      <div className="skills">
        <h2>Primary Technology Skills</h2>
        <div className="row">
          <div className="six columns">
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>Objective-C</li>
              <li>React</li>
              <li>Angular</li>
              <li>HTML/CSS</li>
              <li>E2E Testing</li>
              <li>Web Security</li>
              <li>Web Performance</li>
            </ul>
            </div>
            <div className="six columns">
            <ul>
              <li>Linux</li>
              <li>Git</li>
              <li>Nginx</li>
              <li>Ansible</li>
              <li>Puppet</li>
              <li>MySQL/Postgres</li>
              <li>MongoDB</li>
              <li>Monitoring</li>
              <li>Continuous Integration</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="projects">
        <h2>Personal Projects</h2>

        <h3>Hostr <a href="https://hostr.co" className='screen'><InsertLink size='1.5rem' color='#1EAEDB' /></a> <a href="https://github.com/kudos/hostr" className='screen'><Octocat size='1.5rem' color='#1EAEDB' /></a> <span className="print">(https://hostr.co)</span></h3>
        <p>With a slick interface, serving up over a billion downloads and with over a hundred thousand registered users, Hostr provides a quick and easy way to share files.
        </p>
        <p>This was a side project I started in 2006 and it's now open source.
        It's been through half a dozen total rewrites in 3 languages since then.
        I use it as a testbed for new technologies I want to play around with.</p>
        <p>I've also built a companion <a href="https://github.com/kudos/hostr-mac">Mac menu bar app</a> with Cocoa/Obj-C and a never-released iOS app.</p>

        <h3>Combine.fm <a href="https://combine.fm" className='screen'><InsertLink size='1.5rem' color='#1EAEDB' /></a> <a href="https://github.com/kudos/combine.fm" className='screen'><Octocat size='1.5rem' color='#1EAEDB' /></a> <span className="print">(https://combine.fm)</span></h3>
        <p>Combine.fm takes links from various music subscription services and returns a page containing matching links to all other services to allow broader sharing.</p>

        <p>I started this in December 2014 as an excuse to build something isomorphically with React.
          It has been developed from the beginning as an open source project.</p>

        <h3>Others <a href="https://github.com/kudos" className='screen'><Octocat size='1.5rem' color='#1EAEDB' /></a> <span className="print">(https://github.com/kudos)</span></h3>
        <p>I've published some other small projects on Github, including Python, NodeJS and PHP libraries. I also regularly contribute back to other projects.</p>
      </div>
    </div>
  );
}

