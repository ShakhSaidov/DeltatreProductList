import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import ProductList from "./ProductList"

const testData = [
    {
        id: "w11H5lBZ2UPC5P6Hi9Rz1",
        name: "Telequiet",
        description: "Irure aute nisi dolor ut fugiat irure duis.",
        quantity: 832
    },
    {
        id: "w11H5lBZ2UPC5P6Hi9Rz2",
        name: "Tetak",
        description: "Minim fugiat commodo cupidatat qui eiusmod do anim aliqua anim voluptate.",
        quantity: 121
    },
    {
        id: "w11H5lBZ2UPC5P6Hi9Rz3",
        name: "Darwinium",
        description: "Duis quis sint eu mollit aliquip sunt laborum.",
        quantity: 780
    },
    {
        id: "w11H5lBZ2UPC5P6Hi9Rz4",
        name: "Biolive",
        description: "Et ut nostrud labore adipisicing voluptate aliquip ea ipsum tempor ad nisi eu.",
        quantity: 83
    },
    {
        id: "w11H5lBZ2UPC5P6Hi9Rz5",
        name: "Musix",
        description: "Reprehenderit consequat voluptate Lorem occaecat tempor duis nulla.",
        quantity: 199
    }
]

const dummyParameter = {
    handleRemove: () => { },
    products: testData
}

describe("Product List component test", () => {
    test("Renders the products correctly", () => {
        const component = render(<ProductList {...dummyParameter} />)
        for (var i = 0; i < dummyParameter.products.length; i++) {
            expect(component.container).toHaveTextContent(dummyParameter.products[i].name)
            expect(component.container).toHaveTextContent(dummyParameter.products[i].description)
            expect(component.container).toHaveTextContent(dummyParameter.products[i].quantity)
            expect(component.container).not.toHaveTextContent(dummyParameter.products[i].id)
        }
    })
})

