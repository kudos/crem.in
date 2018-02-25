import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Blurb from '../components/Blurb';

import photo from '../content/photo.jpg';
import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Jonathan Cremin"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 660,
            padding: isRoot ? `1.45rem 1.0875rem` : `1rem 0.75rem`,
          }}
        >
          <h1 style={{ margin: 0, fontSize: isRoot ? `3rem` : `1.8rem` }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
            <img src={photo} className="photo" />  Jonathan Cremin
            </Link>
          </h1>
          <div>
          {isRoot ? <Blurb /> : ""}
          <hr />
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 660,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
        <div className="footer">
          <hr />
          Design and content &copy; Jonathan Cremin &ndash; <a href="https://github.com/kudos/crem.in">Fork the design on Github</a>.
        </div>
      </div>
    );
  }
}
