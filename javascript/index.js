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
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed Potato ready!</li>`;
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((steakFirstStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakFirstStep}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((steakSecondStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakSecondStep}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((steakThirdStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakThirdStep}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((steakFourthStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakFourthStep}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((steakFifthStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakFifthStep}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((steakSixthStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakSixthStep}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((steakSeventhStep) => {
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>${steakSeventhStep}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((steakEigthStep) => {
    document.querySelector("#steak").innerHTML += `<li>${steakEigthStep}</li>`;
    // test for the error
    //return obtainInstruction("steak", 8);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBrusselsSprouts() {
  try {
    const brusselsSproutFirstStep = await obtainInstruction(
      "brusselsSprouts",
      0
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutFirstStep}</li>`;

    const brusselsSproutSecondStep = await obtainInstruction(
      "brusselsSprouts",
      1
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutSecondStep}</li>`;

    const brusselsSproutThirdStep = await obtainInstruction(
      "brusselsSprouts",
      2
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutThirdStep}</li>`;

    const brusselsSproutFourthStep = await obtainInstruction(
      "brusselsSprouts",
      3
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutFourthStep}</li>`;

    const brusselsSproutFifthStep = await obtainInstruction(
      "brusselsSprouts",
      4
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutFifthStep}</li>`;

    const brusselsSproutSixthStep = await obtainInstruction(
      "brusselsSprouts",
      5
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutSixthStep}</li>`;

    const brusselsSproutSeventhStep = await obtainInstruction(
      "brusselsSprouts",
      6
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutSeventhStep}</li>`;

    const brusselsSproutEigthStep = await obtainInstruction(
      "brusselsSprouts",
      7
    );
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${brusselsSproutEigthStep}</li>`;

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels Sprout is ready!</li>`;
}

makeBrusselsSprouts();

// Bonus 2 - Promise all
// ...

async function makeBroccoli() {
  const stepsPromises = [];

  broccoli.forEach((steps, currentIndex) => {
    stepsPromises.push(obtainInstruction("broccoli", currentIndex));

    // console.log("This is steps:", steps);
    // console.log("This is the array push:", stepsPromises[currentIndex]);
  });

  // Pizza Array = [step1, step2 , blala] <= stepsPromises Array [Promise("fulfilled", "value: step1"),Promise2("fulfilled", "value: step1") ]

  // Promise.all([obtainInstruction("steak", 0), obtainInstruction("broccoli", 1)])
  //   .then((values) => {
  //     console.log(values);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const broccoliValueArray = await Promise.all(stepsPromises);
  broccoliValueArray.forEach((steps) => {
    document.querySelector("#broccoli").innerHTML += `<li>${steps}</li>`;
  });
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();
