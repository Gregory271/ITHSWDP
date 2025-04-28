// Select buttons and portfolio sections
let tenButton = document.querySelector(".tenButton"),
    elevenButton = document.querySelector(".elevenButton"),
    twelveButton = document.querySelector(".twelveButton"),
    seniorPortfolios = document.querySelector(".senior-portfolios"),
    juniorPortfolios = document.querySelector(".junior-portfolios"),
    sophomorePortfolios = document.querySelector(".sophomore-portfolios"),
    alumniPortfolios = document.querySelector(".alumni-portfolios");

// Event listener for 10th grade button
tenButton.onclick = function () {
    console.log("10th grade portfolios selected");
    sophomorePortfolios.style.display = "block";
    juniorPortfolios.style.display = "none";
    seniorPortfolios.style.display = "none";
    alumniPortfolios.style.display = "none";
};

// Event listener for 11th grade button
elevenButton.onclick = function () {
    console.log("11th grade portfolios selected");
    sophomorePortfolios.style.display = "none";
    juniorPortfolios.style.display = "block";
    seniorPortfolios.style.display = "none";
    alumniPortfolios.style.display = "none";
};

// Event listener for 12th grade button
twelveButton.onclick = function () {
    console.log("12th grade portfolios selected");
    sophomorePortfolios.style.display = "none";
    juniorPortfolios.style.display = "none";
    seniorPortfolios.style.display = "block";
    alumniPortfolios.style.display = "none";
};