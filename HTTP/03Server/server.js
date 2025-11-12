import http from 'http';

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html'); 

    res.statusCode = 200;
    res.statusMessage = "Request Completed";
    res.writeHead(res.statusCode, res.statusMessage, {"Content-Type" : "text/html"})
    const type = res.getHeader("Content-Type");

    res.write("Content_Type is : " + type);


    res.write(<h1>Aman Kumar</h1>)
    res.write("<h2>Hello</h2>");  // simple

    res.write("StatusCode is : " + res.statusCode + "\n");
    res.write("Status_msg Is : " + res.statusMessage + "\n");

    if (res.writable == true){
        console.log("Writable Ended stream status is : " + res.writableEnded);
    }

    // for h1 it is giving in h1 but not giving for h2 // solve this problem using setHeader

    // res.write("<h2>Hello</h2>");  // in h2 tag
    
    // res.setHeader("Content-Type", "text/plain");
    // res.write(<h1>Aman Kumar</h1>)  // simple again

    res.write("Hello how are you?")
    res.write("/nHello Bhai kaise ho")
    res.end() // after res.end() nothing is considered
    res.write("Hello how are you?")  // Not Print 
}).listen(4002);