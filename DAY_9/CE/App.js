import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Assuming you are using React Router
import Home from './components/home';
import Singers from './components/singers';
import Album from './components/album';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/albums" style={styles.navLink}>Albums</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/singers" style={styles.navLink}>Singers</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singers' element={<Singers />} />
        <Route path='/albums' element={<Album />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default App;
