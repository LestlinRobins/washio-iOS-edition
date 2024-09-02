import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { ArrowBack, Refresh } from "@mui/icons-material";

const supabase = createClient("https://hobnuohsgubcnpzgcdfi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYm51b2hzZ3ViY25wemdjZGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxODc0OTksImV4cCI6MjA0MDc2MzQ5OX0.yPnSCoECzCmc6Bs0gD7g5AxzIt6jHW-1r1CoCKShjMw");

function GroundFloor() {
    const [slots, setSlots] = useState([])

    useEffect(() => {
        getSlots()
    }, [])
    async function getSlots() {
        const { data } = await supabase.from("floor0").select();
        setSlots(data);
    }
    return (
        <div>
            <header className="ground-page-header">
                <Link to="/">
                    <div className="back-button">
                        <ArrowBack sx={{ color: 'white' }}></ArrowBack>
                    </div>
                </Link>
                <div className="ground-page-header-app-name">
                    Ground Floor Slot Booking
                </div>
                <div className="refresh-button">
                    <Refresh></Refresh>
                </div>
            </header>
            <div>
                {JSON.stringify(new Date())}
            </div>
            <div>
                <ul>
                    {slots.map((slot) => (
                        <div key={slot.Name}>
                            <li>{slot.Name}</li>
                            <li>{slot.RoomNo}</li>
                            <li>{slot.Slot}</li>
                            <li>{slot.PhoneNo}</li>
                            <li>{slot.Status}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GroundFloor