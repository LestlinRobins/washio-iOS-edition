import React from "react";
import Button from '@mui/material/Button';

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
                    <div style={{ fontFamily: 'monospace' }}>
                        Select your floor
                    </div>
                    <div>
                        Kalapurackal Edition
                    </div>
                </div>
                <div className="home-page-buttons">
                    <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', borderRadius: 20, paddingLeft: 4, paddingRight: 4 }} >
                        Ground Floor
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', borderRadius: 20, paddingLeft: 4, paddingRight: 4 }} >
                        Ground Floor
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', borderRadius: 20, paddingLeft: 4, paddingRight: 4 }} >
                        Ground Floor
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage