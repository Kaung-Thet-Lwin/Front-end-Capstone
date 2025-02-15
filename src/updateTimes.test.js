import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import BookingForm from "./BookingForm";


describe('BookingForm component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        jest.clearAllMocks();
        jest.resetModules();
        jest.restoreAllMocks();
    });
    test('Returns the same value', () => {
        const dispatch = jest.fn();
        render(<BookingForm timeOptions={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} dispatch={dispatch}/>);

        const timeInput = screen.getByLabelText(/time/i);
        fireEvent.change(timeInput, { target: { value: '18:00' } });

        const dateInput = screen.getByLabelText(/date/i);
        fireEvent.change(dateInput, { target: { value: '2025-01-28' } });

        const guestsInput = screen.getByLabelText(/guests/i);
        fireEvent.change(guestsInput, { target: { value: '1' } });

        const occasionInput = screen.getByLabelText(/occasion/i);
        fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

        const submitButton = screen.getByRole("button", {name: /make your reservation/i });
        fireEvent.click(submitButton);

        expect(dispatch).toHaveBeenCalledWith({ type: 'update_times', payload: '2025-01-28' });
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dateInput.value).toBe('2025-01-28');
        expect(timeInput.value).toBe('18:00');
        expect(guestsInput.value).toBe('1');
        expect(occasionInput.value).toBe('Anniversary');
    })
})