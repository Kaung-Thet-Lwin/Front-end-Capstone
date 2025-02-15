import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ConfirmedBooking from './Components/ConfirmedBooking';
import Header from './Header';
import './Css Files/Booking.css';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    console.log("fetchAPI result:", result);
    return result;
};

const submitAPI = function (formData) {
    console.log("Form data submitted:", formData);
    return true;
};

// Initial state setup (empty at first)
const initializeTimes = { availableTimes: [] };

function updateTimes(state, action) {
    if (action.type === 'update_times') {
        return { availableTimes: fetchAPI(new Date(action.date)) };
    }
    return state;
}

function Main() {
    const [timeOptions, dispatch] = useReducer(updateTimes, initializeTimes);
    const navigate = useNavigate();

    // Initialize available times on component mount
    useEffect(() => {
        dispatch({ type: 'update_times', date: new Date() });
    }, []);

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    const handleDateChange = (selectedDate) => {
        console.log("Date changed to:", selectedDate);
        dispatch({ type: 'update_times', date: selectedDate });
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route
                    path="/bookingmain"
                    element={<BookingForm
                        timeOptions={timeOptions.availableTimes}
                        onDateChange={handleDateChange}
                        onSubmit={submitForm}
                    />}
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </div>
    );
}

export default Main;
