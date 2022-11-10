// //simple callback
// function doSomething(callback) {
//   console.log("something one");
// }
// function doSomething2() {
//   console.log("something two");
// }
// function doSomething3() {
//   console.log("something three");
// }

// doSomething(function doSomething2() {
//   console.log("something two");
// });
// // doSomething2();
// doSomething3();
async function randomFunction() {
  const myText = "The weather is cold";
  const newString = await myText.replace("cold", "warm");
  console.log(newString); // Should print "The weather is warm"
}

// function doSomething(callback) {
//   callback();
//   console.log("something one");
// }

// function doSomething2() {
//   console.log("something two");
// }

// function doSomething3() {
//   console.log("something three");
// }

// doSomething(doSomething2);
// // doSomething2();
// doSomething3();

// /////////////////////////////////////

// const password = "password1";

// function acceptLogin() {
//   console.log("Hello, welcome to your profile");
// }

// function rejectLogin() {
//   console.log("Couldn't log you in, sorry!");
// }

// function handleLogin(password, onSuccess, onError) {
//   if (password === "password2") {
//     onSuccess();
//   } else {
//     onError();
//   }
// }

// handleLogin("password1", acceptLogin, rejectLogin);

// ////////////////////////////////////

// const directions = [
//   "Starting point: Ironhack Berlin",
//   "Head east on Storkower Str.",
//   "Turn right onto Landsberger Allee",
//   "S Bahnhof Landsberger Allee",
// ];

// function getDirections(index, callback, errorCallback) {
//   setTimeout(() => {
//     console.log(directions[index]);
//     if (!directions[index]) errorCallback("Instructions not found.");
//     else callback();
//   }, 2000);
// }

// Single callback
// getDirections(0, function () {
//   getDirections(1, function () {
//     getDirections(2, function () {
//       getDirections(3, function () {
//         console.log("You arrived at your destination!");
//       });
//     });
//   });
// });

// getDirections(
//   0,
//   () => {
//     getDirections(
//       1,
//       () => {
//         getDirections(
//           2,
//           () => {
//             getDirections(
//               3,
//               () => {
//                 console.log("You arrived at your destination!");
//               },
//               (err) => console.log(err)
//             );
//           },
//           (err) => console.log(err)
//         );
//       },
//       (err) => console.log(err)
//     );
//   },
//   (err) => console.log(err)
// );
////////////////////////////////////////

// const user = {
//   name: "Bob",
//   id: 1,
//   mood: "happy",
//   favFood: "Sushi",
//   password: "Burgers123",
// };

// const error = {
//   message: "Not today, satan!",
//   code: 401,
// };

// // // // Creating a promise

// const response = new Promise((resolve, reject) => {
//   if (user.password === "Burgers13") {
//     resolve(user);
//   } else {
//     reject(error);
//   }
// });

// // //

// // // Consuming a promise

// response
//   .then((result) => {
//     const newBob = result.mood + " " + result.favFood;
//     if (newBob === "happy Sushi") {
//       console.log("okay");
//     }
//     return newBob + " " + "ulyktftdyjtf";
//   })
//   .then((moodAndFood) => {
//     const newerBob = moodAndFood + " " + "OK";
//     console.log(newerBob);
//     return newerBob;
//   })
//   .catch((err) => {
//     console.log("oops");
//     console.log(err);
//   })
//   .then(() => {
//     console.log("I'll be called anyway");
//   });

// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("I waited one second"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1337), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ name: "Bob" }), 4000);
// });

// const p4 = Promise.all([p1, p2, p3]);

// p4.then((values) => console.log("values", values));
