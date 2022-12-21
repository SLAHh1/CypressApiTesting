///<reference types="cypress"/>

const dataEntry = require('../../cypress/fixtures/userAdded')

describe('let add new user',()=>{

    let accessToken ='907571cc7d94250bb5c9b9b4f6390002cab49bff04d5b465c30c89eb4861cc3b'
    let randomText = ""
    let testEmail= ""

it('add a new yser', ()=>{

   var pattern ="ABCDEFJHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz"

   for (var i=0; i < 10; i++)

   randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));

   testEmail= randomText + '@gmail.com'


      cy.fixture('userAdded').then((fileEntry) => {

        cy.request({

         
           method:'POST',
           url:'https://gorest.co.in/public/v2/users',
   
           headers:{ 'Authorization' : "Bearer "  + accessToken
           },
   
           body:
           {
               "name": fileEntry.name,
               "email": testEmail,
               "gender": fileEntry.gender,
               "status": fileEntry.status
           }
       }).then((res)=>{
   
            cy.log(JSON.stringify(res.body))
   
               expect(res.status).to.eq(201)
               expect(res.body).has.property('email' ,testEmail)
               expect(res.body).has.property('name' , fileEntry.name)
               expect(res.body).has.property('status' ,fileEntry.status)
               expect(res.body).has.property('gender' ,fileEntry.gender)
               
               
   
           }).then((res)=>{


            const userId = res.body.id 

           cy.log("userId created is "+userId )

           cy.request({

            method:'GET',
            url:'https://gorest.co.in/public/v2/users/'+userId,
            headers : { 'Authorization' : "Bearer "  + accessToken }

           }).then((res)=>{

            expect(res.status).to.eql(200)
            expect(res.body).has.property('email' ,testEmail)
            expect(res.body).has.property('name' , fileEntry.name)
            expect(res.body).has.property('status' ,fileEntry.status)
            expect(res.body).has.property('gender' ,fileEntry.gender)
               



           })

           })




      })

    

    })












            
         

       

})








