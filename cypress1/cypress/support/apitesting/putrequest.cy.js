describe("put Http Request", ()=>{
    it("put call", () => {
        cy.request({
           method: 'PUT',
           url: 'https://reqres.in/api/users/2',
           body:{
           "name": "morpheus",
           "job": "zion resident"
           }
        }).its('status').should('equal',200)
    })
})