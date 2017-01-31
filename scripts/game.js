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
  this.wonIfYouSwitched = this.choice !== this.car;
  this.play = console.log(`
    car is ${this.car}; 
    goats are ${this.goat.pop()} and ${this.goat.pop()};
    the computer chose ${this.choice};
    these are the doors that can be opened: ${this.doorsThatCanBeOpened};
    opened ${this.openDoor()}
    ${this.finalChoice()}`);
}

function Counter() {
  this.switchWin = 0;
  this.stayWin = 0;
}

function playMultiple(times) {
  const currentCounter = new Counter();
  for (let i = 0; i < times; i += 1) {
    const game = new Game();
    if (game.wonIfYouSwitched) {
      currentCounter.switchWin += 1;
    } else { currentCounter.stayWin += 1; }
  }
  return [currentCounter.switchWin, currentCounter.stayWin];
}

function chartGames(games){

var data = playMultiple(games);

var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6"]);

var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width/2},${height/2})`);

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { if(d.index === 0) { return `${d.data} people won if they switched.`} else { return `${d.data} people won if they stayed`}; });
}





