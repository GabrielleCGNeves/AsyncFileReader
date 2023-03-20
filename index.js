import chalk from 'chalk';
import fs from 'fs';


function trataErro(erro){
    throw new Error(chalk.red(erro.code, "ARQUIVO NÃO ENCONTRADO"));
}

async function pegaArquivo(caminhoDoArquivo){
    try{ 
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
        console.log(texto);
    } catch(erro){
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md')
