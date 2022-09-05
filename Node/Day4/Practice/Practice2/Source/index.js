const http = require('http')

http.get('/id',function(req,res){
    res.write('hello query')
})