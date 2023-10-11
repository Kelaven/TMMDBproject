//* afficher les résultats dans la console : 
// fetch("./public/assets/data/movies.json")
//     .then(response => response.json())
//     .then(data => console.log(data.results[0, 0].id))

//* afficher les résultats dans le DOM : 
// const test = document.querySelector("#test")
// fetch("./public/assets/data/movies.json")
//     .then(response => response.json())
//     .then(data => test.innerText = data.results[0, 0].id)


//* afficher l'image dans la premiere card : 
// const img = document.querySelector(".img-fluid");
// fetch("./public/assets/data/movies.json")
//     .then(response => response.json())
//     .then(data => img.src = data.results[0].poster_path)


//* Cloner la card : 
// const baseCard = document.querySelector(".card");
// const cardCopy = baseCard.cloneNode(true);
// const cardCopyAjoute = document.querySelector(".card2");
// const CardCopyAjoutePlace = cardCopyAjoute.appendChild(cardCopy);
// // console.log(cardCopy);




// const card1 = document.querySelector(".card-col")
// const img = document.querySelector(".img-fluid");
// const title = document.querySelector(".card-title");
// const overview = document.querySelector(".card-text-overview")
// const average = document.querySelector(".card-text-average")

// fetch("./public/assets/data/movies.json")
//     .then(response => response.json())
//     // .then(data => img.src = data.results[0].poster_path)
//     .then ((data) => {
//         img.src = data.results[0].poster_path;
//         title.innerText = data.results[0].original_title;
//         overview.innerText = data.results[0].overview;
//         average.innerText = data.results[0].vote_average;
//     });




// const card1 = document.querySelector(".card-col")

fetch("./public/assets/data/movies.json")
    .then(response => response.json())
    .then((data) => {
        data.results.map(result => {
            const card = `<div class="col-12 px-0 col-sm-6 px-sm-1 col-xl-4 px-xl-2 card-col">
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-5">
                                        <img src="${result.poster_path}" class="img-fluid rounded-start" alt="movies cover">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                        <h5 class="card-title">${result.original_title}</h5>
                                            <p class="card-text card-text-overview">${result.overview}</p>
                                            <p class="card-text card-text-average">${result.vote_average}<small class="text-body-secondary"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            const card1 = document.querySelector(".card-col");
            card1.innerHTML += card
        });
    });