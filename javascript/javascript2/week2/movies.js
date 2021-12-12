console.log("hello movies");
const moviesShortTitles =[];
const longMovieTitle =[];
const movies = [
    {"title": "'71","year": 2014,"rating": 2,"votes": 41702,"running_times": 5940},
    {"title": "Alien is here","year": 2014,"rating": 2,"votes": 41702,"running_times": 5940},
    {"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
    {"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
    {"title": "'the benjamin boy","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
    {"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},
    {"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},
    {"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},
    {"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},
    {"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},
    {"title": "Star Wars: The Clone Wars", "year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},
    {"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},
    {"title": "10 Cloverfield Lane","year": 2016,"rating": 7.2,"votes": 216151,"running_times": 6240},
    {"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},
    {"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820},
    {"title": "10 Years","year": 2011,"rating": 6.1,"votes": 20790,"running_times": 6000},
    {"title": "10,000 BC","year": 2008,"rating": 5.1,"votes": 114750,"running_times": 6540},
    {"title": "100 Feet","year": 2008,"rating": 5.5,"votes": 10979,"running_times": 6240},
    {"title": "100 Girls","year": 2000,"rating": 5.9,"votes": 19232,"running_times": 5640},
    {"title": "101 Dalmatians","year": 1996,"rating": 5.7,"votes": 83245,"running_times": 6180},
    {"title": "102 Dalmatians","year": 2000,"rating": 4.9,"votes": 28927,"running_times": 6000},
    {"title": "11-11-11","year": 2011,"rating": 4,"votes": 11425,"running_times": 5400},
    {"title": "11:14","year": 2003,"rating": 7.2,"votes": 40149,"running_times": 5700},
    {"title": "12 Angry Men","year": 1957,"rating": 8.9,"votes": 518449,"running_times": 5760},
    {"title": "12 Rounds","year": 2009,"rating": 5.6,"votes": 24457,"running_times": 6480},
    {"title": "12 Years a Slave","year": 2013,"rating": 8.1,"votes": 513047,"running_times": 8040},
    {"title": "127 Hours","year": 2010,"rating": 7.6,"votes": 302809,"running_times": 5640},
    {"title": "13","year": 2010,"rating": 6.1,"votes": 36623,"running_times": 5460},
    {"title": "13 Going on 30","year": 2004,"rating": 6.1,"votes": 134434,"running_times": 5880},
    {"title": "13 Hours","year": 2016,"rating": 7.3,"votes": 85771,"running_times": 8640},
    {"title": "13 Sins","year": 2014,"rating": 6.3,"votes": 26738,"running_times": 5580},
    {"title": "13th","year": 2016,"rating": 8.2,"votes": 15188,"running_times": 6000},
    {"title": "1408","year": 2007,"rating": 6.8,"votes": 228738,"running_times": 6840},
    {"title": "1492: Conquest of Paradise","year": 1992,"rating": 6.5,"votes": 24439,"running_times": 9240},
    {"title": "15 Minutes","year": 2001,"rating": 6.1,"votes": 44647,"running_times": 7200},
    {"title": "16 Blocks","year": 2006,"rating": 6.6,"votes": 117443,"running_times": 6600},
    {"title": "17 Again","year": 2009,"rating": 6.4,"votes": 156663,"running_times": 6120},
    {"title": "1922","year": 2017,"rating": 6.4,"votes": 15416,"running_times": 6120},
    {"title": "1941","year": 1979,"rating": 5.9,"votes": 27172,"running_times": 8760},
    {"title": "2 Days in New York","year": 2012,"rating": 6,"votes": 12766,"running_times": 5760},
    {"title": "2 Days in Paris","year": 2007,"rating": 6.8,"votes": 28106,"running_times": 5760},
    {"title": "2 Days in the Valley","year": 1996,"rating": 6.5,"votes": 16528,"running_times": 6240},
    {"title": "2 Fast 2 Furious","year": 2003,"rating": 5.9,"votes": 213674,"running_times": 6420},
    {"title": "2 Guns","year": 2013,"rating": 6.7,"votes": 170412,"running_times": 6540},
    {"title": "20,000 Leagues Under the Sea","year": 1954,"rating": 7.2,"votes": 24094,"running_times": 7620},
    {"title": "200 Cigarettes","year": 1999,"rating": 5.9,"votes": 13532,"running_times": 6060},
    {"title": "2001 Maniacs","year": 2005,"rating": 5.4,"votes": 10889,"running_times": 5220},
    {"title": "2001: A Space Odyssey","year": 1968,"rating": 8.3,"votes": 481800,"running_times": 9660},
    {"title": "2001: A Space Travesty","year": 2000,"rating": 3.4,"votes": 10094,"running_times": 5940},
    {"title": "2010","year": 1984,"rating": 6.8,"votes": 44155,"running_times": 6960},
    {"title": "2012","year": 2009,"rating": 5.8,"votes": 306797,"running_times": 9480},
    {"title": "Chase three - The final chase","year": 2016,"rating": 7.4,"votes": 22965,"running_times": 7140},
    {"title": "20th Century Women","year": 2016,"rating": 7.4,"votes": 22965,"running_times": 7140},
    {"title": "21 & Over","year": 2013,"rating": 5.9,"votes": 65298,"running_times": 5580},
    {"title": "21","year": 2008,"rating": 6.8,"votes": 203251,"running_times": 7380},
    {"title": "21 Grams","year": 2003,"rating": 7.7,"votes": 202129,"running_times": 7440},
    {"title": "21 Jump Street","year": 2012,"rating": 7.2,"votes": 446476,"running_times": 6540},
    {"title": "22 Jump Street","year": 2014,"rating": 7.1,"votes": 292991,"running_times": 6720},
    {"title": "24 Hour Party People","year": 2002,"rating": 7.4,"votes": 28750,"running_times": 7020},
    {"title": "25th Hour","year": 2002,"rating": 7.7,"votes": 157063,"running_times": 8100},
    {"title": "27 Dresses","year": 2008,"rating": 6.1,"votes": 134861,"running_times": 6660},
    {"title": "28 Days","year": 2000,"rating": 6,"votes": 37395,"running_times": 6180},
    {"title": "28 Days Later...","year": 2002,"rating": 7.6,"votes": 323591,"running_times": 6780},
    {"title": "28 Weeks Later","year": 2007,"rating": 7,"votes": 228033,"running_times": 6000},
    {"title": "2:22","year": 2017,"rating": 5.7,"votes": 10266,"running_times": 5880},
    {"title": "3 Days to Kill","year": 2014,"rating": 6.2,"votes": 75906,"running_times": 7380},
    {"title": "3 Idiots","year": 2009,"rating": 8.4,"votes": 256619,"running_times": 10200},
    {"title": "3 Men and a Baby","year": 1987,"rating": 5.9,"votes": 39924,"running_times": 6120},
    {"title": "3 Men and a Little Lady","year": 1990,"rating": 5.3,"votes": 19005,"running_times": 6240},
    {"title": "3 Ninjas","year": 1992,"rating": 5.2,"votes": 17582,"running_times": 5880},
    {"title": "3 Women","year": 1977,"rating": 7.9,"votes": 10852,"running_times": 7440},
    {"title": "30 Days of Night","year": 2007,"rating": 6.6,"votes": 148004,"running_times": 6780},
    {"title": "30 Minutes or Less","year": 2011,"rating": 6.1,"votes": 83073,"running_times": 4980},
    {"title": "300","year": 2006,"rating": 7.7,"votes": 654380,"running_times": 7020},
    {"title": "3000 Miles to Graceland","year": 2001,"rating": 5.9,"votes": 39646,"running_times": 7500},
    {"title": "300: Rise of an Empire","year": 2014,"rating": 6.2,"votes": 245690,"running_times": 6120},
    {"title": "31","year": 2016,"rating": 5,"votes": 12536,"running_times": 6120},
    {"title": "360","year": 2011,"rating": 6.2,"votes": 14275,"running_times": 6600},
    {"title": "3:10 to Yuma","year": 1957,"rating": 7.6,"votes": 15498,"running_times": 5520},
    {"title": "3:10 to Yuma","year": 2007,"rating": 7.7,"votes": 254591,"running_times": 7320},
    {"title": "40 Days and 40 Nights","year": 2002,"rating": 5.6,"votes": 64777,"running_times": 5760},
    {"title": "42","year": 2013,"rating": 7.5,"votes": 71968,"running_times": 7680},
    {"title": "45 Years","year": 2015,"rating": 7.1,"votes": 24269,"running_times": 5460},
    {"title": "47 Meters Down","year": 2017,"rating": 5.7,"votes": 23125,"running_times": 5340},
    {"title": "47 Ronin","year": 2013,"rating": 6.3,"votes": 127026,"running_times": 7680},
    {"title": "48 Hrs.","year": 1982,"rating": 6.9,"votes": 58092,"running_times": 5760},
    {"title": "4: Rise of the Silver Surfer","year": 2007,"rating": 5.6,"votes": 225698,"running_times": 5520},
    {"title": "5 Days of War","year": 2011,"rating": 5.6,"votes": 12658,"running_times": 6780},
    {"title": "5 to 7","year": 2014,"rating": 7.1,"votes": 13647,"running_times": 6000},
    {"title": "50 First Dates","year": 2004,"rating": 6.8,"votes": 286325,"running_times": 5940},
    {"title": "50/50","year": 2011,"rating": 7.7,"votes": 287608,"running_times": 6000},
    {"title": "54","year": 1998,"rating": 5.8,"votes": 28964,"running_times": 7260},
    {"title": "6 Bullets","year": 2012,"rating": 6.1,"votes": 12351,"running_times": 6900},
    {"title": "6 Souls","year": 2010,"rating": 6.1,"votes": 27608,"running_times": 6720},
    {"title": "8 Mile","year": 2002,"rating": 7.1,"votes": 208201,"running_times": 6600},
    {"title": "8 femmes","year": 2002,"rating": 7.1,"votes": 25351,"running_times": 6660},
    {"title": "88 Minutes","year": 2007,"rating": 5.9,"votes": 69067,"running_times": 6480},
    {"title": "8MM","year": 1999,"rating": 6.5,"votes": 110165,"running_times": 7380},
    {"title": "8½","year": 1963,"rating": 8.1,"votes": 88077,"running_times": 8280},
    {"title": "9","year": 2009,"rating": 7.1,"votes": 118743,"running_times": 4740},
    {"title": "9 Songs","year": 2004,"rating": 4.9,"votes": 19175,"running_times": 4260},
    {"title": "99 Homes","year": 2014,"rating": 7.1,"votes": 23100,"running_times": 6720},
    {"title": "A Beautiful Mind","year": 2001,"rating": 8.2,"votes": 692444,"running_times": 8100},
    {"title": "A Better Life","year": 2011,"rating": 7.2,"votes": 13931,"running_times": 5880},
    {"title": "A Bigger Splash","year": 2015,"rating": 6.4,"votes": 17641,"running_times": 7500},
    {"title": "A Boy and His Dog","year": 1975,"rating": 6.6,"votes": 14010,"running_times": 5460},
    {"title": "A Bridge Too Far","year": 1977,"rating": 7.4,"votes": 43717,"running_times": 10500},
    {"title": "A Bronx Tale","year": 1993,"rating": 7.8,"votes": 107443,"running_times": 7260},
    {"title": "A Bug's Life","year": 1998,"rating": 7.2,"votes": 229465,"running_times": 5700},
    {"title": "A Christmas Carol","year": 2009,"rating": 6.8,"votes": 82681,"running_times": 5760},
    {"title": "A Christmas Story","year": 1983,"rating": 8,"votes": 113032,"running_times": 5640},
    {"title": "A Cinderella Story","year": 2004,"rating": 5.9,"votes": 69295,"running_times": 5700},
    {"title": "A Civil Action","year": 1998,"rating": 6.5,"votes": 24558,"running_times": 6900},
    {"title": "A Clockwork Orange","year": 1971,"rating": 8.3,"votes": 623645,"running_times": 8160},
    {"title": "A Close Shave","year": 1995,"rating": 8.2,"votes": 33053,"running_times": 1800},
    {"title": "A Cock and Bull Story","year": 2005,"rating": 6.8,"votes": 11624,"running_times": 5640},
    {"title": "A Cure for Wellness","year": 2016,"rating": 6.4,"votes": 50746,"running_times": 8760},
    {"title": "A Dangerous Method","year": 2011,"rating": 6.5,"votes": 87773,"running_times": 5940},
    {"title": "A Day at the Races","year": 1937,"rating": 7.7,"votes": 11369,"running_times": 6660},
    {"title": "A Dirty Shame","year": 2004,"rating": 5.1,"votes": 11191,"running_times": 5340},
    {"title": "A Dog's Purpose","year": 2017,"rating": 6.9,"votes": 38675,"running_times": 6000},
    {"title": "A Face in the Crowd","year": 1957,"rating": 8.2,"votes": 10910,"running_times": 7560},
    {"title": "hello world hello","year": 1957,"rating": 8.2,"votes": 10910,"running_times": 7560},
    {"title": "A Fantastic Fear of Everything","year": 2012,"rating": 5.9,"votes": 12446,"running_times": 6000}
];
//short and log titles
const shortTiteles =  movies.filter(movie=> movie.title.length<10).map(movie=>movie.title);
moviesShortTitles.push(shortTiteles)
console.log(moviesShortTitles);
const longTiteles =  movies.filter(movie=> movie.title.length>10).map(movie=>movie.title);
longMovieTitle.push(longTiteles)
console.log(longMovieTitle);

//number of old movies
const oldMoviesCount = movies.map(movie=>movie.year<=1989 && movie.year>=1980).filter(movie=>movie==true);
console.log(`number of very old movies is ${oldMoviesCount.length}`);

//add new key to the movies object and add good, bad or avrage 
const ratingValues= movies.map(movie=>movie.rating);
console.log(ratingValues);
const rate = movies.forEach(movie => {
    movie.tag=" ";
    if(movie.rating>=7) {
        movie.tag="good"
    }else if(movie.rating>=4) {
        movie.tag="avrage"

    }else if(movie.rating<4) {
       movie.tag="bad"

    }
});
//movies after adding new tag 
console.log(movies)

//chaining
const higherThan6 = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating);
console.log(`rating of movies that are higher than 6 are ${higherThan6}`);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const namesOfMovies = movies.map(movie => movie.title.toLocaleLowerCase()).filter(movie => { 
    if(movie.includes("alien") || movie.includes("benjamin") || movie.includes("surfer")) {
        return movie;
    }
});
console.log(`number of movies that contains surfer, benjamin and alien is ${namesOfMovies.length} and their names are : ${namesOfMovies}`)


//duplicated word
const moviesWithDupWords =[];
const wordCountInString = (str) => {
    const words = str.split(" ");
    words.forEach(element => {
        wordOfArray = element;
     });
    if (str.split(wordOfArray).length-1>1){
       moviesWithDupWords.push(str)
    }
}
/*
wordCountInString("hello world hello")
wordCountInString("may may zer may")
wordCountInString("star wars star")
wordCountInString("star wars")
console.log("Movie title with duplicated word testtttt: " , moviesWithDupWords)
*/
const specialMovies = movies.forEach(movie => {
    const title = movie.title.toLocaleLowerCase().toString();
    wordCountInString(title);
})
console.log("Movie title with duplicated word", moviesWithDupWords)

//avrage rating
const avrageRat = movies.map(movie => movie.rating);
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log("The avrage rating is", avrageRat.reduce(reducer)/avrageRat.length);

//Count the total number of Good, Average and Bad movies
const goodMovies = [];
const avrgMovies = [];
const badMovies =  [];

const tagMovies = movies.map(movie => movie.tag).reduce((accumulator, nextValue)=>{
    if(accumulator === "good") {
        return accumulator.push(goodMovies)
    }else{
        console.log(nextValue)
        return nextValue
    }
    
}, {})
console.log(tagMovies)
console.log(`there is ${goodMovies.length} good movie (s).`)
console.log(`there is ${avrgMovies.length} avrage movie (s).`)
console.log(`there is ${badMovies.length} bad movie (s).`)







    /*tagMovies.forEach(tagValue => {
        if(tagValue == "good"){
           goodMovies.push(tagValue)
        }else if(tagValue == "avrage") {
            avrgMovies.push(tagValue)
        }else if(tagValue == "bad") {
            badMovies.push(tagValue)
        }
    });
}
*/
/*
countTags()
console.log(`there is ${goodMovies.length} good movie (s).`)
console.log(`there is ${avrgMovies.length} avrage movie (s).`)
console.log(`there is ${badMovies.length} bad movie (s).`)
*/





