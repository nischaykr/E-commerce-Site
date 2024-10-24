import jwt from "jsonwebtoken"

const adminAuth = async (req,res,next)=>{
    try {
        const { token } = req.headers
        console.log(token)
        if(!token){
            res.json({success:false, message:"TOKEN NOT PRESENT"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        console.log(token_decode)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"DECODED TOKEN NOT MATCHED"})
        }
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export default adminAuth