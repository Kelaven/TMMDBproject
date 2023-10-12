fetch("./public/assets/data/movies.json")
    .then(response => response.json())
    .then((data) => {
        data.results.map(result => {
            const card = `<div class="col-12 px-0 col-sm-6 px-sm-1 col-xl-4 px-xl-3 card-col mb-3">
                            <div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-5">
                                        <img src="${result.poster_path}" class="img-fluid rounded-start" alt="movies cover">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                        <div id="place-elements">
                                            <h5 class="card-title">${result.original_title}</h5>
                                            <p class="card-text card-text-overview">${result.overview}</p>
                                            <p class="card-text card-text-average">${displayStars(roundHalf(divideRate(result.vote_average)))}<small class="text-body-secondary"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            const card1 = document.querySelector(".card-col");
            card1.innerHTML += card;
        });
    });
    


//! Fonction pour diviser par deux la note afin de passer d'une moyenne /10 à une moyenne /5
function divideRate(numberTest){
    return numberTest / 2;
};

//! Fonction pour arrondir un nombre à la demie-unité la plus proche :  
function roundHalf(number) {
    return Math.round(number * 2) / 2;
};

//! Fonction pour afficher les étoiles selon les notes
function displayStars(rating) {
    let displayStars = "";

    if (rating === 4.5) {
        displayStars = `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star-half-stroke "></i>`;
    } else if (rating === 4) {
        displayStars = `<i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i> <i class="fa-solid fa-star "></i><i class="fa-regular fa-star "></i>`;
    } else if (rating === 3.5) {
        displayStars = `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star-half-stroke "></i><i class="fa-regular fa-star "></i>`;
    } else if (rating === 3) {
        displayStars = `<i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-regular fa-star "></i><i class="fa-regular fa-star "></i>`;
    } else {
        displayStars = `<i class="fa-solid fa-star"></i> ${result.vote_average}`;
    }
        return displayStars;
};

