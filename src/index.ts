import express from "express";
import recipeRoutes from "./routes/recipeRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json"

const app = express();

app.get("/", (req, res) => {
    res.send("API rodando!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/", recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
