describe("Sample Get Http Request", ()=>{
    it("Get Call", () => {
        cy.request('https://reqres.in/api/users?page=2')
        .its('status')
        .should('be.equal', 200);
})
})