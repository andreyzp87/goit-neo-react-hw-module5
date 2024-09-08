import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';


const Navigation = () => {
  return (
    <nav>
      <ul className={style.navigation}>
        <li>
          <NavLink className={style.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navigation;
