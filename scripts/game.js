function Game() {
  this.randDoor = () => Math.floor((Math.random() * 3) + 1);
  this.car = this.randDoor();
  this.goat = [1, 2, 3].filter(el => el !== this.car);
  this.choice = this.randDoor();
  this.play = console.log(`car is ${this.car}; goats are ${this.goat.pop()} and ${this.goat.pop()}; the computer chose ${this.choice}`);
}
