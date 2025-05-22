/*
  Lab 12 - Sorting Hat
  This script takes a name, calculates a number using its length,
  and assigns it to a Hogwarts house from Harry Potter.
*/

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    let house = "";
  
    if (mod === 0) {
      house = "Gryffindor: Brave, daring, and chivalrous.";
    } else if (mod === 1) {
      house = "Hufflepuff: Loyal, kind, and hardworking.";
    } else if (mod === 2) {
      house = "Ravenclaw: Intelligent, curious, and wise.";
    } else if (mod === 3) {
      house = "Slytherin: Ambitious, resourceful, and cunning.";
    }
  
    return house;
  }
  
  $("#button").click(function () {
    let name = $("#input").val();
    let house = sortingHat(name);
    $("#output").html("<h2>The Sorting Hat has sorted you into:</h2><p>" + house + "</p>");
  });
  