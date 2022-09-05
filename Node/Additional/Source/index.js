var fs = require('fs'); //File System
var audioFilePath = './files/'; //Location of recorded audio files
fs.readdir(audioFilePath, function(err, files) {
    if (err) { throw err; }
    var audioFile = getNewestFile(files, audioFilePath);
    console.log(audioFile)
});
function getNewestFile(files, path) {
    var out = [];
    files.forEach(function(file) {
        var stats = fs.statSync(path + "/" +file);
        if(stats.isFile()) {
            out.push({"file":file, "mtime": stats.mtime.getTime()});
        }
    });
    out.sort(function(a,b) {
        return b.mtime - a.mtime;
    })
    for(var i=2;i<out.length;i++)
    {
     fs.unlink(`files/${out[i].file}`,function(){
     })
     console.log(`${out[i].file} are deleted`)
    }
    return "deleting file successfully" 
}