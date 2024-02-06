// JavaScript Document

let tenButton = document.querySelector(".tenButton");
let elevenButton = document.querySelector(".elevenButton");
let twelveButton = document.querySelector(".twelveButton");
let seniorPortfolios = document.querySelector(".senior-portfolios");
let juniorPortfolios = document.querySelector(".junior-portfolios");
let sophomorePortfolios = document.querySelector(".sophomore-portfolios");

tenButton.onclick=function(){
    console.log("10th grade portfolios selected");
    sophomorePortfolios.style.display="block";
    juniorPortfolios.style.display="none";
    seniorPortfolios.style.display="none";
    
}
elevenButton.onclick=function(){
    console.log("11th grade portfolios selected");
    sophomorePortfolios.style.display="none";
    juniorPortfolios.style.display="block";
    seniorPortfolios.style.display="none";
}
twelveButton.onclick=function(){
    console.log("12th grade portfolios selected");
    sophomorePortfolios.style.display="none";
    juniorPortfolios.style.display="none";
    seniorPortfolios.style.display="block";
}