const image = document.querySelector("#image");
const container = document.querySelector(".container");

const menuIcon = "/images/list.png"; 
const closeIcon = "/images/icons8-x-50.png"; 
image.addEventListener('click', () => {
    if (container.style.display === "block") {
        container.style.display = "none";
        image.src = menuIcon; 
    } else {
        container.style.display = "block";
        image.src = closeIcon; 
    }
});
