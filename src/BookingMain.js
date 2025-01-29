import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const updateTimes = (state, action) => {
    if (action.type === 'update_times') {
        return availableTimes;
    }
    return state;
};

const initializeTimes = () => {
    return availableTimes;
};

function BookingMain() {
    const [timeOptions, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <BookingForm timeOptions={timeOptions} dispatch={dispatch} />
        </div>
    );
}

export default BookingMain;
