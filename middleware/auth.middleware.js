const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    let token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token,"masai");
    if(decode){
        console.log(decode)
        req.body.user_Id = decode.user_Id;
        next()
    }else{
        res.send("Login Again")
    }
}

module.exports = {
    auth
}