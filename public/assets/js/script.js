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
                                            <p class="card-text card-text-average"><i class="fa-solid fa-star pe-2"></i>${result.vote_average}<small class="text-body-secondary"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            const card1 = document.querySelector(".card-col");
            card1.innerHTML += card
        });
    });
    








    //? Fonction pour arrondir un nombre à la demie-unité la plus proche :  
//     // let number = 0.2
//     function roundHalf(number) {
//                             let result 
//                             result = Math.round(number * 2) / 2
//                             return result;
//                         };
// // let roundedNumber = roundHalf(number)
// // console.log(roundedNumber)
    
    