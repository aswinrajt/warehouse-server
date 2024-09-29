const jsonServer=require('json-server')

const cdbServer=jsonServer.create()


const middleware=jsonServer.defaults()

const router=jsonServer.router('db.json')

cdbServer.use(middleware)
cdbServer.use(router)

const PORT=3000 || process.env.PORT

cdbServer.listen(PORT,()=>{
    console.log("Server running at:"+PORT);
    
})