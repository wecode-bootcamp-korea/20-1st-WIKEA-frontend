import React from 'react';
import { Link } from 'react-router-dom';
import LINK_LINES from '../FooterList/FooterList';

class FooterLine extends React.Component {
  render() {
    return LINK_LINES.map(line => (
      <ul className="footerLine_links">
        <h4>{line.title}</h4>
        {line.links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    ));
  }
}

export default FooterLine;
