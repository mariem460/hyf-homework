console.log("js3 week2");
//Movies exercise
//bad movies
const badMoviesPromise = fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movieResponse=> movieResponse.filter(movie =>movie.rating <= 4));
    
    badMoviesPromise
        .then(console.log);

//bad movies sinec 2000
const badMoviesPromiseSinceXyear = fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movieResponse=> movieResponse.filter(movie =>movie.year >= 2000 ))
    .then(lastResponse => lastResponse.filter(movie=>movie.rating<= 4))
    
    badMoviesPromiseSinceXyear
        .then(console.log);

//Promise that resolves after set time exercise
function resolveAfter (resolveAfter) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`logged after ${resolveAfter} second (s)`)
        }, resolveAfter);
    })

}
resolveAfter(2000).then((mess)=> {
    console.log(mess);
})

//Promise that resolves after set time exercise with async/awaity sytx

async function resolveAfterAsync (resolveAfter) {
    return await new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`logged after ${resolveAfter} second(s) using asyc/await`)
        }, resolveAfter);
    })

}
resolveAfterAsync(2000).then((mess)=> {
    console.log(mess);
})

//Fetching and waiting exersice
function getData (time)  {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const  result = fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            resolve(result)
        }, time);
    })
}
getData(5000).then((data)=> {
    console.log(data)
    
})
//Fetching and waiting exercise usung async/await
async function getDataAsync (time)  {
    try {
        return await new Promise((resolve, reject)=> {
            setTimeout(() => {
                const  result = fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                resolve(result)
                console.log(result)
            }, time); 
        })
    } catch (error) {
        console.log(error, "oups")   
    }
}
getDataAsync(7000)


  
