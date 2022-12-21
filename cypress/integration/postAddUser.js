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

    cy.request({

         
         method:'POST',
        url:'https://gorest.co.in/public/v2/users',

        headers:{ 'Authorization' : "Bearer "  + accessToken
        },

        body:
        {
            "name": dataEntry.name,
            "email": testEmail,
            "gender": dataEntry.gender,
            "status": dataEntry.status
        }
    }).then((res)=>{

         cy.log(JSON.stringify(res.body))

            expect(res.status).to.eq(201)
             expect(res.body).has.property('email' ,testEmail)
            expect(res.body).has.property('name' , dataEntry.name)
            expect(res.body).has.property('status' ,dataEntry.status)
            expect(res.body).has.property('gender' ,dataEntry.gender)
            
            

        })

    })












            
         

       

})








