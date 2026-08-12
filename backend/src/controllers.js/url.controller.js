import asyncHandler from "../utils/asyncHandler";
 import { getUrlByShortCode } from "../services/url.service";

const redirectUrl = asyncHandler(async (req,res)=>{
const {shortCode} = req.params;

const url = await getUrlByShortCode(shortCode);

return res.redirect(url.originalUrl);
});