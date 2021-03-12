import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Product from "./product"

const testProduct = {
    name: "Frontend Test Product",
    description: "Generic description of a frontend test product",
    quantity: 60
}

const dummyParameter = {
    handleRemove: () => { },
    product: testProduct
}

describe("Product component test", () => {
    test("Renders single product and contains relevant information", () => {
        const component = render(<Product {...dummyParameter} />)

        expect(component.container).toHaveTextContent(testProduct.name)
        expect(component.container).toHaveTextContent(testProduct.description)
        expect(component.container).toHaveTextContent(testProduct.quantity)
    })

    test("Renders the warning message when remove button is clicked once", () => {
        dummyParameter.handleRemove = jest.fn()
        const component = render(<Product {...dummyParameter} />)
        const removeButton = component.getByText("Remove")
        fireEvent.click(removeButton)

        expect(component.container).toHaveTextContent("Are you sure?")
        expect(dummyParameter.handleRemove.mock.calls.length).toBe(0)
    })

    test("Calls removal method when remove button is clicked twice", () => {
        dummyParameter.handleRemove = jest.fn()
        const component = render(<Product {...dummyParameter} />)
        const removeButton = component.getByText("Remove")
        fireEvent.click(removeButton)
        fireEvent.click(removeButton)

        expect(dummyParameter.handleRemove.mock.calls.length).toBe(1)
    })
})