let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

var hostParagraph = document.getElementById("host-name");
var collaboratorParagraph = document.getElementById("collaborator-name");
var collaborator2Paragraph = document.getElementById("collaborator-2-name");

// Change the names
hostParagraph.textContent = "Justin Phillips";
collaboratorParagraph.textContent = "Geno Cousino";
collaborator2Paragraph.textContent = "Person";


// Question 2
// You can also create their own CSS classes in style.css file and use that. 

document.getElementById("instruction_button").addEventListener("click", function () {
    var instructions = document.querySelectorAll(".question");
    var button = document.getElementById("instruction_button");
    if (instructions[0].style.display !== "none") {
        // Hide instructions
        for (var i = 0; i < instructions.length; i++) {
            instructions[i].style.display = "none";
        }
        // Change button text
        button.textContent = "Show Instructions";
    } else {
        // Show instructions
        for (var i = 0; i < instructions.length; i++) {
            instructions[i].style.display = "block";
        }
        // Change button text
        button.textContent = "Hide Instructions";
    }
});


// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.

var firstNameInput = document.getElementById("first_name");
var lastNameInput = document.getElementById("last_name");

// Add event listener to the first name input field
var firstNameInput = document.getElementById("first_name");
var lastNameInput = document.getElementById("last_name");

// Add event listener to the first name input field
firstNameInput.addEventListener("input", function() {
    // Check if the entered value is 'John'
    if (firstNameInput.value.trim().toLowerCase() === "john") {
        // Autopopulate the last name with 'Doe'
        lastNameInput.value = "Doe";
    } else {
        // Clear the last name if first name is not 'John'
        lastNameInput.value = "";
    }
});

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

// Get reference to the username input field and the alert paragraph
var usernameInput = document.getElementById("user_name");
var usernameAlert = document.getElementById("username-alert");

// Add event listener to the username input field
usernameInput.addEventListener("input", function () {
    // Get the entered username
    var enteredUsername = usernameInput.value.trim();

    // Check if the entered username exists in the pokemonList array
    if (pokemonList.includes(enteredUsername)) {
        // Username already exists
        usernameAlert.textContent = "Username already exists";
    } else {
        // Unique username created
        usernameAlert.textContent = "Unique username created";
    }
});

// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.

let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm_password');
let passwordAlert = document.querySelector('#password-alert');

function checkPasswords() {
    if (password.value === confirmPassword.value) {
        passwordAlert.innerHTML = "Password Matches";
    } else {
        passwordAlert.innerHTML = "Passwords do not match";
    }
}


//Question 6


// Get reference to the radio buttons and the reset button
var radioButtons = document.querySelectorAll('input[type="radio"][name="favorite_day"]');
var resetButton = document.getElementById('radio-reset-button');

// Add event listener to the reset button
resetButton.addEventListener('click', function() {
    // Loop through radio buttons and uncheck them
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
});


//Question 7 


// Get reference to the file input field
var fileInput = document.getElementById('profile_pic');

// Add event listener to the file input field
fileInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var fileSize = file.size / 1024; // Convert size to KB

    // Check if file size exceeds 100KB
    if (fileSize > 100) {
        // Alert user
        alert('The chosen image is larger than 100KB. Please select a smaller image.');

        // Clear the file selection
        fileInput.value = '';
    }
});


//Question 8


var colorPicker = document.getElementById("color-picker");

// Add event listener to the color picker input
colorPicker.addEventListener("input", function () {
    // Get the selected color value
    var selectedColor = colorPicker.value;

    // Set the background color of the page to the selected color
    document.body.style.backgroundColor = selectedColor;

    // Determine the brightness of the selected color
    var r = parseInt(selectedColor.substring(1, 3), 16);
    var g = parseInt(selectedColor.substring(3, 5), 16);
    var b = parseInt(selectedColor.substring(5, 7), 16);
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Change text color based on the brightness of the background color
    var textColor = (brightness > 0) ? "#000000" : "#ffffff";
    document.body.style.color = textColor;
});


//Question 9 

// Get reference to the reset button
var resetButton = document.querySelector('.reset-form-button');

// Add event listener to the reset button
resetButton.addEventListener('click', function() {
    // Get all form elements
    var formElements = document.querySelectorAll('input, select, textarea');

    // Loop through form elements and reset their values
    formElements.forEach(function(element) {
        if (element.type === 'radio' || element.type === 'checkbox') {
            // For radio buttons and checkboxes, uncheck them
            element.checked = false;
        } else {
            // For other input fields and textareas, clear their values
            element.value = '';
        }
    });
});