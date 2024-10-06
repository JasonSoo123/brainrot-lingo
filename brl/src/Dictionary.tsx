import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Dictionary: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen((prev) => !prev);
    };

    const buttonPlacement: React.CSSProperties = {
        display: "flex",
        //justifyContent: "center",
        alignItems: "center", 
        flexDirection: "column",
        height: '100vh',
        width: '100%',
        paddingTop: '100px',
    };

    const bgStyle = {
        backgroundImage: 'url("images/jh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    const buttonStyle: React.CSSProperties = {
        padding: "10px 20px", // Padding for the button
        backgroundImage: 'url("images/jh.jpg")', // Set the button's background image
        backgroundSize: 'cover', // Make sure the image covers the button
        backgroundPosition: 'center', // Center the image
        borderRadius: "5px", // Rounded corners
        cursor: "pointer", // Pointer cursor on hover
        width: '1000px', // Width for the button
        height: '100px', // Height for the button
        border: '2px solid #000000',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '40px',
        textAlign: 'left',
      };

    return (

        <>
        <div className="">
        <header>
            <nav>
                {/* Logo on the left */}
                <Link to="/">
                        <img src="/images/default-logo.png" alt="Logo" className="logo-img" />
                </Link>
                {/* Navigation links in the center */}
                <ul>
                    <li>
                    <Link to="/" activeClassName="active">Home</Link>
                    </li>
                    <li>
                    <Link to="/learn" activeClassName="active">Learn</Link>
                    </li>
                    <li>
                    <Link to="/dictionary" activeClassName="active">Dictionary</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    

        <div className="dropdown" style={bgStyle}>
            <div style={buttonPlacement}>
            <button 
                className="dropdown-button" 
                onClick={onClick} 
                style={buttonStyle}
        >       {/* Text inside the button */}
                A - names... 
            </button>
        {isOpen && (
            <div className="dropdown-content">
            <h3>Dropdown Content</h3>
            <p>This dropdown appears on button click.</p>
            <p>More information can be added here.</p>
            </div>
        )}
        </div>
    </div>
    </>
    );
  };
  
  export default Dictionary;
  