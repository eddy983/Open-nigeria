countries = Array.from(document.getElementsByClassName("map__items"));
tooltip = document.getElementById("tool_tip");
tooltipModal = document.getElementById("tool_tip_modal");
tooltipText = document.getElementsByClassName("tooltiptext");
stateMotto = document.getElementById("state_motto");
state_motto_span = document.getElementById("state_motto");

tooltipModal.style.display = "none";

countries.forEach(element => {
    element.addEventListener("mousemove", (e)=>{

        tooltipModal.style.display = "";

        tooltip.innerHTML = (e.target.id).toUpperCase();
        state_motto_span.innerHTML = filter_rank(e.target.id);

        tooltipModal.style.top = `${e.clientY - 40}px`;
        tooltipModal.style.left = `${e.clientX - 30}px`;
        stateMotto.style.color = "#A5ADB6";        
    });

    element.addEventListener("mouseleave", (e)=>{
        tooltipModal.style.display = "none";
    })
});

var filter_rank = (state_name)=>{
    target_state_mottos = 0
    state_ratings.forEach(state =>{
        if (state_name == state.name) {
            target_state_mottos = state.motto;
        }
    })
    return target_state_mottos;
}

var state_ratings = [
  { name: "fct", motto: "Center of Unity" },
  { name: "abia", motto: "God’s Own State" },
  { name: "adamawa", motto: "Highest peak of the nation" },
  { name: "akwa ibom", motto: "Land of promise" },
  { name: "anambra", motto: "Light of the nation" },
  { name: "bauchi", motto: "Pearl of tourism" },
  { name: "bayelsa", motto: "The glory of all lands" },
  { name: "benue", motto: "Food basket of the Nation" },
  { name: "borno", motto: "Home of peace" },
  { name: "cross river", motto: "The people’s paradise" },
  { name: "delta", motto: "The finger of God" },
  { name: "ebonyi", motto: "The salt of the Nation" },
  { name: "edo", motto: "The Heart beat of the nation" },
  { name: "ekiti", motto: "Land of honour and integrity" },
  { name: "enugu", motto: "Coal city state" },
  { name: "gombe", motto: "Jewel in the savannah" },
  { name: "imo", motto: "Eastern heartland" },
  { name: "jigawa", motto: "The new world" },
  { name: "kaduna", motto: "Centre of learning" },
  { name: "kano", motto: "Centre of commerce" },
  { name: "katsina", motto: "State of hospitality" },
  { name: "kebbi", motto: "Land of equity" },
  { name: "kogi", motto: "The confluence state" },
  { name: "kwara", motto: "The state of harmony" },
  { name: "lagos", motto: "Centre of excellence" },
  { name: "nasarawa", motto: "The home of solid minerals" },
  { name: "niger", motto: "The power state" },
  { name: "ogun", motto: "The gateway state" },
  { name: "ondo", motto: "The sunshine state" },
  { name: "osun", motto: "Land of virtue" },
  { name: "oyo", motto: "The pace setter state" },
  { name: "plateau", motto: "Home of peace and tourism" },
  { name: "rivers", motto: "Treasure base of the nation" },
  { name: "sokoto", motto: "Seat of the caliphate" },
  { name: "taraba", motto: "Nature’s gift to the nation" },
  { name: "yobe", motto: "Pride of the sahel" },
  { name: "zamfara", motto: "Farming is our pride" }
];