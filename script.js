const form = document.querySelector(".add-form");
const btn = document.querySelector(".add-icon");
const addBtn = document.querySelector(".form-btn");
const overlay = document.querySelector(".overlay");
const removeBtn = document.querySelector(".remove-icon");

const toggleShow = function(){
    form.classList.toggle("hide");
    overlay.classList.toggle("hide");
    console.log("clicked");
}
addBtn.addEventListener('click', toggleShow);
btn.addEventListener('click', toggleShow);
removeBtn.addEventListener('click', toggleShow);