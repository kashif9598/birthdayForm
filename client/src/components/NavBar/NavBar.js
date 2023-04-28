import { Link, NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.left}>
            <NavLink className={classes.homeLink} to='/'>
                Birthday
            </NavLink>
            </div>
            <div className={classes.right}>
                <NavLink className={classes.pages} to='/list'>
                    List
                </NavLink>
                <NavLink className={classes.pages} to='/form'>
                    Form
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;