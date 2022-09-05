const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    console.log('perfect path')
    res.end()
})


module.exports = router