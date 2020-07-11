import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Hamburger from './Hamburger';

const Header = () => {
  
  const[state, setState] = useState({
    initial: false,
      clicked: null,
      menuName: "Menu",
  })

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close'
      });
  }
};

// Determine menu button should be disabled

const disableMenu = () => {
  setDisabled(!disabled);
  setTimeout(()=> {
    setDisabled(false);
  }, 1200);
}

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to='/'>HAMBRG</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state}/>
    </header>
  );
};

export default Header;
