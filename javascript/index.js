// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//     getInstruction(
//       "mashedPotatoes",
//       1,
//       (step2) => {
//         document.querySelector(
//           "#mashedPotatoes"
//         ).innerHTML += `<li>${step2}</li>`;
//         getInstruction(
//           "mashedPotatoes",
//           2,
//           (step3) => {
//             document.querySelector(
//               "#mashedPotatoes"
//             ).innerHTML += `<li>${step3}</li>`;
//             getInstruction(
//               "mashedPotatoes",
//               3,
//               (step4) => {
//                 document.querySelector(
//                   "#mashedPotatoes"
//                 ).innerHTML += `<li>${step4}</li>`;
//                 getInstruction(
//                   "mashedPotatoes",
//                   4,
//                   (step5) => {
//                     document.querySelector(
//                       "#mashedPotatoes"
//                     ).innerHTML += `<li>${step5}</li>`;
//                     document
//                       .querySelector("#mashedPotatoesImg")
//                       .removeAttribute("hidden");
//                     document.querySelector(
//                       "#mashedPotatoes"
//                     ).innerHTML += `<li>Mashed Potato ready!</li>`;
//                   },
//                   (error) => console.log(error)
//                 );
//               },
//               (error) => console.log(error)
//             );
//           },
//           (error) => console.log(error)
//         );
//       },
//       (error) => console.log(error)
//     );
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using promises
// const stepsList = document.querySelector("#mashedPotatoes");
// const mashedPotatoesImg = document.querySelector("#mashedPotatoesImg");

// obtainInstruction("mashedPotatoes", 0)
//   .then((step1) => {
//     stepsList.innerHTML += `<li>${step1}</li>`;
//     return obtainInstruction("mashedPotatoes", 1);
//   })
//   .then((step2) => {
//     stepsList.innerHTML += `<li>${step2}</li>`;
//     return obtainInstruction("mashedPotatoes", 2);
//   })
//   .then((step3) => {
//     stepsList.innerHTML += `<li>${step3}</li>`;
//     return obtainInstruction("mashedPotatoes", 3);
//   })
//   .then((step4) => {
//     stepsList.innerHTML += `<li>${step4}</li>`;
//     return obtainInstruction("mashedPotatoes", 4);
//   })
//   .then((step5) => {
//     stepsList.innerHTML += `<li>${step5}</li>`;
//     return obtainInstruction("mashedPotatoes", 5);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     stepsList.innerHTML += `<li>'Mashed potatoes are ready!'</li>`;
//     mashedPotatoesImg.removeAttribute("hidden");
//   });

//Iteration 1 - using async/await
const stepsMashedPotatoes = document.querySelector("#mashedPotatoes");
const mashedPotatoesImg = document.querySelector("#mashedPotatoesImg");

