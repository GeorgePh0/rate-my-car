import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";


const NavBar = () => {

    const currentUser = useCurrentUser();
    const SetCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            SetCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i class="fa-solid fa-plus"></i>Add post
        </NavLink>
    )
    const loggedInIcons = (
        <>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
          >
            <i className="fas fa-stream"></i>Feed
          </NavLink>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
          >
            <i className="fas fa-heart"></i>Liked
          </NavLink>
          <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>Sign out
          </NavLink>
          <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
          >
            <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
          </NavLink>
        </>
      );
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin">
                    <i className="fas fa-sign-in"></i>Sign In
            </NavLink>
            <NavLink 
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                    <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
        </>
      );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                    Rate My Car
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;