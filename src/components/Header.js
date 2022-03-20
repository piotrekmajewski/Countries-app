import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode"

function Header({ onClick, darkMode }) {
    return (
        <div className={`header ${darkMode ? 'darkMode' : ''}`}>
            <div className="header-container">
                <h2 className="logo">Zjednoczone kraje</h2>
                <div className="switch_mode" onClick={onClick}>
                    <DarkModeIcon />
                    <h3>Tryb ciemny</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;
