import React from "react";
import {render,screen} from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimeOptions = ["18:00", "19:000", "20:00"];
const mockOnDateChange = jest.fn();
const mockOnSubmit = jest.fn();
jest.mock("formik", () => ({
    useFormik: () => ({
      values: { resDate: "", resTime: "", guests: "", occasion: "" },
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {},
    }),
  }));

describe("BookingForm HTML5 validation", () => {
    test("renders form fields with correct attributes",  () =>{
        render(
            <BookingForm
                timeOptions={mockTimeOptions}
                onDateChange={mockOnDateChange}
                onSubmit={mockOnSubmit}
            />
        )
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute("type", "date");
        expect(dateInput).toHaveAttribute("required");

        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute("required");

        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute("type", "number");
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
        expect(guestsInput).toHaveAttribute("required");

        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toHaveAttribute("required");
    });
});