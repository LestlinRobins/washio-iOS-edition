import React, { useState } from "react";
import { ArrowBack, AccessTime } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { supabase } from "../supabase";

function BookingOne() {
    const [Name, setName] = useState('')
    const [RoomNo, setRoomNo] = useState()
    const [StartTime, setStartTime] = useState(dayjs())
    const [EndTime, setEndTime] = useState(dayjs().add(1, 'hours'))
    const [PhoneNo, setPhoneNo] = useState()

    async function addDataOne() {
        // const { data, error } = await supabase
        //     .from('floor0')
        //     .insert({ Name: 'Brooo', RoomNo: 90, Slot: '15:00 16:00', PhoneNo: 99000000000, Status: 'Active' })
        //     .select()

        // console.log(data)
        const formattedStartTime = dayjs(StartTime).format("HH:mm")
        const formattedEndTime = dayjs(EndTime).format("HH:mm")
        let status = ''
        if (dayjs(StartTime).isBefore(dayjs())) {
            status = 'active'
        }
        else if (dayjs(StartTime).isAfter(dayjs())) {
            status = 'pending'
        }
        else if (dayjs(EndTime).isBefore(dayjs())) {
            status = 'Finished'
        }
        const data = {
            Name, RoomNo, formattedStartTime, formattedEndTime, PhoneNo, status
        }
        console.log(data)
    }
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
                    variant="outlined"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
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
                    variant="outlined"
                    onChange={(e) => {
                        setRoomNo(e.target.value)
                    }}
                />
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
                    variant="outlined"
                    onChange={(e) => {
                        setPhoneNo(e.target.value)
                    }}
                />
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
                        defaultValue={dayjs()}
                        onChange={(newValue) => {
                            setStartTime(newValue)
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
                        defaultValue={dayjs().add(1, 'hours')}
                        onChange={(newValue) => {
                            setEndTime(newValue)
                        }}
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
                    onClick={() => addDataOne()}
                >
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default BookingOne