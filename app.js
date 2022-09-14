const button = document.querySelector(".share-icon")
const author= document.querySelector(".author")
const socialMedia = document.querySelector(".social-media")

button.addEventListener("click",()=>{
    author.classList.toggle("show")
    socialMedia.classList.toggle("show")
})