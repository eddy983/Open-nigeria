countries = Array.from(document.getElementsByClassName("map__items"));
tooltip = document.getElementById("tool_tip");
tooltipModal = document.getElementById("tool_tip_modal");
tooltipText = document.getElementsByClassName("tooltiptext");
stateMotto = document.getElementById("state_motto");
state_motto_span = document.getElementById("state_motto");
state_img = document.getElementById("state_img");
console.dir(state_img);

tooltipModal.style.display = "none";

countries.forEach(element => {
    element.addEventListener("mousemove", e => {
        tooltipModal.style.display = "";

        let target_state = filter_rank(e.target.id);

        tooltip.innerHTML = e.target.id.toUpperCase();
        state_motto_span.innerHTML = target_state.motto;
        state_img.src = target_state.img;

        tooltipModal.style.top = `${e.clientY - 40}px`;
        tooltipModal.style.left = `${e.clientX - 30}px`;
        stateMotto.style.color = "#A5ADB6";
    });

    element.addEventListener("mouseleave", e => {
        tooltipModal.style.display = "none";
    });
});

var filter_rank = state_name => {
    let target_state = 0;
    state_ratings.forEach(state => {
        if (state_name == state.name) {
            target_state = state;
        }
    });
    return target_state;
};

var state_ratings = [
    { img: "assets/img/FCT-logo.png", name: "fct", motto: "Center of Unity" },
    { img: "assets/img/Abia-logo.png", name: "abia", motto: "God’s Own State" },
    {
        img: "assets/img/nigeria-logo.png",
        name: "adamawa",
        motto: "Highest peak of the nation"
    },
    {
        img: "assets/img/Ibom-logo.png",
        name: "akwa ibom",
        motto: "Land of promise"
    },
    {
        img: "assets/img/Anambra-logo.png",
        name: "anambra",
        motto: "Light of the nation"
    },
    {
        img: "assets/img/bauchi-logo.png",
        name: "bauchi",
        motto: "Pearl of tourism"
    },
    {
        img: "assets/img/bayelsa-logo.png",
        name: "bayelsa",
        motto: "The glory of all lands"
    },
    {
        img: "assets/img/nigeria-logo.png",
        name: "benue",
        motto: "Food basket of the Nation"
    },
    { img: "assets/img/nigeria-logo.png", name: "borno", motto: "Home of peace" },
    {
        img: "assets/img/cross-river-logo.png",
        name: "cross river",
        motto: "The people’s paradise"
    },
    {
        img: "assets/img/delta-logo.png",
        name: "delta",
        motto: "The finger of God"
    },
    {
        img: "assets/img/ebonyi-logo.png",
        name: "ebonyi",
        motto: "The salt of the Nation"
    },
    {
        img: "assets/img/edo-logo.png",
        name: "edo",
        motto: "The Heart beat of the nation"
    },
    {
        img: "assets/img/ekiti-logo.gif",
        name: "ekiti",
        motto: "Land of honour and integrity"
    },
    { img: "assets/img/enugu-logo.png", name: "enugu", motto: "Coal city state" },
    {
        img: "assets/img/gombe-logo.png",
        name: "gombe",
        motto: "Jewel in the savannah"
    },
    { img: "assets/img/imo-logo.png", name: "imo", motto: "Eastern heartland" },
    { img: "assets/img/jigawa-logo.png", name: "jigawa", motto: "The new world" },
    {
        img: "assets/img/Kaduna-logo.png",
        name: "kaduna",
        motto: "Centre of learning"
    },
    {
        img: "assets/img/kano-logo.png",
        name: "kano",
        motto: "Centre of commerce"
    },
    {
        img: "assets/img/nigeria-logo.png",
        name: "katsina",
        motto: "State of hospitality"
    },
    {
        img: "assets/img/nigeria-logo.png",
        name: "kebbi",
        motto: "Land of equity"
    },
    {
        img: "assets/img/kogi-logo.png",
        name: "kogi",
        motto: "The confluence state"
    },
    {
        img: "assets/img/kwara-logo.png",
        name: "kwara",
        motto: "The state of harmony"
    },
    {
        img: "assets/img/lagos-logo.png",
        name: "lagos",
        motto: "Centre of excellence"
    },
    {
        img: "assets/img/nasarawa-logo.png",
        name: "nasarawa",
        motto: "The home of solid minerals"
    },
    { img: "assets/img/niger-logo.png", name: "niger", motto: "The power state" },
    { img: "assets/img/ogun-logo.png", name: "ogun", motto: "The gateway state" },
    {
        img: "assets/img/ondo-logo.png",
        name: "ondo",
        motto: "The sunshine state"
    },
    { img: "assets/img/osun-logo.png", name: "osun", motto: "Land of virtue" },
    {
        img: "assets/img/oyo-logo.png",
        name: "oyo",
        motto: "The pace setter state"
    },
    {
        img: "assets/img/plateau-logo.png",
        name: "plateau",
        motto: "Home of peace and tourism"
    },
    {
        img: "assets/img/rivers-logo.png",
        name: "rivers",
        motto: "Treasure base of the nation"
    },
    {
        img: "assets/img/sokoto-logo.png",
        name: "sokoto",
        motto: "Seat of the caliphate"
    },
    {
        img: "assets/img/taraba-logo.png",
        name: "taraba",
        motto: "Nature’s gift to the nation"
    },
    {
        img: "assets/img/yobe-logo.png",
        name: "yobe",
        motto: "Pride of the sahel"
    },
    {
        img: "assets/img/nigeria-logo.png",
        name: "zamfara",
        motto: "Farming is our pride"
    }
];

// FOR THE MENU

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myMenu() {
    document.getElementById("myLinks").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".icon")) {
        var myDropdown = document.getElementById("myLinks");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
};

// FOR THE DROPDOWNS

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".filter__btn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
};

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".filter__btn2")) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
};
