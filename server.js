const express = require('express')
const app = express()
const path = require('path')







// app.listen('/sanity', function(req, res){
//     console.log('every thing is okay')
// })






app.use(express.static(path.join(_dirname,'dist')))

//app.use(express.static(path.join(_dirname,'node_module')))




//app.use('/', api)

const port = 8080
app.listen(port, function () {
    console.log(`server running onport ${port}`)
  

})
