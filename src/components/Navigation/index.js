import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import "./Navigation.css";

const Navigation = () => (
  <div>
    <div className="Navi">
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  </div>
);
const NavigationAuth = () => (
 <div>
      <Link to={ROUTES.LANDING}>Landing</Link>
    
      <Link to={ROUTES.HOME}>Home</Link>
    
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    
      <Link to={ROUTES.ADMIN}>Admin</Link>
    
      <SignOutButton />
 </div>
);

const NavigationNonAuth = () => (
 <div className="Navi"> 
      <Link to={ROUTES.LANDING}>Landing</Link>
    
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
 </div>  
);

export default Navigation;