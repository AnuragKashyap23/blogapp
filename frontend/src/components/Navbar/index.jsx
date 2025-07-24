import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './style.module.css'; // CSS module for scoped styles

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">MyBlog</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" end activeClassName={styles.active}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeClassName={styles.active}>Posts</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
