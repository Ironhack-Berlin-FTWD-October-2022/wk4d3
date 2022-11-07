//The syntax of an ASYNC functions is:
async function someFunction() {
  return true;
}
// console.log(someFunction());

//Since the function returns a promise rather than a value, that means you can use the chaining method we looked at earlier:

// someFunction().then((value) => console.log("value", value));

// What do we expect to get?

/////////

//The AWAIT Keyword

// creating a promise

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 3000);
});

// // // RESOLVING A PROMISE WITH AWAIT

// async function asyncFunc() {
//   //   // wait until the promise resolves
//   // console.log("hello, we will wait for 3 seconds");
//   let result = await promise;
//   console.log("result", result);
// }

// asyncFunc();

/////////////////////////////////////////////////////////////////

// const directions = [
//   "Starting point: Ironhack Paris",
//   "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//   "← Turn left onto Rue Chanzy",
//   "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(index) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!directions[index]) {
//         reject("Instructions not found.");
//       } else {
//         resolve(console.log("directionsStep", directions[index]));
//       }
//     }, 5000);
//   });
// }

// async function getCoffee() {
//   await obtainDirections(0);
//   await obtainDirections(1);
//   await obtainDirections(2);
//   await obtainDirections(3);
//   console.log("You arrived at your destination!");
// }

// getCoffee();

////////////////////////////////////////////////////////

// // The try block is where we execute the code.
// // The catch block is used for handling Errors and rejections.
// const directions = [
//   "Starting point: Ironhack Paris",
//   "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//   "← Turn left onto Rue Chanzy",
//   "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(index) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!directions[index]) {
//         reject({ message: "Instructions not found.", code: 404 });
//       } else {
//         resolve(console.log("directionsStep", directions[index]));
//       }
//     }, 2000);
//   });
// }

// async function getCoffee2() {
//   try {
//     await obtainDirections(0);
//     await obtainDirections(1);
//     await obtainDirections(2);
//     await obtainDirections(3);
//     console.log("You arrived at your destination!");
//   } catch (err) {
//     console.log(err);
//   }
// }

// getCoffee2();

///////////////////////////////////////////////////////////

// async function displayMissionPatches() {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     // console.log(response.json());
//     const jsonResult = await response.json();
//     console.log("Parsed response awaited: ", jsonResult);
//   } catch (err) {
//     //     // Handle error or a rejected Promise
//     console.log("Something went wrong!", err);
//   }
// }

// displayMissionPatches();

async function displayMissionPatches(limit) {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    const launchesToDisplay = jsonResponse.slice(5, limit);

    launchesToDisplay.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement("img");

      imgElement.setAttribute("src", patchImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    });
  } catch (error) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", error);
  }
}

displayMissionPatches(10);
