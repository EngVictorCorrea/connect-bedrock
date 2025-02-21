import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { PostRecipeRequest } from "./contracts/recipeContracts";   

dotenv.config();

export const postRecipeHandlerAsync = async (req: Request, res: Response) => {
    try {
        const request : PostRecipeRequest = req.body;

        const prompt = `
            Receita: ${request.title}
            Ingredientes: ${request.ingredients.map(x => x.quantity + ": " + x.description).join("\n")}
            Modo de preparo: ${request.preparationMethod.join("\n")}

            Avalie se isso é realmente uma receita (0 a 10) e o tom da linguagem (0 a 10), retorne 
        `;

        // const response = await axios.post("https://api.bedrock.aws.com/avaliar", {
        //     prompt,
        //     model: "amazon-titan-txt",
        // }, {
        //     headers: { Authorization: `Bearer ${process.env.AWS_BEDROCK_KEY}` }
        // });

        res.status(201);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Error durring process posRecipeAsync"});
    }
};