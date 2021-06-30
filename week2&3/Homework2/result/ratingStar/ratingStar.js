const RatingResult = document.getElementsByClassName("ratingResult")[0];

const RatingStars = [...document.getElementsByClassName("RatingStar")];

console.log("Rating star list is "+ RatingStars)

console.log("Rating result list is "+ RatingResult)

let Grades;

// console.log("reach here " + typeof RatingStars)

function ExcuteRating(stars) {
    const ActivefullStar = "RatingStar fas fa-star";
    const ActivehalfStar = "RatingStar fas fa-star-half-alt";
    const UnActiveStar = "RatingStar far fa-star";
    let NumStars = stars.length;

    stars.map((star,index) => {
        star.onclick = () => {
            console.log("reach here")
            Grades = index;
            if (star.className == UnActiveStar) {
                for (let j = 0; j <= index; j++) {
                    RatingResult.textContent = `${index+1}/5`;
                    stars[j].className = ActivefullStar;
                }
            }
            else {
                for (let j = NumStars - 1; j >= index; j--) {
                    RatingResult.textContent = `${index}/5`;
                    stars[j].className = UnActiveStar;
                }
            }
        };
    });

}

ExcuteRating(RatingStars);