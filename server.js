import express from "express";

const app = express();

app.get("/carros", (req, res) => {
res.send("servidor de carros funcionando")
});

app.listen(3000, () => {
    console.log("servidor rodando")
});


