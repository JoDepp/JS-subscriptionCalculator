//
let subTypeElement = document.querySelector("#subscription");
//select elelemt for Duration list
let subDurationElement = document.querySelector("#months");
//target result class which the subscription cost will appear
let result = document.querySelector(".result");
//default value for subscription drop-down list
let subType = "basic";
//default valuefor the duration dropdown list
let subDuration = 1;

//create change event listeners
subTypeElement.addEventListener("change", function (e) {
  //reassign the value of subType to the value of target, the target of the event is the option element
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  //reassign the value of subType to the value of target, the target of the event is the option element
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});

//Use a function to calculate the cost.
let updateSubscriptionDiv = function () {
  let monthlyCost = 5; //cost of monthly plan
  if (subType === "standard") {
    monthlyCost = 7; //cost of standard plan
  } else if (subType === "premium") {
    monthlyCost = 10; //cost of premium plan
  }

  //total the month clost of user
  let total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};

//Lastly call the updateSubscriptionDiv() function to update the DOM, it needs to go into each event handler//
