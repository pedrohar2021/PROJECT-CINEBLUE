const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const meusFilmes = [
    {
        id: 1,
        nome: "JURASSIC WORLD: DOMÍNIO",
        descricao: "Jurassic World Domínio acontece quatro anos após a destruição da Isla Nublar. Os dinossauros agora vivem – e caçam – ao lado de humanos em todo o mundo. Esse frágil equilíbrio remodelará o futuro e determinará, de uma vez por todas, se os seres humanos continuarão sendo os principais predadores em um planeta que agora compartilham com as criaturas mais temíveis da história",
        tipo: "Ficção científica",
        imagem: "/img/jurassic.jpg"
    },
    {
        id: 2,
        nome: "SONIC 2:O FILME",
        descricao: "O ouriço favorito de todo o mundo está de volta para uma incrível aventura em SONIC 2 – O FILME. Após ficar em Green Hills, Sonic quer provar que tem o necessário para ser um herói de verdade. Seu teste virá com o retorno do Dr. Robotnik, dessa vez com um novo parceiro, Knuckles, à procura de uma esmeralda com o poder de destruir civilizações. Sonic se junta ao seu próprio coadjuvante, Tails, e juntos embarcarão em uma jornada pelo mundo para encontrar a esmeralda, antes que ela caia em mãos erradas.",
        tipo: "Animação",
        imagem: "/img/sonic.jpg"
    },
    {
        id: 3,
        nome: "TOP GUN: MAVERICK",
        descricao: "Depois de mais de 30 anos servindo a marinha como um dos maiores pilotos de caça, Pete ``Maverick´´ Mitchell continua na ativa, se recusando a subir de patente e deixar de fazer o que mais gosta, que é voar. Enquanto ele treina um grupo de pilotos em formação para uma missão especial que nenhum Top Gun em vida jamais participou, ele encontra Bradley Bradshaw, que tem o apelido de Rooster, o filho do falecido amigo de Maverick, o oficial Nick Bradshaw, conhecido como Goose.Enfrentando um futuro.",
        tipo: "Ação",
        imagem: "/img/top-gun.jpg"
    },
    {
        id: 4,
        nome: "DOUTOR ESTRANHO NO MULTIVERSO DA LOUCURA",
        descricao: "Em Doutor Estranho no Multiverso da Loucura da Marvel Studios, o Multiverso foi aberto e expande seus limites para mais longe do que nunca. Embarque em uma viagem para o desconhecido com o Doutor Estranho que, com a ajuda de aliados místicos antigos e novos, atravessa as perigosas realidades alternativas e alucinantes do Multiverso para enfrentar um novo adversário misterioso.",
        tipo: "Fantasia/Aventura",
        imagem: "/img/doutorestranho.jpg"
    },
    {
        id: 5,
        nome: "D.P.A. 3 - UMA AVENTURA NO FIM DO MUNDO",
        descricao: "Pippo, Bento e Sol se vêem em apuros quando Severino encontra um objeto em meio aos escombros de um avião. O que parecia uma inofensiva relíquia era, na verdade, uma das faces do ‘Medalhão de Uzur’, responsável por controlar e manipular toda a magia existente no mundo. Assim que coloca o artefato no pescoço, o porteiro tão querido começa a se transformar em uma figura malígna.",
        tipo: "Aventura",
        imagem: "https://d128j1v7l5zqm9.cloudfront.net/vibezz_937993687.jpg"
    }

];





let filmes = undefined;
let mensagem = "";
let detalhesSelecionado;
let idEscolhido;


app.get("/", (req, res) => {
    res.render('index', {meusFilmes, filmes, mensagem});
    mensagem = ''

});

app.get('/detalhes/:id', (req, res) => {
    idEscolhido = +req.params.id;
    detalhesSelecionado = meusFilmes.find(e => e.id == idEscolhido);
    mensagem = "";
    res.render('detalhes', {meusFilmes, detalhesSelecionado});
  });

app.get("/cadastro", (req,res) => {
    res.render('cadastro')
})

app.post("/create", (req, res) => {
    const filmes = req.body;
    filmes.id = meusFilmes.length + 1
    meusFilmes.push(filmes)
    mensagem = "FILME CADASTRADO!"
    res.redirect("/#cards")
});


app.listen(port, () => console.log('Servidor rodando em http://localhost:3000'));