// buscar os links salvos
export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// salvar um link no localstorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);

    // não duplicar link com mesmo ID
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink) {
        console.log("LINK JÁ EXISTE")
        return;
    }

    // adicionar novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO')
}

// deletar link salvo
export function deleteLink(links, id) {

    let myLinks = links.filter( item => {
        return (item.id !==id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));;
    console.log('LINK DELETADO')

    return myLinks;
}