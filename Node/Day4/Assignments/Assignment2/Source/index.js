const http = require('http')
http.createServer(function(req,res){
    if(req.url == '/')
    {
         var md = "http://localhost:8000/"
         var url1 = new URL('product?param1=5&param2=10',md)
         var res1 = url1.searchParams.get("param1")
         var res2 = url1.searchParams.get("param2")
         var result = parseInt(res1) + parseInt(res2)
         res.end(`addition of queryparams is ${result}`)
    }
}).listen(8000)