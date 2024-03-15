import express from "express";
const app=express()

app.get('/api/products',(req,res)=>{
   const data=[
    {
        id:1,
        name :"label wooden",
        price:200,
        image:'https://images.pexels.com/photos/1'
    },{
        id:2,
        name :"cotton",
        price:300,
        image:'https://images.pexels.com/photos/2'
    },{
        id:3,
        name :"meters",
        price:400,
        image:'https://images.pexels.com/photos/3'
    },{
        id:4,
        name :"peter england",
        price:3000,
        image:'https://images.pexels.com/photos/4'
    }
   ]
   const search =req.query.search
   if(search){
    const filterProds = data.filter(item=>item.name.includes(search))
    res.send(filterProds)
    return
   }
   setTimeout(() => {
    res.send(data)
   }, 2000);
})

const port = process.env.PORT | 3000;
app.listen(port,()=>{
    console.log("connected at "+port)
})