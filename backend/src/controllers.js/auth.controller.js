import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../errors/ApiError.js";
import { createUserService } from "../services/auth.service.js";

export const signup = asyncHandler(async (req, res) => {
  // Step 1: Get data from client
  const { fullname, email, password } = req.body;

  // Step 2: Validate input
  if (!fullname?.trim() || !email?.trim() || !password?.trim()) {
    throw new ApiError(400, "All fields are required");
  }

  // Step 3: Call service
  const user = await createUserService({
    fullname,
    email,
    password,
  });

  // Step 4: Send response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});