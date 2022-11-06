//basic example
// here we are fetching from the spaceX API, it's really cool!
// console.log(fetch("https://api.spacexdata.com/v4/launches"));
// fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Parsed response: ", data);
//   })
//   .catch((err) => console.log(err));

// fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const patchImage = item.links.patch.small;
//       const imgElement = document.createElement("img");
//       imgElement.setAttribute("src", patchImage);
//       imgElement.setAttribute("width", 200);
//       document.body.appendChild(imgElement);
//     });
//   })
//   .catch((err) => console.log(err));
