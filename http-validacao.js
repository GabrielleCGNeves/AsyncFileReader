import fetch from "node-fetch";

async function chacaStatus(arrayURL){
    const arrayStatua = await Promise.all(arrayURL.map(async url => {
        const res = await fetch (url)
        return res.status
    }))
}

function geraArrayDeURL(arraysLinks){
    return arraysLinks.map(objetolink => Object.values(objetolink))
}

async function validaURL(arraysLinks){
    const links = geraArrayDeURL(arraysLinks);
    const statusLink = await checaStatus(links);
    return geraArrayDeURL(arraysLinks);
}

export default validaURL;