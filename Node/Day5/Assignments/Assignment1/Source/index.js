var emitter = require('events')

var em = new emitter()

em.on('exam started', function (data) {
    console.log("exam started" + data)
    var deadline = new Date("may 31, 2022 19:16:01").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        if (t < 0) {

            clearInterval(x)
            em.emit('exam over', "is over")
        }
        else{
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        console.log(`${hours}:${minutes}:${seconds}`)
        }
    }, 1000)
})

em.on('exam over', function (data) {
    console.log("exam" + data)
})


em.emit('exam started', "")




