import { useState } from 'react';

import classes from './Header.module.scss';
import Logo from 'images/logo.svg';
import { Menu } from './Menu';

import { Modal } from 'components/Modal';
import { SignUp } from 'components/SignUp';
import { Login } from 'components/SignUp';

const menuItems = [
  {
    url: '#',
    text: 'Features',
  },
  {
    url: '#',
    text: 'Prices',
  },
  {
    url: '#',
    text: 'Resources',
  },
];

export const Header = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  return (
    <>
      <header className={`${classes.header} container`}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <Menu
          links={menuItems}
          handleSignup={openSignup}
          handleLogin={openLogin}
        />
      </header>

      <Modal open={isSignupOpen} title="Sign Up" handleClose={closeSignup}>
        <SignUp closeModal={closeSignup} />
      </Modal>
      <Modal open={isLoginOpen} title="Sign In" handleClose={closeLogin}>
        <Login closeModal={closeLogin} />
      </Modal>
    </>
  );
};
