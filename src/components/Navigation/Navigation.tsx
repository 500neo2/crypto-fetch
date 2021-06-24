import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => (
  <nav className="navigation-wrapper">
    <Link className="navigation-link" to="/">
      Main
    </Link>
  </nav>
);
