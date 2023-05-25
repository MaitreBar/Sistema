import "./styleReservaTres.css";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function ReservaTres() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    const horarios = [

        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '00:00',
        '1:00',
        '2:00',
        '3:00',
    ];

    return (
        <div className="body">
            <div className="container-lista">
                <div className="title-head">
                    <h1> Escolha o dia </h1>
                </div>
                <div className="calendar-container">
                    <Calendar onChange={onChange} value={date} />
                </div>

                <div className="title-head-2">
                    <h1> Escolha o horario </h1>
                </div>
                <div className="container-horario">
                    <div className="grid-container">
                        {horarios.map((horario, index) => (
                            <button key={index} className="button">{horario}</button>
                        ))}
                    </div>

                </div>
                <button className="button-28-proximo" >Proximo</button>
            </div>
        </div>

    );
}

export default ReservaTres;