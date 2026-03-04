function getPromise(url) {
    return fetch(url)
        .then(function(response) {
            return response.json();
        });
}

let promise1 = getPromise(BULBASAUR_POKEMONS_URL)
let promise2 = getPromise(RATICATE_POKEMONS_URL)
let promise3 = getPromise(KAKUNA_POKEMONS_URL)

Promise.all([promise1, promise2, promise3])
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})