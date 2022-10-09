let output = document.getElementById("output")
let input = document.getElementById("input")

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
});
function check() {
  if(palindrome()){
    output.textContent = "true"
  } else {
    output.textContent = "false"
  }
  function palindrome() {
    let str = input.value
    str = str.toLowerCase().replace(/[\W_]/g, '')
    console.log(str)
    for(let i = 0; i< str.length/2; i++){
      if (str[i] !== str[str.length-1-i]){
        return false
      }
    }
    return true;
  }
}


