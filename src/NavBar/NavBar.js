import React, {Component} from 'react';

class NavBar extends Component {
  render() {

    return(
  <nav className="NavBarItems">
      <div className="menu-icon">
            <h1 className="About"> About </h1>
            <h1 className="Mix of the week"> Mix of the week </h1>
            <h1 className="Contact Us"> Contact Us </h1>
      </div>
  </nav>
      

    )
  }
}

export default NavBar;