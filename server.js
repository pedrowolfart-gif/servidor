import express from "express";
const app = express();

let alunos = [
    {id: 1, nome:"samuel", idade: 23},
    {id: 2, nome:"daniel", idade: 17},
    {id: 3, nome:"jonas", idade: 53}
];


app.get("/alunos", (req, res) => {
    res.send (alunos);
});

app.post("/alunos", (req, res) => {
    const aluno = req.body;
    alunos.push(aluno);
    res.send(alunos);
});

app.listen(3000, () => {
    console.log ("servidor rodando na porta 3000")
});
