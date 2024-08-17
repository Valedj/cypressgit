describe("post Http Request", ()=>{
    it("post call", () => {
        cy.request({
           method: 'POST',
           url: 'https://reqres.in/api/users',
           body:{
            "name": "morpheus",
            "job": "leader"
           }
    })
    .then((Response)=>{
        expect(Response.status).to.eql(201)
        expect(Response.status).equal(201)
        expect(Response.status).eql(201)
        expect(Response.staus).eqls(201)

    })
})

})