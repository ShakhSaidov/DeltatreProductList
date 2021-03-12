describe("Product List Application", function () {
    beforeEach(function () {
        cy.request("POST", "http://localhost:3001/testing")
        cy.visit("http://localhost:3000")
        cy.waitForReact()
    })

    it("Page is opened", function () {
        cy.contains("Product List")
        cy.contains("Test Product 1")
        cy.contains("Test Product 2")
        cy.contains("Test Product 3")
        cy.contains("Test Product 4")
        cy.contains("Test Product 5")
    })

    describe("User can add a product onto the list", function () {
        it("Product with valid information gets added", function () {
            cy.contains("test name").should("not.exist")
            cy.contains("test description").should("not.exist")

            cy.get("#iconButton").click()
            cy.get("#productName").type("wqeetvertbresyeryrnsewr")
            cy.get("#productDescription").type("mmfghjyaueryopiyuiuwee")
            cy.get("#productQuantity").type(55)
            cy.get("#productAddButton").click()
            cy.get("#iconButton").click()

            cy.contains("wqeetvertbresyeryrnsewr")
            cy.contains("mmfghjyaueryopiyuiuwee")
        })

        it("Product with a name that is already in the list doesn't get added", function(){
            cy.get("#iconButton").click()
            cy.get("#productName").type("Test Product 1")
            cy.get("#productDescription").type("mmfghjyaueryopiyuiuwee")
            cy.get("#productQuantity").type(55)
            cy.get("#productAddButton").click()
            cy.contains("Name already exists in the list!")
            cy.get("#iconButton").click()
        })

        describe("Products with invalid information don't get added", function () {
            it("When only the product name is filled", function () {
                cy.get("#iconButton").click()
                cy.get("#productName").type("Just Product Name")
                cy.get("#productAddButton").click()
                cy.get("Just Product Name").should("not.exist")
                cy.get("#iconButton").click()
                cy.contains("Just Product Name").should("not.exist")
            })

            it("When only the product description is filled", function () {
                cy.get("#iconButton").click()
                cy.get("#productDescription").type("Just Product Description")
                cy.get("#productAddButton").click()
                cy.get("Just Product Description").should("not.exist")
                cy.get("#iconButton").click()

                cy.contains("Just Product Description").should("not.exist")
            })

            it("When only the product quantity is filled", function () {
                cy.get("#iconButton").click()
                cy.get("#productQuantity").type("12345")
                cy.get("#productAddButton").click()
                cy.get("Just Product Quantity").should("not.exist")
                cy.get("#iconButton").click()
                cy.contains("12345").should("not.exist")
            })

            it("When only the product name & description is filled", function () {
                cy.get("#iconButton").click()

                cy.get("#productName").type("Just Product Name")
                cy.get("#productAddButton").click()
                cy.get("Just Product Name").should("not.exist")

                cy.get("#productDescription").type("Just Product Description")
                cy.get("#productAddButton").click()
                cy.get("Just Product Description").should("not.exist")

                cy.get("#iconButton").click()

                cy.contains("Just Product Name").should("not.exist")
                cy.contains("Just Product Description").should("not.exist")
            })

            it("When only the product description & quantity is filled", function () {
                cy.get("#iconButton").click()

                cy.get("#productDescription").type("Just Product Description")
                cy.get("#productAddButton").click()
                cy.get("Just Product Description").should("not.exist")

                cy.get("#productQuantity").type("12345")
                cy.get("#productAddButton").click()
                cy.get("Just Product Quantity").should("not.exist")

                cy.get("#iconButton").click()

                cy.contains("12345").should("not.exist")
                cy.contains("Just Product Description").should("not.exist")
            })

            it("When only the product name & quantity is filled", function () {
                cy.get("#iconButton").click()

                cy.get("#productName").type("Just Product Name")
                cy.get("#productAddButton").click()
                cy.get("Just Product Name").should("not.exist")

                cy.get("#productQuantity").type("12345")
                cy.get("#productAddButton").click()
                cy.get("Just Product Quantity").should("not.exist")

                cy.get("#iconButton").click()

                cy.contains("12345").should("not.exist")
                cy.contains("Just Product Name").should("not.exist")
            })

            describe("When an invalid quantity is given", function () {
                it("Negative quantity is not accepted", function () {
                    cy.get("#iconButton").click()
                    cy.get("#productName").type("Valid Product Name")
                    cy.get("#productDescription").type("Valid Product Description")
                    cy.get("#productQuantity").type("-12345")
                    cy.get("#productAddButton").click()
                    cy.get("#iconButton").click()

                    cy.contains("Valid Product Name").should("not.exist")
                    cy.contains("Valid Product Description").should("not.exist")
                    cy.contains("-12345").should("not.exist")
                })

                it("Words as quantity is not accepted", function () {
                    cy.get("#iconButton").click()
                    cy.get("#productName").type("Valid Product Name")
                    cy.get("#productDescription").type("Valid Product Description")
                    cy.get("#productQuantity").type("Twenty-five")
                    cy.get("#productAddButton").click()
                    cy.get("#iconButton").click()

                    cy.contains("Valid Product Name").should("not.exist")
                    cy.contains("Valid Product Description").should("not.exist")
                    cy.contains("Twenty-five").should("not.exist")
                })
            })
        })
    })

    describe("User searching for a product", function () {
        it("User can search for an existing product", function () {
            cy.get("#productSearch").type("Test Product 5")
            cy.get("#productCardName").should("have.text", " Test Product 5 ")
        })

        it("Searching for a non-existing product displays an empty result", function () {
            cy.get("#productSearch").type("Non-Existing Product")
            cy.get("#productCardName").should("not.exist")
        })
    })

    it("User can remove a product", function () {
        //Product 1 Info
        cy.contains("Test Product 1")
        cy.contains("Generic description for first test product")
        cy.contains(17)

        cy.get("#productRemoveButton").click()
        cy.contains("Are you sure?")
        cy.get("#productRemoveButton").click()

        cy.contains("Test Product 1").should("not.exist")
        cy.contains("Generic description for first test product").should("not.exist")
        cy.contains(17).should("not.exist")
    })
})