import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Info } from "@mui/icons-material";

function HomePage() {
    const [devInfo, showDevInfo] = useState(false)
    return (
        <div className="main-home-page-div">
            <header className="home-page-header">
                <div className="home-page-header-app-name">
                    Wash.io
                </div>
                <div className="home-page-header-info-button" onClick={() => showDevInfo(true)}>
                    <Info></Info>
                </div>
            </header>
            {devInfo && (
                <div className="dev-info-main-section">
                    <div className="dev-info-section">
                        <div style={{ fontFamily: 'Jetbrains-B', fontSize: '2.5vh' }}>Dev Information</div>
                        <br></br>
                        <div className="first-dev-info">
                            Developed by Lestlin Robins in React
                            <br></br>
                            Instagram:
                            <a href="https://www.instagram.com/lestlin_robins" target="_blank"> @lestlin_robins</a>
                            <br></br>
                            GitHub:
                            <a href="https://github.com/LestlinRobins" target="_blank"> github.com/lestlinrobins</a>
                            <br></br>
                            Website:
                            <a href="https://lestlinrobins.netlify.app/" target="_blank"> Visit here</a>
                            <br></br>
                            Support:
                            <a href="https://buymeacoffee.com/lestlinrobins" target="_blank"> buymeacoffee.com</a>
                        </div>
                        <div className="second-dev-info">
                            <br></br>
                            UI/UX: Basil
                            <br></br>
                            Instagram:
                            <a href="https://www.instagram.com/basi__gar/" target="_blank"> @basi__gar</a>
                            <br></br>
                            GitHub:
                            <a href="https://github.com/Basil-World" target="_blank"> github.com/Basil-World</a>
                            <br></br>
                        </div>
                        <div className="second-dev-info">
                            <br></br>
                            Native Dev: Sam Joe
                            <br></br>
                            Instagram:
                            <a href="https://www.instagram.com/samjoe.png/" target="_blank"> @samjoe.png</a>
                            <br></br>
                            GitHub:
                            <a href="https://github.com/KingRain" target="_blank"> github.com/KingRain</a>
                            <br></br>
                        </div>
                        <br></br>
                        <div style={{ fontFamily: 'Jetbrains-B', color: 'grey' }} onClick={() => showDevInfo(false)}>Close</div>
                    </div>
                </div>
            )}
            <div className="home-page-screen">
                <div className="washing-machine-logo">
                    <img className="washing-machine-img" src="https://lh3.googleusercontent.com/d/1cHSA2kFOz8e1NQOhggPXCuUQZSI8UfG9=w1000?authuser=1/view" />
                </div>
                <div className="home-page-selection">
                    <div style={{ fontFamily: 'Inter-B', fontSize: '10vw', marginBottom: '-10px' }}>
                        Select your
                    </div>
                    <div style={{ fontFamily: 'Inter-B', fontSize: '10vw', display: 'flex', flexDirection: 'row' }}>
                        Floor
                        <div style={{ color: '#00ff08' }}>.</div>
                    </div>
                </div>
                <div className="home-page-buttons">
                    <Link to="/GroundFloor">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                borderRadius: 3,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontFamily: 'Inter-B',
                                textTransform: 'None',
                                fontSize: 26,
                                height: '10vh',
                                width: '20vw',
                                border: '2px solid white'
                            }}
                        >
                            0
                        </Button>
                    </Link>
                    <Link to="/FirstFloor">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                borderRadius: 3,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontFamily: 'Inter-B',
                                textTransform: 'None',
                                fontSize: 26,
                                height: '10vh',
                                width: '20vw',
                                border: '2px solid white'
                            }} >
                            1
                        </Button>
                    </Link>
                    <Link to="/SecondFloor">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                borderRadius: 3,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontFamily: 'Inter-B',
                                textTransform: 'None',
                                fontSize: 26,
                                height: '10vh',
                                width: '20vw',
                                border: '2px solid white'
                            }} >
                            2
                        </Button>
                    </Link>
                </div>
                <div className="home-page-copyright-section">
                    Kalappurackal Edition
                    <br></br>
                    Version 2.0.1
                    <br></br>
                    © 2024 Washio. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default HomePage