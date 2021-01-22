const http=require("http");

// right thigh.
http.get("http://192.168.43.208/led/1",resp=>
{
	
let data ="";
	
resp.on("data",chunk =>{
	
	data += chunk;
	
});

resp.on("end",()=>{
	
	console.log(data);
	
});
	
	
});
