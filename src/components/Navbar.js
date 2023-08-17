import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">TProject</h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}
            ></i>
          </div>
          <ul
            className={
              this.state.clicked ? "navbar-menu active" : "navbar-menu"
            }
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button>Sign Up</button>
          </ul>
        </nav>
        <div  className={
          this.state.clicked ? "dark-background active" : "dark-background"
        }></div>
      </div>
    );
  }
}

export default Navbar;
