const getGifs = (keyWord, limit) => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${keyWord}}&limit=${limit}&api_key=bBwtiaBiJ3G5ckoyVIDCZj9ghIzY5bBM`)
        .then(response => {
        let result = response.json();
            return result
    })
}
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("button").addEventListener("click", ()=> {
        let gifType = document.getElementById("gif-type").value;
        console.log(gifType)
        let limitedNumber = document.getElementById("limit").value;
        console.log(limitedNumber)
        let gifsPromise = getGifs(gifType, limitedNumber);
        console.log("gifs", gifsPromise)
        const divContainer = document.getElementById("container");
        gifsPromise.then(gifs => {
            gifs.data.forEach(element => {
                let img = document.createElement("iframe");
                img.setAttribute("src", element.embed_url);
                divContainer.appendChild(img);
            });
        })
    })
});
