process.stdin.on("data",(data)=>{
    process.stdout.write("Hello"+ data);});

process.stderr.write("invalid input");