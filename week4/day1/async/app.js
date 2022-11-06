//The syntax of an ASYNC functions is:
async function someFunction() {
  return true;
}

//Since the function returns a promise rather than a value, that means you can use the chaining method we looked at earlier:

// someFunction().then((value) => console.log("value", value));  What do we expect to get?

/////////

//The AWAIT Keyword

// creating a promise

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 3000);
// });

// // RESOLVING A PROMISE WITH AWAIT

// async function asyncFunc() {
//   // wait until the promise resolves
//   let result = await promise;
//   console.log("result", result);
//   console.log("hello");
// }

// asyncFunc();

// const directions = [
//   "Starting point: Ironhack Paris",
//   "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//   "← Turn left onto Rue Chanzy",
//   "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(step) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("directionsStep", directions[step]);
//       if (!directions[step]) reject("Instructions not found.");
//       else resolve();
//     }, 2000);
//   });
// }

// async function getCoffee() {
//   await obtainDirections(0);
//   await obtainDirections(1);
//   await obtainDirections(3);
//   await obtainDirections(2);
//   console.log("You arrived at your destination!");
// }

// getCoffee();

// // The try block is where we execute the code.
// // The catch block is used for handling Errors and rejections.

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
// // a function which will throw an undefined error
// try {
//   nonExistentFunction();
// } catch (error) {
//   console.error(error);
//   // expected output: ReferenceError: nonExistentFunction is not defined
//   // Note - error messages will vary depending on browser
// }

// // getCoffee();

// // Further example of throwing an error

// function obtainDirections(step) {
//   return new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     console.log(directions[step]);

//     if (!directions[step]) reject("Instructions not found.");
//     else resolve();
//     // }, 2000);
//   });
// }

// async function getCoffee() {
//   try {
//     await obtainDirections(0);
//     await obtainDirections(1);
//     await obtainDirections(2);
//     await obtainDirections(3);

//     // This will result in a rejected Promise as direction step 4 doesn't exist:
//     await obtainDirections(4);

//     console.log("You arrived at your destination!");
//   } catch (error) {
//     console.log("Something went wrong: ", error);
//   }
// }

// async function displayMissionPatches() {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     const jsonResponse = await response.json();

//     console.log("Parsed response awaited: ", jsonResponse);
//   } catch (err) {
//     // Handle error or a rejected Promise
//     console.log("Something went wrong!", error);
//   }
// }

// displayMissionPatches();

// async function displayMissionPatches(limit = 0) {
//   try {
//     const response = await fetch("https://api.spacexdata.com/v4/launches");
//     const jsonResponse = await response.json();

//     console.log(jsonResponse);
//     const launchesToDisplay = jsonResponse.slice(0, limit);

//     launchesToDisplay.forEach((launchObj) => {
//       const patchImage = launchObj.links.patch.small;
//       const imgElement = document.createElement("img");

//       imgElement.setAttribute("src", patchImage);
//       imgElement.setAttribute("width", 200);
//       document.body.appendChild(imgElement);
//     });
//   } catch (error) {
//     // Handle error or a rejected Promise
//     console.log("Something went wrong!", error);
//   }
// }

// displayMissionPatches(10);
