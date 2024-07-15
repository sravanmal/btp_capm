module.exports = async (srv) => {
 
    //implementation code
    srv.on('greetings', (req,res)=>{
        return "good morning ! " + req.data.name ;
    })

    srv.on('addNumbers', (req,res)=>{
        return (req.data.a*req.data.b) ;
    })
 
}