var pet = {
    name: "Buddy",
    type: "dog",  
    age: 2,       
    happiness: 50,
    hunger: 30,   

    feed: function() {
        this.hunger = Math.max(0, this.hunger - 20);
        alert(`${this.name} has been fed! Hunger is now ${this.hunger}.`);
    },

    play: function() {
        this.happiness = Math.min(100, this.happiness + 20);
        alert(`${this.name} had fun playing! Happiness is now ${this.happiness}.`);
    },

    agePet: function() {
        this.age += 1;
        this.happiness = Math.max(0, this.happiness - 5);
        this.hunger = Math.min(100, this.hunger + 10);
        alert(`${this.name} is now ${this.age} years old! Happiness is now ${this.happiness}, Hunger is now ${this.hunger}.`);
    }
};

function startPetInteraction() {
    let action;
    do {
        action = prompt("What would you like to do? (feed, play, age, exit)").toLowerCase();
        switch (action) {
            case "feed":
                pet.feed();
                break;
            case "play":
                pet.play();
                break;
            case "age":
                pet.agePet();
                break;
            case "exit":
                alert("Thank you for interacting with your pet!");
                break;
            default:
                alert("Invalid action. Please choose 'feed', 'play', 'age', or 'exit'.");
        }
    } while (action !== "exit");
}