const express = require ('express') ;

const app = express()

const data = [{
    film : elmanfi ,
    année : 1990,
},
{
    film : titanic , 
    année: 1997,
}
]
app.get("\data",(req,res)=>{
    res.json(data)

})
app.listen(6028,()=>{
    console.log("le server  en marche !!")
})