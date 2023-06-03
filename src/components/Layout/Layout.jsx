import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.css';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={classes.container}>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout;