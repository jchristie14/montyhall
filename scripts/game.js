function Game() {
  this.randDoor = () => Math.floor((Math.random() * 3) + 1);
  this.car = this.randDoor();
  this.goat = [1, 2, 3].filter(el => el !== this.car);
  this.choice = this.randDoor();
  this.doorsThatCanBeOpened = [1, 2, 3].filter(el => el !== this.choice)
    .filter(el => el !== this.car);
  this.openDoor = function openDoor() {
    if (this.doorsThatCanBeOpened.length === 1) { return this.doorsThatCanBeOpened[0]; }
    return this.doorsThatCanBeOpened[Math.round(Math.random())];
  };
  this.finalDoors = [1, 2, 3].filter(el => el !== this.openDoor);
  this.finalChoice = function finalChoice() {
    if (this.choice === this.car) { return 'You won if you stayed!'; }
    return 'You won if you switched!!!';
  };
  this.play = console.log(`
    car is ${this.car}; 
    goats are ${this.goat.pop()} and ${this.goat.pop()};
    the computer chose ${this.choice};
    these are the doors that can be opened: ${this.doorsThatCanBeOpened};
    opened ${this.openDoor()}
    ${this.finalChoice()}`,
    );
}
