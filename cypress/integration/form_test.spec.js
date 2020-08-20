describe("Form tests", () => {
    describe("Environment", () => {
        it("can locate test client.", () => {
            cy.visit("http://localhost:3000");
            cy.url().should("include", "localhost");
        });
    });

    // const lambdas for objects here
    const submitButton = () => cy.get("button"); //ideally, this should have a class or ID or something but hey, it works
    const nameInput = () => cy.get("input[name='name']");
    const emailInput = () => cy.get("input[name='email']");
    const passwordInput = () => cy.get("input[name='password']");
    const readTOSInput = () => cy.get("input[name='readTOS']");
    const emailError = () => cy.contains("not properly formatted");
    const newUserEntry = () => cy.contains("Name: Jane Doe");
    
    describe("Form fields", () => {
        it("submit button starts inactive.", () => {
            // submit button is inactive
            submitButton().should("be.disabled");
        });

        it("name input can be typed into.", () => {
            // "name" input registers input correctly
            // submit button is still inactive
            nameInput().type("Jane Doe");
            nameInput().should("have.value", "Jane Doe");
            submitButton().should("be.disabled");
        });

        it("email input can be typed into.", () => {
            // "email" input registers input correctly
            emailInput().type("Jane");
            emailInput().should("have.value", "Jane");

            // "email" input will throw appropriate errors on bad format
            emailError().should("exist");

            // "email" input will retract errors on good format
            emailInput().type("@Doe.com");
            emailInput().should("have.value", "Jane@Doe.com");
            emailError().should("not.exist");

            // submit button is still inactive
            submitButton().should("be.disabled");
        });

        it("password input can be typed into.", () => {
            // "password" input registers input correctly
            // submit button is still inactive
            passwordInput().type("password2");
            passwordInput().should("have.value", "password2");
            submitButton().should("be.disabled");
        });

        it("TOS input can be checked.", () => {
            // "readTOS" input can be checked
            // submit button is now active
            readTOSInput().click();
            readTOSInput().should("have.checked", "true");
            submitButton().should("not.be.disabled");
        });
    });

    describe("Form POST", () => {
        it("Submit button POSTs and receives server response.", () => {
            // click submit button
            // eventually a new user is registered within the appropriate info
            submitButton().click();
            newUserEntry().should("exist");
        });
    });
});