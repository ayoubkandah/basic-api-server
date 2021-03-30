module.exports=(req,res,next)=>{
    
let id=req.params.id
if(id){
    next() 
}else{
    next("Eroor")
}


}