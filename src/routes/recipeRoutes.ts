import express from "express";
import { postRecipeHandlerAsync } from "../handlers/recipes/postRecipeHandle";
import { postRecipeValidator } from "../validators/recipeValidators";

const router = express.Router();

router.post("/recipes", postRecipeHandlerAsync, postRecipeValidator);

export default router;