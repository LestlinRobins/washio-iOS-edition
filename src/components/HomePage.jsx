import React from "react";
import Button from '@mui/material/Button';
import groundFloor from "./groundFloor";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <header className="home-page-header">
                <div className="home-page-header-app-name">
                    Wash.io
                </div>
                <div className="home-page-header-info-button">
                    Info
                </div>
            </header>
            <div className="home-page-screen">
                <div className="washing-machine-logo">
                    <img className="washing-machine-img" src="src/assets/main-icon.png" />
                </div>
                <div className="home-page-selection">
                    <div style={{ fontFamily: 'Jetbrains-B', fontSize: '7vw' }}>
                        Select your floor
                    </div>
                    <div style={{ fontFamily: 'Jetbrains-XLI', fontSize: '3vw', color: 'grey' }}>
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
                                fontSize: 15,
                                height: '5vh',
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
                                fontSize: 15,
                                height: '5vh',
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
                                fontSize: 15,
                                height: '5vh',
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