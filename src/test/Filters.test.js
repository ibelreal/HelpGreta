import React from 'react';
import Filters from '../components/Filters';
import { render, fireEvent } from '@testing-library/react'

it("handleChange function called", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText, rerender } = render(
        <Filters
            name="firstName"
            title="First Name"
            type="text"
            value={""}
            handleSearch={onChange}
        />
    );
    const input = getByPlaceholderText('Madrid');
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "madrid" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    rerender(<Filters
        name="searchCity"
        type="text"
        value={"madrid"}
        handleSearch={onChange}
    />);
    expect(input.value).toBe("madrid");
});
