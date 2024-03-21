import jwt from "jsonwebtoken";

const verifyUser = (req,res,next) => {
    let token = req.cookies.token;
    if (!token) {
    return res.json("token is not valid")
    }
    else {
        jwt.verify(token, "jwt-key", (err, decode) => {
            if (err) {
                return res.json("token is wrong")
            };
            next()
        })
}

    console.log({"cookie-token ----- ":token});
}
export {verifyUser}