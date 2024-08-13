
import React, { useState } from "react";
import Logo from "../Images/logo.jpg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircle from "@mui/icons-material/AccountCircle"; 
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';
import './navbar.css'; 

const Navbar = () => {
    const navigate = useNavigate();
  
    const { user, logout, setUser } = useUser();
    const [openMenu, setOpenMenu] = useState(false);
    
    const menuOptions = [
        { text: "Home", icon: <HomeIcon /> },
        { text: "About", icon: <InfoIcon /> },
        { text: "Testimonials", icon: <CommentRoundedIcon /> },
        { text: "Contact", icon: <PhoneRoundedIcon /> },
        { text: "Cart", icon: <ShoppingCartRoundedIcon /> },
    ];

    // Function to handle login/logout actions
    const handleAuthClick = () => {
        if (user) {
            // Log out
            setUser(null);
            logout();  // Clear user context
            navigate('/home'); // Navigate to home after logout
        } else {
            // Navigate to the login page
            navigate('/signin'); // Adjust the path to your login page
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-logo-container">
                <img src={Logo} alt="Bakery Logo" className="navbar-logo" />
            </div>
            <div className="navbar-links-container">
                <a onClick={() => navigate('/home')}>Home</a>
                <a onClick={() => navigate('/About')}>About</a>
                <a onClick={() => navigate('/Testimonial')}>Testimonials</a>
                <a onClick={() => navigate('/Contact')}>Contact</a>
                <a onClick={() => navigate('/wishlist')}>Wishlist</a>
                
                {/* Update the anchor tag to reflect login/logout state */}
                <a onClick={handleAuthClick}>
                    {user ? "Logout" : "Login"}
                </a>

                <a onClick={() => navigate('/cart')}>
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button" onClick={() => navigate('/product')}>Book Now</button>
                
                <AccountCircle 
                    className="navbar-profile-icon" 
                    onClick={() => navigate('/profile')} 
                />
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} className="menu-icon" />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => navigate(`/${item.text}`)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;