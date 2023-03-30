<div align=center>
    <h1> 🗂 Assync File Reader</h1>
</div>


<div align='center'>
    <strong>
        <p><a href='https://github.com/GabrielleCGNeves'>Gabrielle Carvalho Gonçalves das Neves</a></p>
    </strong>
</div>

---
> Overall, this code is designed to extract links from a file and return them in an array of objects.The code exports a function named "pegaArquivo" that receives a file path as a parameter and returns an array of objects containing the links and their descriptions found in the file. 
> The "pegaArquivo" function uses the "fs.promises" module to read the content of the file and then extracts the links using a regular expression stored in the "extraiLinks" function. If an error occurs during the file reading process, the "trataErro" function is called to handle it.
> The "extraiLinks" function receives a string of text as a parameter and uses a regular expression to extract links and their descriptions, returning an array of objects with this information.


---

## índice
- [Arquivos](./arquivos)
  - [texto.md](./arquivos/texto.md)
- [cli.js](./cli.js)
- [http-validacao.js](./http-validacao.js)
- [index.js](index.js)
- [package-lock.json](package-lock.json)
- [package.js](package.json)