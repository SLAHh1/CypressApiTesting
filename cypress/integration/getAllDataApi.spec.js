
///<reference types="cypress"/>


describe('get all api data', ()=>{

  let accessToken ='907571cc7d94250bb5c9b9b4f6390002cab49bff04d5b465c30c89eb4861cc3b'

   it('get and verify all data' , ()=>{
             
     cy.request({

      method:'GET',
      url:'https://gorest.co.in/public/v2/users',
      headers : { 'Authorization' : "Bearer "  + accessToken }
          }).then((res) =>{


            expect(res.status).to.eql(200)
            expect(res.body[0].id).to.eql(4673)
            expect(res.body[1].id).to.eql(4664)
            expect(res.body[2].id).to.eql(4663)
            
          })

        })

        it('get and verify the user id' , ()=>{
             
          cy.request({
     
           method:'GET',
           url:'https://gorest.co.in/public/v2/users/4646',
           headers : { 'Authorization' : "Bearer "  + accessToken }
               }).then((res) =>{
     
                cy.log(JSON.stringify(res.body))
                 
                 expect(res.body.name).to.eql('Rev. Jaya Banerjee')
                 expect(res.body.status).to.eql('active')  
                 
               })
     
             })
      })