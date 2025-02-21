import Joi from "joi";

const ingredientSchema = Joi.object({
    quantity: Joi.number().min(1).required(),    
    description: Joi.string().min(10).required()
});

export const postRecipeSchema = Joi.object({
    title: Joi.string().min(1).max(100).required(),
    ingredients: Joi.array().items(ingredientSchema).min(1).required(),
    preparationMethod: Joi.array().items(Joi.string()).min(10).max(1000).required()
});

export const postRecipeValidator = (req: any, res: any, next: any) => {
    const { error } = postRecipeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ erro: error.details.map(err => err.message) });
    }
    next();
};