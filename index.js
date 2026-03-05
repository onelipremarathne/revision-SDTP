const characters = ["Garfield", "Odie", "Nermal", "Pooky", "Jon", "Ben10", "Gwen","Max","Kevin"];

const select = document.getElementById("characterSelect");
const img = document.getElementById("characterImage");

characters.forEach(function(name) {
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    select.appendChild(option);
});

select.addEventListener("change", function() {
    img.src = "images/" + this.value + ".jpg";
});