const http = require("http");
const fs = require("fs");

const servidor = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    // Carregar usuários
    if (req.url === "/usuarios" && req.method === "GET") {

        const dados = fs.readFileSync("usuarios.json", "utf8");

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(dados);
    }

    // Salvar usuários
    if (req.url === "/usuarios" && req.method === "POST") {

        let corpo = "";

        req.on("data", parte => corpo += parte);

        req.on("end", () => {

            fs.writeFileSync("usuarios.json", corpo);

            res.writeHead(200);
            res.end("Salvo!");

        });
    }

});

servidor.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});