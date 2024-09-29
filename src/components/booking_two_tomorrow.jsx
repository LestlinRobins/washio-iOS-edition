import React, { useState, useEffect } from "react";
import { ArrowBack, AccessTime } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { supabase } from "../supabase";
import isBetween from 'dayjs/plugin/isBetween'

function BookingTwoTomorrow() {
    const [Name, setName] = useState('')
    const [RoomNo, setRoomNo] = useState()
    const [StartTime, setStartTime] = useState(dayjs())
    const [EndTime, setEndTime] = useState(dayjs().add(1, 'hours'))
    const [error, setError] = useState('')
    const [slots, setSlots] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getSlots()
    }, [])

    async function getSlots() {
        const { data } = await supabase.from("floor1_nextday").select();
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
            if (
                (dayjs(EndTime).isAfter(dayjs(allotedSlotStartTime, 'HH:mm')) &&
                    dayjs(EndTime).isBefore(dayjs(allotedSlotEndTime, 'HH:mm'))) ||
                dayjs(EndTime).isSame(dayjs(allotedSlotStartTime, 'HH:mm')) // End time equals start time of the next slot
            ) {
                setError("Selected time conflicts with an already existing slot!");
                conflict = true;
            } else {
                conflict = false;
            }
        })

        if ((Name != '') && (RoomNo) && (dayjs(StartTime).isBefore(dayjs(EndTime))) && (!conflict)) {
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
            Name: formattedName, RoomNo, Slot, CurrentDay: 'False'
        }
        const { response, error1 } = await supabase
            .from('floor1_nextday')
            .insert(slotdata)
            .select()
        console.log(response)
        console.log(error1)
        navigate('/FirstFloor')
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
                    <Link to="/FirstFloor">
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
                <div className="booking-date-section">{dayjs().add(1, 'day').format('MMMM D, YYYY')}</div>
                <TextField
                    color="white"
                    sx={{
                        border: '1px solid',
                        borderColor: 'white',
                        color: 'white',
                        width: '90vw',
                        alignSelf: 'center'
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                            fontFamily: 'Inter-R'
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
                        width: '90vw',
                        alignSelf: 'center'
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                            fontFamily: 'Inter-R'
                        }
                    }}
                    label="Room No."
                    type="number"
                    variant="outlined"
                    onChange={(e) => {
                        setRoomNo(e.target.value)
                    }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        ampm={false}
                        label="Select Start Time"
                        sx={{ borderColor: 'white', marginLeft: '10px' }}
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
                        sx={{ borderColor: 'white', marginLeft: '10px' }}
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
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: 3,
                        paddingLeft: 4,
                        paddingRight: 4,
                        fontFamily: 'Inter-R',
                        textTransform: 'None',
                        fontSize: 16,
                        height: '6vh',
                        width: '45vw',
                        borderColor: 'white',
                        border: '1px solid',
                        marginLeft: '25px'
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

export default BookingTwoTomorrow