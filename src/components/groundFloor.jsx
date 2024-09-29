import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { ArrowBack, Refresh, Add } from "@mui/icons-material";
import dayjs from "dayjs";
import { Table, TableBody, TableHead, TableContainer, TableCell, TableRow, Fab } from "@mui/material";
import { supabase } from "../supabase";

function GroundFloor() {
    const [slotsTomorrow, setSlotsTomorrow] = useState([])
    const [slots, setSlots] = useState([])
    const [tomorrow, setTomorrow] = useState(false)

    useEffect(() => {
        getSlots();
        getSlotsTomorrow();
    }, [])

    async function getSlots() {
        const { data } = await supabase.from("floor0").select().order('Slot', { ascending: true });
        setSlots(data);
    }

    async function getSlotsTomorrow() {
        const { data } = await supabase.from("floor0_nextday").select().order('Slot', { ascending: true });
        setSlotsTomorrow(data)
    }
    return (
        <div className="main-div-in-floor">
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
                {tomorrow ? dayjs().add(1, 'day').format('MMMM D, YYYY') : dayjs().format('MMMM D, YYYY')}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    Slots
                    <div style={{ color: '#00ff08' }}>.</div>
                </div>
            </div>
            <div style={{ fontFamily: 'Inter-XLI', fontSize: '3.2vw', color: 'grey' }}>
                Refresh the page for updating the list
            </div>
            {tomorrow ? (
                <div className="tab-switcher">
                    <div className="tab-switcher-tab" onClick={() => setTomorrow(false)}>Today</div>
                    <div className="tab-switcher-tab-active">Tomorrow</div>
                </div>
            ) : (
                <div className="tab-switcher">
                    <div className="tab-switcher-tab-active">Today</div>
                    <div className="tab-switcher-tab" onClick={() => setTomorrow(true)}>Tomorrow</div>
                </div>
            )}

            <div className="table-start">
                <TableContainer sx={{ boxShadow: 'none', border: 'none' }}>
                    <Table sx={{ margin: 0, padding: 0, width: '100vw', fontFamily: 'Inter-R', border: 'none', borderBottom: 'none', boxShadow: 'none' }} aria-label="simple table">
                        {/* <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontFamily: 'Jetbrains-B', color: 'white', width: '45vw' }}>NAME</TableCell>
                                <TableCell sx={{ fontFamily: 'Jetbrains-B', color: 'white' }} align="left">SLOT</TableCell>
                                <TableCell sx={{ fontFamily: 'Jetbrains-B', color: 'white', width: '20vw' }} align="left">STATUS</TableCell>
                            </TableRow>
                        </TableHead> */}
                        <TableBody>
                            {(tomorrow ? slotsTomorrow : slots).map((row) => (
                                <TableRow
                                    key={row.Name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ color: 'white', fontFamily: 'Inter-R', fontSize: '15px', width: '75%' }} component="th" scope="row">
                                        {row.Name.slice(0, -4)}
                                        <div className="data-div">
                                            {/* <div className="phone-no-div">
                                                {row.PhoneNo}
                                            </div> */}
                                            <div className="room-no-div">
                                                KH-{row.RoomNo}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', fontFamily: 'Inter-R', fontSize: '15px', padding: 0, margin: 0 }} align="center">
                                        <p style={{ padding: 0, margin: 0 }}>{(row.Slot).split(" ")[0]}</p>
                                        <p style={{ padding: 0, margin: 0 }}>{(row.Slot).split(" ")[1]}</p>
                                    </TableCell>
                                    {row.Status == 'Active' &&
                                        <TableCell sx={{ color: '#04a302', fontFamily: 'Jetbrains-R' }} align="left">⬤</TableCell>
                                    }
                                    {row.Status == 'Finished' &&
                                        <TableCell sx={{ color: '#505050', fontFamily: 'Jetbrains-R' }} align="left">⬤</TableCell>
                                    }
                                    {row.Status == 'Pending' &&
                                        <TableCell sx={{ color: 'red', fontFamily: 'Jetbrains-R' }} align="left">⬤</TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="floating-button">
                <Link to={tomorrow ? '/BookingOneTomorrow' : '/BookingOne'}>
                    <Fab sx={{ borderRadius: 40, width: 50, height: 50, backgroundColor: 'black', color: 'white', border: '2px solid #00ff08' }} aria-label="add">
                        <Add />
                    </Fab>
                </Link>
            </div>
        </div>
    )
}

export default GroundFloor