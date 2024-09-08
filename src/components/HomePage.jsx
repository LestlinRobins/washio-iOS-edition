import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Info } from "@mui/icons-material";


function HomePage() {
    const [devInfo, showDevInfo] = useState(false)
    return (
        <div>
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
                    <img className="washing-machine-img" src="src/assets/main-icon.png" />
                </div>
                <div className="home-page-selection">
                    <div style={{ fontFamily: 'Jetbrains-B', fontSize: '8vw' }}>
                        Select your floor
                    </div>
                    <div style={{ fontFamily: 'Jetbrains-XLI', fontSize: '4vw', color: 'grey' }}>
                        Kalapurackal Edition
                    </div>
                </div>
                <div className="home-page-buttons">
                    <Link to="/GroundFloor">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: 20,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontFamily: 'Jetbrains-R',
                                textTransform: 'None',
                                fontSize: 16,
                                height: '6vh',
                                width: '50vw'
                            }}
                        >
                            Ground Floor
                        </Button>
                    </Link>
                    <Link to="/FirstFloor">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: 20,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontFamily: 'Jetbrains-R',
                                textTransform: 'None',
                                fontSize: 16,
                                height: '6vh',
                                width: '50vw'
                            }} >
                            First Floor
                        </Button>
                    </Link>
                    <Link to="/SecondFloor">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: 20,
                                paddingLeft: 4,
                                paddingRight: 4,
                                fontFamily: 'Jetbrains-R',
                                textTransform: 'None',
                                fontSize: 16,
                                height: '6vh',
                                width: '50vw'
                            }} >
                            Second Floor
                        </Button>
                    </Link>
                </div>
                <div className="home-page-copyright-section">
                    Version 1.0.1
                    <br></br>
                    © 2024 Washio. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default HomePage