import chalk from 'chalk';
import fs from 'fs';


function trataErro(erro){
    throw new Error(chalk.red(erro.code, "ARQUIVO NÃO ENCONTRADO"));
}

function pegaArquivo(caminhoDoArquivo){
    fs.promises
    .readFile(caminhoDoArquivo, 'utf-8')
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro))
}

pegaArquivo('./arquivos/texto.md')
