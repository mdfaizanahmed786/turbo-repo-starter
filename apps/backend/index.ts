import express from 'express';
const app=express();
import{BASE_URL} from "@repo/common/config"
console.log(BASE_URL);  
app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.listen(4000,()=>{
console.log("SErver is running on the port 4000")
});