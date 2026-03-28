// Navbar color change on scroll

window.addEventListener("scroll", function(){

    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.classList.add("navbar-scrolled");
    }
    else{
        navbar.classList.remove("navbar-scrolled");
    }

});


// Highlight active menu

const links = document.querySelectorAll(".nav-item-custom");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(l => l.classList.remove("active"));

        this.classList.add("active");

    });

});


// Search animation

const searchInput = document.querySelector(".form-control");

if(searchInput){

searchInput.addEventListener("focus", function(){

    this.style.boxShadow="0 0 10px rgba(195,55,100,0.7)";

});

searchInput.addEventListener("blur", function(){

    this.style.boxShadow="none";

});

}




// Alert when todo added
document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");

    if(form){
        form.addEventListener("submit", function(){
            alert("Todo Added Successfully!");
        });
    }

});


// Delete confirmation
const deleteButtons = document.querySelectorAll(".btn-outline-danger");

deleteButtons.forEach(btn=>{
    btn.addEventListener("click", function(e){

        let confirmDelete = confirm("Are you sure you want to delete this todo?");

        if(!confirmDelete){
            e.preventDefault();
        }

    });
});


// Row animation
const rows = document.querySelectorAll("table tbody tr");

rows.forEach(row=>{
    row.addEventListener("mouseenter",()=>{
        row.style.transform="scale(1.02)";
    });

    row.addEventListener("mouseleave",()=>{
        row.style.transform="scale(1)";
    });
});