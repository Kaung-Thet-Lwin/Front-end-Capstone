import React from 'react';
import './Css Files/Booking.css';
import {useState} from 'react';
import PropTypes from 'prop-types';

function BookingForm({ timeOptions, onDateChange, onSubmit}) {
    const[resDate, setResDate] = useState("");
    const[resTime, setResTime] = useState("");
    const[guests, setGuests] = useState("1");
    const[occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", { resDate, resTime, guests, occasion });
        onSubmit({ resDate, resTime, guests, occasion });
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        //console.log(`ChangeHandler called for ${name}: ${value}`);

        if (name === "resDate") {
            setResDate(value);
            onDateChange(value);
        } else if (name === "resTime") {
            setResTime(value);
        } else if (name === "guests") {
            setGuests(value);
        } else if (name === "occasion") {
            setOccasion(value);
        }
    };
    //console.log("Rendering BookingForm with timeOptions:", timeOptions);

    return(
        <div className="bookingform">
            <form style ={{ display:'grid', maxWidth:'200px', gap:'20px'}} onSubmit={handleSubmit} required="true">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="resDate" value={resDate} onChange={changeHandler} required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="resTime" value={resTime} onChange={changeHandler} required="true">
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
                    <option>Other</option>
                </select>
                <div className="btnReceive">
                    <input type="submit" aria-pressed="false" aria-label="Make Your reservation" value="Make Your reservation"/>
                </div>
            </form>
        </div>
    );
}

BookingForm.propTypes = {
    timeOptions: PropTypes.arrayOf(PropTypes.string).isRequired, // Expecting an array of strings
    onDateChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default BookingForm;