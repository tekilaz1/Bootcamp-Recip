const express = require('express')
const app = express()
const path = require('path')
const request = require ('http')


// Request(' https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT',(Error, function(){
//         const json = { } 
      
// }))



app.get('/ recipe/:ingridientID', function(req, res){
      
     const id = req.params.IngridientID
   
     const data = 

       res.send()



})






app.use(express.static(path.join(__dirname,'dist')))

app.use(express.static(path.join(__dirname,'node_module')))


const port = 8080
app.listen(port, function () {
    console.log(`server running onport ${port}`)
  

})
