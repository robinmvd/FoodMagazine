const container = document.querySelector("#container")
window.addEventListener("load", showLoadedFavorites)
container.addEventListener("click", clickHandler)

function clickHandler(e){
    let item = e.target

    if (item.classList.contains("article")) {
        let saveditems = getLocalFavorites()
        let index = saveditems.indexOf(item.id)
        console.log(index)

        if(index > -1){
            item.classList.remove('favorite')
            saveditems.splice(index, 1)
        } else {
            item.classList.add("favorite")
            saveditems.push(item.id)
        }
        localStorage.setItem('favorites', JSON.stringify(saveditems))
    }
}

function showLoadedFavorites(){
    let saveditems = getLocalFavorites()
    console.log(saveditems)
    for(let item of saveditems) {
        let article = document.querySelector(`#${item}`) 
        article.classList.add("favorite")
    }
}

function getLocalFavorites(){
    let favorites = localStorage.getItem("favorites")
    if(favorites) {
        console.log(favorites)
        return JSON.parse(favorites)
    } else {
        console.log("No favorites yet")
        return []
    }
}