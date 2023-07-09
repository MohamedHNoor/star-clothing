import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as StarLogo } from '../../assets/star-logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <StarLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SHOP IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
