flatpickr("#date-input", {});

function calculateAge() {
  console.log("function called");

  let inputdate = document.getElementById("date-input").value;
  console.log(inputdate.getDate);

  if(inputdate){
    let formatted = new Date(inputdate)
    console.log(formatted);
    let birthYear = formatted.getFullYear();
    // alert(birthYear);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    // alert(age);
    let resultDisplay = document.getElementById('result');
    resultDisplay.innerText  = `Your age is ${age} years`; 
  }
  else{
    alert('please enter your DOB');
  }
}
