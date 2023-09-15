import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        let decodeData = jwt.verify(token, process.env.JWT_SECRET) 
        //res.userId = decodeData?.id;
        res.userId = decodeData ? decodeData.id : null;
        next()
     }
     catch (error) {
        console.error('JWT Verification Error:', error);
        return res.status(404).json({ message: 'Unauthorized' });
    }   
}

export default auth;