const makeMashedPotatoes = async function makeMashedPotatoes() {
  try {
    const firstStep = await obtainInstruction("mashedPotatoes", 0);
    stepsMashedPotatoes.innerHTML += `<li>${firstStep}</li>`;

    const secondStep = await obtainInstruction("mashedPotatoes", 1);
    stepsMashedPotatoes.innerHTML += `<li>${secondStep}</li>`;

    const thirdStep = await obtainInstruction("mashedPotatoes", 2);
    stepsMashedPotatoes.innerHTML += `<li>${thirdStep}</li>`;

    const fouthStep = await obtainInstruction("mashedPotatoes", 3);
    stepsMashedPotatoes.innerHTML += `<li>${fouthStep}</li>`;

    const fifthStep = await obtainInstruction("mashedPotatoes", 4);
    stepsMashedPotatoes.innerHTML += `<li>${fifthStep}</li>`;

    stepsMashedPotatoes.innerHTML += `<li>Mashed Potatoes is ready!</li>`;
    mashedPotatoesImg.removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
};

makeMashedPotatoes();

// // Iteration 2 - using promises
// const stepsListSteak = document.querySelector("#steak");

// obtainInstruction("steak", 0)
//   .then((steakFirstStep) => {
//     stepsListSteak.innerHTML += `<li>${steakFirstStep}</li>`;
//     return obtainInstruction("steak", 1);
//   })
//   .then((steakSecondStep) => {
//     stepsListSteak.innerHTML += `<li>${steakSecondStep}</li>`;
//     return obtainInstruction("steak", 2);
//   })
//   .then((steakThirdStep) => {
//     stepsListSteak.innerHTML += `<li>${steakThirdStep}</li>`;
//     return obtainInstruction("steak", 3);
//   })
//   .then((steakFourthStep) => {
//     stepsListSteak.innerHTML += `<li>${steakFourthStep}</li>`;
//     return obtainInstruction("steak", 4);
//   })
//   .then((steakFifthStep) => {
//     stepsListSteak.innerHTML += `<li>${steakFifthStep}</li>`;
//     return obtainInstruction("steak", 5);
//   })
//   .then((steakSixthStep) => {
//     stepsListSteak.innerHTML += `<li>${steakSixthStep}</li>`;
//     return obtainInstruction("steak", 6);
//   })
//   .then((steakSeventhStep) => {
//     stepsListSteak.innerHTML += `<li>${steakSeventhStep}</li>`;
//     return obtainInstruction("steak", 7);
//   })
//   .then((steakEighthStep) => {
//     stepsListSteak.innerHTML += `<li>${steakEighthStep}</li>`;
//     stepsListSteak.innerHTML += `<li>Steak is ready!</li>`;
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     document.querySelector("#steakImg").removeAttribute("hidden");
//   });

// Iteration 2 - async/await
const stepsListSteak = document.querySelector("#steak");

const makeSteak = async () => {
  try {
    const stepOne = await obtainInstruction("steak", 0);
    stepsListSteak.innerHTML += `<li>${stepOne}</li>`;
    const stepTwo = await obtainInstruction("steak", 1);
    stepsListSteak.innerHTML += `<li>${stepTwo}</li>`;
    const stepThre = await obtainInstruction("steak", 2);
    stepsListSteak.innerHTML += `<li>${stepThre}</li>`;
    const stepFour = await obtainInstruction("steak", 3);
    stepsListSteak.innerHTML += `<li>${stepFour}</li>`;
    const stepFive = await obtainInstruction("steak", 4);
    stepsListSteak.innerHTML += `<li>${stepFive}</li>`;
    const stepSix = await obtainInstruction("steak", 5);
    stepsListSteak.innerHTML += `<li>${stepSix}</li>`;
    const stepSeven = await obtainInstruction("steak", 6);
    stepsListSteak.innerHTML += `<li>${stepSeven}</li>`;
    const stepEight = await obtainInstruction("steak", 7);
    stepsListSteak.innerHTML += `<li>${stepEight}</li>`;
    stepsListSteak.innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
};

makeSteak();

// Iteration 3 using async/await
const stepsListBrusselsSprout = document.querySelector("#brusselsSprouts");

const makeBrusselsSprouts = async () => {
  try {
    const firstStep = await obtainInstruction("brusselsSprouts", 0);
    stepsListBrusselsSprout.innerHTML += `<li>${firstStep}</li>`;
    const secondStep = await obtainInstruction("brusselsSprouts", 1);
    stepsListBrusselsSprout.innerHTML += `<li>${secondStep}</li>`;
    const thirdStep = await obtainInstruction("brusselsSprouts", 2);
    stepsListBrusselsSprout.innerHTML += `<li>${thirdStep}</li>`;
    const fourthStep = await obtainInstruction("brusselsSprouts", 3);
    stepsListBrusselsSprout.innerHTML += `<li>${fourthStep}</li>`;
    const fifithStep = await obtainInstruction("brusselsSprouts", 4);
    stepsListBrusselsSprout.innerHTML += `<li>${fifithStep}</li>`;
    const sixthStep = await obtainInstruction("brusselsSprouts", 5);
    stepsListBrusselsSprout.innerHTML += `<li>${sixthStep}</li>`;
    const seventhStep = await obtainInstruction("brusselsSprouts", 6);
    stepsListBrusselsSprout.innerHTML += `<li>${seventhStep}</li>`;
    const eighthStep = await obtainInstruction("brusselsSprouts", 7);
    stepsListBrusselsSprout.innerHTML += `<li>${eighthStep}</li>`;
    stepsListBrusselsSprout.innerHTML += `<li>Brussels Sprout is ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
};

makeBrusselsSprouts();

// Bonus 2 - Promise all
const stepsListBroccoli = document.querySelector("#broccoli");

const stepsPromise = [];

broccoli.forEach((step, index) =>
  stepsPromise.push(obtainInstruction("broccoli", index))
);

Promise.all(stepsPromise)
  .then((step) => {
    step.forEach((step) => {
      stepsListBroccoli.innerHTML += `<li>${step}</li>`;
    });
    stepsListBroccoli.innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

makeBroccoli();
