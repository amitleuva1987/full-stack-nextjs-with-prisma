import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

export default async function handler(req,res){
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(6)
    const hashed = await bcrypt.hash(password, salt);

    const result = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:hashed
        }
    })
    res.json(result);
}