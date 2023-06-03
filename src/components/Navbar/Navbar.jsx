import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return <nav className={classes.container}>
    <h1><Link to="#" className={classes.logo}>Logo</Link></h1>
    <input type="checkbox" id={classes.check} />
    <label className={classes.checked} htmlFor={classes.check}>
        <FontAwesomeIcon icon={faBars} />
    </label>
    <label className={classes.unchecked} htmlFor={classes.check}>
        <FontAwesomeIcon icon={faXmark} />
    </label>
    <ul className={classes.navList}>
        <li className={classes.navItem}>Home</li>
        <li className={classes.navItem}>Profile</li>
        <li className={classes.navItem}>About</li>
        <li className={classes.navItem}>Contect</li>
    </ul>
  </nav>;
};

export default Navbar;
