import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NewProductForm from "./new_product_form"

const dummyParameter = {
    handleAdd: () => { },
    products: []
}

let component, name, description, quantity

describe("New Product Form component test", () => {
    beforeEach(() => {
        component = render(<NewProductForm {...dummyParameter} />)
        const { getByTestId } = component
        name = getByTestId("Name")
        description = getByTestId("Description")
        quantity = getByTestId("Quantity")
    })

    test("Renders the form correctly", () => {
        const addButton = component.getByText("Add Product")

        expect(name).toHaveValue("")
        expect(description).toHaveValue("")
        expect(quantity).toHaveValue(null)
        expect(addButton).toBeTruthy()
    })

    test("The form fields are all required", () => {
        expect(name).toBeRequired()
        expect(description).toBeRequired()
        expect(quantity).toBeRequired()
    })

    test("Field input is stored", () => {
        fireEvent.change(name, { target: { value: "Test Name" } })
        fireEvent.change(description, { target: { value: "Test Description" } })
        fireEvent.change(quantity, { target: { value: 10 } })

        expect(name).toHaveValue("Test Name")
        expect(description).toHaveValue("Test Description")
        expect(quantity).toHaveValue(10)
    })
})