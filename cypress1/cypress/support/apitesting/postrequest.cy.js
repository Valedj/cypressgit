describe("post Http Request", ()=>{
    it("post call", () => {
        cy.request({
           method: 'POST',
           url: 'https://reqres.in/api/users',
           body:{
            "name": "morpheus",
            "job": "leader"
           }
        }).its('status').should('equal',201)
    })
})