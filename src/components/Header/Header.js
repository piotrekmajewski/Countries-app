import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode"

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <h2 className="logo">United Countries browser</h2>
                <div className="switch_mode">
                    <DarkModeIcon />
                    <h3>Dark Mode</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;
