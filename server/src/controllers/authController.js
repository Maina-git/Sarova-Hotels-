/*
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";


export const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const existingUser = await prisma.user.findUnique({
            where :{
                email,
            },
        });
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            }
        })

        res.status(201).json({
            id:user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        })
    }catch(error){
        res.status(500).json({message:error.message});
    }
}



export const loginUser = async (req, res) => {
    try{
      const {email, password} = req.body;
      const user = await prisma.user.findUnique({
        where : {
            email,
        },
      });
     if(!user){
        return res.status(401).json({message:"Invalid credentials",
        });
     }
   
     const isMatch = await bcrypt.compare(
        password,
        user.password
     );
  
     if(!isMatch){
        return res.status(401).json({message: "Invalid credentials"});
     }

     res.json({
        id:user.id,
        name:user.name,
        email:user.email,
        token: generateToken(user.id),
     });
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}

*/


import prisma from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getProfile = async (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
};
















