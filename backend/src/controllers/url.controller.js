import asyncHandler from "../utils/asyncHandler.js";
import { getUrlByShortCode, createShortUrl } from "../services/url.service.js";


export const createUrl = asyncHandler(async (req, res) => {
  const { originalUrl } = req.body;
  const userId = req.user._id;
  const url = createShortUrl(originalUrl, userId);
  return res.status(201).json(url);
});

export const redirectUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;
  const url = await getUrlByShortCode(shortCode);
  return res.redirect(url.originalUrl);
});
