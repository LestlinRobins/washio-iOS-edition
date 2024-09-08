import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { ArrowBack, Refresh, Add } from "@mui/icons-material";
import dayjs from "dayjs";
import { Table, TableBody, TableHead, TableContainer, TableCell, TableRow, Fab } from "@mui/material";
import { supabase } from "../supabase";

function GroundFloor() {
    const [slots, setSlots] = useState([])

    useEffect(() => {
        getSlots()
    }, [])

    async function getSlots() {
        const { data } = await supabase.from("floor0").select().order('Slot', { ascending: true });
        setSlots(data);
    }
    return (
        <div style={{ height: '80vh', padding: 0, margin: 0, position: 'fixed', top: '10vh', left: 0 }}>
            <header className="ground-page-header">
                <Link to="/">
                    <div className="back-button">
                        <ArrowBack sx={{ color: 'white' }}></ArrowBack>
                    </div>
                </Link>
                <div className="ground-page-header-app-name">
                    Ground Floor Slot Booking
                </div>
                <div className="refresh-button" onClick={() => getSlots()}>
                    <Refresh></Refresh>
                </div>
            </header>
            <div className="date-section">
                {dayjs().format('MMMM D, YYYY')} Slots
            </div>
            <div style={{ fontFamily: 'Jetbrains-XLI', fontSize: '3vw', color: 'grey' }}>
                Refresh this page for updating the list
            </div>
            <div className="table-start">
                <TableContainer sx={{ boxShadow: 'none', border: 'none' }}>
                    <Table sx={{ margin: 0, padding: 0, width: '100vw', backgroundColor: 'rgba(29,29,29,255)', fontFamily: 'Jetbrains-R', border: 'none', borderBottom: 'none', boxShadow: 'none' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontFamily: 'Jetbrains-B', color: 'white', width: '45vw' }}>NAME</TableCell>
                                <TableCell sx={{ fontFamily: 'Jetbrains-B', color: 'white' }} align="left">SLOT</TableCell>
                                <TableCell sx={{ fontFamily: 'Jetbrains-B', color: 'white', width: '20vw' }} align="left">STATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {slots.map((row) => (
                                <TableRow
                                    key={row.Name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ color: 'white', fontFamily: 'Jetbrains-R' }} component="th" scope="row">{row.Name}</TableCell>
                                    <TableCell sx={{ color: 'white', fontFamily: 'Jetbrains-R', padding: 0, margin: 0 }} align="center">
                                        <p style={{ padding: 0, margin: 0 }}>{(row.Slot).split(" ")[0]}</p>
                                        <p style={{ padding: 0, margin: 0 }}>{(row.Slot).split(" ")[1]}</p>
                                    </TableCell>
                                    {row.Status == 'Active' &&
                                        <TableCell sx={{ color: '#04a302', fontFamily: 'Jetbrains-R' }} align="left">{row.Status}</TableCell>
                                    }
                                    {row.Status == 'Finished' &&
                                        <TableCell sx={{ color: '#505050', fontFamily: 'Jetbrains-R' }} align="left">{row.Status}</TableCell>
                                    }
                                    {row.Status == 'Pending' &&
                                        <TableCell sx={{ color: 'red', fontFamily: 'Jetbrains-R' }} align="left">{row.Status}</TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="floating-button">
                <Link to='/BookingOne'>
                    <Fab sx={{ borderRadius: 4, width: 50, height: 50, backgroundColor: '#673ab7', color: 'white' }} aria-label="add">
                        <Add />
                    </Fab>
                </Link>
            </div>
        </div>
    )
}

export default GroundFloor