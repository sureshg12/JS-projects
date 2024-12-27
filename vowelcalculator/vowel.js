function checkVowels() {
  console.log("function has been called");

  let input = document.getElementById("text-area").value.trim().toLowerCase();
  console.log(input);
  let count = 0;
  for(let i=0;i<input.length;i++){
    if(input[i]=='a'||input[i]=='e'||input[i]=='i'||input[i]=='o'||input[i]=='u'){
        count++;
    }
  }
  console.log(count);

  let displayResult = document.getElementById('result-para');
  displayResult.innerText = `Total Vowel is ${count}`;
}
