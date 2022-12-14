import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation({ favorites }) {
  return (
    <header className={classes.header} data-testid="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              All Meetups
            </Link>
          </li>

          <li>
            <Link to="/new">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
