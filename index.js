//  Object-Oriented Programming

/* an example of IRL objects is a DVD player. Some of it's attributes are...

DVD Player
------------------
Height
Weight
Width
Color

Some of it's function are...
Play Fast Forward
Rewind
Pause

---------------
DVD
------------------
Movie length
Image
Size

Forming pillars of OOP are....
Abstraction; Gives us a 30,000 ft view. e.g. a vehicle moves (whether its a car, a truck a plane, a boat)
encapsulation: hides the detail s of how a method works. e.g. an engine. We don't need to worry about how it works. We just need to know how to drive, not whats going on under the hood.
Inheritance: Allows objects to inherit properties and functionality from other classes (a parent class or base class) can pass it's properties down to another class.
polymorphism: Something can take many different forms. e.g. an animal communicates in different ways. All are methods of communication but the communication method is polymorphic based on which animal is communicating.

we use construct called classes to group our code together logially to represent objects. Clases are like blueprints of objects. the terms "objects" and "instances" are used interchangably. an object is an instance of a class. an object (bluerint) is not a house, but the house is an instance of that blueprint.

CLASSES
Classes DON'T use camel case. Use Pascal case where first letter of every word is capitalized. e.g. StudentLastName

*/
class Student {
  constructor(firstName, lastName, phoneNumber, grade) {
    //this shows the order of items as they 'll appear in  the introduce command.
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.grade = grade;
  }
  introduce() {
    console.log(
      `${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}. Their grade is ${this.grade}.`
    ); //a method is a function that belongs to an object or class
  }
}

let student1 = new Student("Tom", "Sawyer", "(303)303-3000", "A");
let student2 = new Student("Huck", "Finn", "(505)234-5678", "C");

student1.introduce(); //the format of the introduce content was declared earlier.
student2.introduce();

console.log("\nExample from instructions:");
class Animal {
  constructor(name, type, weight, height, location) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.height = height;
    this.location = location;
  }

  describe() {
    console.log("Animal Description");
    console.log("------------------");
    console.log("\tName: " + this.name);
    console.log("\tType: " + this.type);
    console.log("\tWeight: " + this.weight + " lb.");
    console.log("\tHeight: " + this.height + " in.");
    console.log("\tLocation: " + this.location);
  }
}
let elephant = new Animal("Dumbo", "elephant", 8000, 108, "Disneyland");
elephant.describe();

/* Inheritance */

class NotificationSender {
  constructor(status) {
    this.status = status;
  }
  sendNotification(notification) {
    console.log("Sending: " + notification);
  }
  findUsersWithStatus(status) {
    let users = getUsers(status);
    return users;
  }
}

class PromotionSender extends NotificationSender {
  constructor(status) {
    super(status); //Refers to the parent class constructor
  }

  calculateDiscount(status) {
    if (status === "GOLD") {
      return 0.3;
    } else if (status === "SILVER") {
      return 0.15;
    }
    return 0;
  }
}
class CollectionSender extends NotificationSender {
  constructor(status) {
    super(status);
  }
  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    } else if (status === "DELINQUENT") {
      return 25;
    }
    return 5;
  }
}
let collectionSender = new CollectionSender("OVERDUE");
collectionSender.sendNotification("This is a test collection notification.");

// ---------------------------
console.log("\nExample from instructions:");
class Person {
  constructor(newName, oldName) {
    this.name = newName;
    this.oldName = oldName;
  }
  introduce() {
    return `\tMy name is ${this.name} but I used to be known as ${this.oldName}.`;
  }
}
class Teacher extends Person {
  constructor(name, oldName, courseName) {
    super(name, oldName);
    this.courseName = courseName;
  }
  introduceSelf() {
    console.log(
      `\tMy name is ${this.name}, and I, ${this.oldName}, will be teaching your ${this.courseName} class.`
    );
  }
}
let teacher = new Teacher("Ms. Angelo", "Booger", "Trigonometrytryagain");

console.log(teacher.introduce());
teacher.introduceSelf();

// Handling Exceptions. Exceptions are what happens that aren't what SHOULD happen.
try {
  list.push("hello");
} catch (err) {
  console.log(err);
}
console.log("goodbye");

// Menu app

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  describe() {
    return `${this.name} plays ${this.position}`;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }
  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      throw new Error(
        `Youcan only add an instance of Player. Argument is not a player; ${player}`
      );
    }
  }
  describe() {
    return `${this.name} has ${this.players.length} players.`;
  }
}
class Menu {
  constructor() {
    this.teams = [];
    this.selectedTeam = null;
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTeam();
          break;
        case "2":
          this.viewTeam();
          break;
        case "3":
          this.deleteTeam();
          break;
        case "4":
          this.displayTeams();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
      0) Exit
      1) Create new team
      2) View team
      3) Delete team
      4) Display all teams
      `);
  }

  showTeamMenuOptions(teamInfo) {
    return prompt(`
      0) back
      1) create player
      2) delete player
      ---------------------
      ${teamInfo}
      `);
  }

  displayTeams() {
    let teamString = "";
    for (let i = 0; i < this.teams.length; i++) {
      teamString += i + ") " + this.teams[i].name + "\n";
    }
    alert(teamString);
  }

  createTeam() {
    let name = prompt("Enter name for new team:");
    this.teams.push(new Team(name));
  }

  viewTeam() {
    let index = prompt("Enter the index of the team you wish to view:");
    if (index > -1 && index < this.teams.length) {
      this.selectedTeam = this.teams[index];
      let description = "Team Name: " + this.selectedTeam.name + "\n";

      for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description +=
          i +
          ") " +
          this.selectedTeam.players[i].name +
          " - " +
          this.selectedTeam.players[i].position +
          "\n";
      }

      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case "1":
          this.createPlayer();
          break;
        case "2":
          this.deletePlayer();
      }
    }
  }
  deleteTeam() {
    let index = prompt("Enter the index for the team you wish to delete: ");
    if (index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    }
  }

  createPlayer() {
    let name = prompt("enter name for new player: ");
    let position = prompt("Enter positions for new player");
    this.selectedTeam.players.push(new Player(name, position));
  }

  deletePlayer() {
    let index = prompt("Enter the index of the player you wish to delete: ");
    if (index > -1 && index < this.selectedTeam.players.length) {
      this.selectedTeam.players.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
