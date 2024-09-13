class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }

    bloom() {
        return `The ${this.name} blooms in ${this.bloomSeason}.`;
    }

    fragrance() {
        return this.isFragrant
            ? `The ${this.name} is fragrant.`
            : `The ${this.name} is not fragrant.`;
    }

    colorDisplay() {
        return `The ${this.name} has a beautiful ${this.color} color.`;
    }
}

// Create an object of Flower class
const rose = new Flower("Rose", "red", "Spring", true);

// Use the methods and display results in HTML
document.getElementById('flowerOutput').innerHTML = `
    <p>${rose.bloom()}</p>
    <p>${rose.fragrance()}</p>
    <p>${rose.colorDisplay()}</p>
`;
