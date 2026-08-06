import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../errors/ApiError.js";
import { createUserService,authUserService } from "../services/auth.service.js";

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

export const logIn = asyncHandler(async (req,res)=>{

   // Step 1: Get data from client
  const{email,password} = req.body;

  // Step 2: Validate input
  if (!email?.trim() || !password?.trim()) {
    throw new ApiError(400, "All fields are required");
  }

  const {token,user} = await authUserService({email,password});

   res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:"strict",
      // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success:true,
      message:"login successful",
      data:user
    })
});