import React from 'react';
import {Link} from 'react-router';
import styles from './Menu.css';

function Menu(props) {
  return (<div>
    <div className={styles.menu} role='nav'>
      <Link to='/' className={styles.menuBtn}>Tracks</Link>
      <Link to='/registration-form' className={styles.menuBtn}>RegistrationForm</Link>
      <Link to='/react-with-refs' className={styles.menuBtn}>ReactWithRefs</Link>
      <Link to='/about' className={styles.menuBtn}>About</Link>
    </div>
    {props.children}
  </div>  );
}

export default Menu;
