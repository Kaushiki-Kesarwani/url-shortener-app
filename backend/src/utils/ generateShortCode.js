import crypto from 'crypto'

const generateShortCode = () =>{
return crypto.randomBytes(5).toString("base64url").substring(0,7);
}

export default generateShortCode;
