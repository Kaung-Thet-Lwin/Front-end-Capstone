import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import { act } from 'react';

const mockTimeOptions = ["18:00", "19:000", "20:00"];
const mockOnDateChange = jest.fn();
const mockOnSubmit = jest.fn();
jest.mock("formik", () => ({
    useFormik: () => ({
      values: { resDate: "", resTime: "", guests: "", occasion: "" },
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {
        resDate: "Date is required",
        guests: "Guests must be between 1 and 10",
      },
    }),
  }));

describe("BookingForm JavaScript Validation", () => {
    test("shows error messages for invalid inputs", async() =>{
        render(
            <BookingForm
                timeOptions={mockTimeOptions}
                onDateChange={mockOnDateChange}
                onSubmit={mockOnSubmit}
            />
        );

        const dateInput = screen.getByLabelText(/choose date/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const submitButton = screen.getByRole("button", {name : /make your reservation/i});

        await act(async () => {
            await userEvent.click(submitButton);
          });


        await waitFor(() => {
            const errorMessages = screen.getAllByRole("alert");
            expect(errorMessages).toHaveLength(2); // Ensure two errors exist
            expect(errorMessages[0]).toHaveTextContent(/date is required/i);
            expect(errorMessages[1]).toHaveTextContent(/guests must be between 1 and 10/i);
        });

        await waitFor(() =>
            expect(screen.queryByText(/date is required/i)).toBeInTheDocument()
        );

        userEvent.type(dateInput, "2022-01-01");
        await userEvent.click(submitButton);
        expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();

        userEvent.clear(dateInput);
        userEvent.type(dateInput, "2025-12-12");
        userEvent.clear(guestsInput);
        userEvent.type(guestsInput, "5");

        await userEvent.click(submitButton);
        expect(screen.queryByText(/date is required/i)).toBeInTheDocument();
        expect(screen.queryByText(/reservation date cannot be in the past/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
    });
});