const json_server=require('json-server')

const tripServer=json_server.create()

const middleware=json_server.defaults()
const router=json_server.router('db.json')

const cors=require('cors')
tripServer.use(cors())

tripServer.use(middleware)
tripServer.use(router)

const PORT=7000
tripServer.listen(PORT,()=>{
    console.log(`Video server started at port number ${PORT}.....`);
})