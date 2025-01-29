import React from 'react';
import './App.css';
import {useState} from 'react';
import PropTypes from 'prop-types';

function BookingForm({ timeOptions, dispatch }) {
    const[resDate, setResDate] = useState("");
    const[resTime, setResTime] = useState("");
    const[guests, setGuests] = useState("1");
    const[occasion, setOccasion] = useState("");

    function handleSubmit(e){
        e.preventDefault();
    };

    function changeHandler(e) {
        const { name, value } = e.target;

    if (name === "resDate") {
        setResDate(value);
        dispatch({ type: 'update_times', payload: value });
    } else if (name === "resTime") {
        setResTime(value);
    } else if (name === "guests") {
        setGuests(value);
    } else if (name === "occasion") {
        setOccasion(value);
    }

    };

    return(
        <form style ={{ display:'grid', maxWidth:'200px', gap:'20px'}} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="resDate" value={resDate} onChange={changeHandler} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="resTime" value={resTime} onChange={changeHandler} required>
                {timeOptions.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guests} onChange={changeHandler} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={occasion} onChange={changeHandler} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}

BookingForm.propTypes = {
    timeOptions: PropTypes.arrayOf(PropTypes.string).isRequired, // Expecting an array of strings
    dispatch: PropTypes.func.isRequired,
};

export default BookingForm;