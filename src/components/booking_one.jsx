import React from "react";
import { ArrowBack, AccessTime } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function BookingOne() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                height: '80vh',
                padding: 0,
                margin: 0,
                position: 'fixed',
                top: '10vh',
                left: 0
            }}>
                <header className="booking-page-header">
                    <Link to="/GroundFloor">
                        <div className="booking-back-button">
                            <ArrowBack
                                sx={{
                                    color: 'white'
                                }}>
                            </ArrowBack>
                        </div>
                    </Link>
                    <div className="booking-page-header-app-name">
                        Book a Slot
                    </div>
                </header>
            </div>
            <div className="booking-input-section">
                <TextField
                    color="white"
                    sx={{
                        border: '1px solid',
                        borderColor: 'white',
                        color: 'white',
                        width: '90vw'
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                            fontFamily: 'Jetbrains-R'
                        }
                    }}
                    label="Name"
                    variant="outlined" />
                <TextField
                    color="white"
                    sx={{
                        border: '1px solid',
                        borderColor: 'white',
                        color: 'white',
                        width: '90vw'
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                            fontFamily: 'Jetbrains-R'
                        }
                    }}
                    label="Room No."
                    variant="outlined" />
                <TextField
                    color="white"
                    sx={{
                        border: '1px solid',
                        borderColor: 'white',
                        color: 'white',
                        width: '90vw'
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                            fontFamily: 'Jetbrains-R'
                        }
                    }}
                    label="Phone No."
                    variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        ampm={false}
                        label="Select Start Time"
                        sx={{ borderColor: 'white' }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputLabelProps={{
                                    style: { color: 'white' },  // Ensures the label text is white
                                }}
                            />
                        )}
                        components={{
                            OpenPickerIcon: AccessTime,  // Manually set the clock icon
                        }}
                    />
                    <TimePicker
                        ampm={false}
                        label="Select Stop Time"
                        sx={{ borderColor: 'white' }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputLabelProps={{
                                    style: { color: 'white' },  // Ensures the label text is white
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#673ab7',
                        color: 'white',
                        borderRadius: 3,
                        paddingLeft: 4,
                        paddingRight: 4,
                        fontFamily: 'Jetbrains-R',
                        textTransform: 'None',
                        fontSize: 16,
                        height: '6vh',
                        width: '45vw'
                    }}
                >
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default BookingOne