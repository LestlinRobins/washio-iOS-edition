import React, { useState, useEffect } from "react";
import { ArrowBack, AccessTime } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import isBetween from 'dayjs/plugin/isBetween'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { supabase } from "../supabase";

function BookingThree() {
    const [Name, setName] = useState('')
    const [RoomNo, setRoomNo] = useState()
    const [StartTime, setStartTime] = useState(dayjs())
    const [EndTime, setEndTime] = useState(dayjs().add(1, 'hours'))
    const [PhoneNo, setPhoneNo] = useState()
    const [error, setError] = useState('')
    const [slots, setSlots] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getSlots()
    }, [])

    async function getSlots() {
        const { data } = await supabase.from("floor2").select();
        setSlots(data);
    }

    async function evaluateData() {
        let flag = false
        let conflict = false
        if (Name == '') {
            setError("Please enter your name!")
        }
        else if (!RoomNo) {
            setError("Please enter your room number!")
        }
        else if (!PhoneNo) {
            setError("Please enter your phone number!")
        }
        else if (dayjs(StartTime).isBefore(dayjs()) || dayjs(EndTime).isBefore(dayjs())) {
            setError("Please select a proper slot!")
        }
        else if (dayjs(StartTime).isAfter(dayjs(EndTime))) {
            setError("Please select a proper slot!")
        }
        slots.forEach((element) => {
            const allotedSlotStartTime = element.Slot.split('\n')[0]
            const allotedSlotEndTime = element.Slot.split('\n')[1]
            if ((dayjs(StartTime).isBetween(dayjs(allotedSlotStartTime, 'HH:mm'), dayjs(allotedSlotEndTime, 'HH:mm')))) {
                setError("Selected time conflicts with an already existing slot!")
                conflict = true
            }
        })

        if ((Name != '') && (RoomNo) && (PhoneNo) && (dayjs(StartTime).isBefore(dayjs(EndTime))) && (dayjs(StartTime).isAfter(dayjs())) && (dayjs(EndTime).isAfter(dayjs())) && (!conflict)) {
            setError('')
            flag = true
        }
        if (flag) {
            addDataOne()
        }
        let status = ''
        if (dayjs(StartTime).isBefore(dayjs()) && dayjs(EndTime).isAfter(dayjs())) {
            status = 'Active'
        }
        else if (dayjs(StartTime).isAfter(dayjs())) {
            status = 'Pending'
        }
        else if (dayjs(EndTime).isBefore(dayjs())) {
            status = 'Finished'
        }

    }
    async function addDataOne() {
        const formattedStartTime = dayjs(StartTime).format("HH:mm")
        const formattedEndTime = dayjs(EndTime).format("HH:mm")
        const Slot = formattedStartTime + '\n' + formattedEndTime
        const formattedName = `${Name} (${RoomNo})`
        const slotdata = {
            Name: formattedName, RoomNo, Slot, PhoneNo
        }
        const { response, error1 } = await supabase
            .from('floor2')
            .insert(slotdata)
            .select()
        console.log(response)
        console.log(error1)
        navigate('/SecondFloor')
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
                    <Link to="/SecondFloor">
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
                    type="number"
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
                    type="number"
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
                    onClick={() => evaluateData()}
                >
                    Submit
                </Button>
            </div>
            {error !== '' && (
                <div className="booking-error-toast">
                    {error}
                </div>
            )}
        </div>
    )
}

export default BookingThree