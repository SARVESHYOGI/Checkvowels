function checkVowels() {
  let text = document.getElementById("inputText").value;
  let vowelcount = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (isVowels(char)) {
      vowelcount++;
    }
  }
  const result = document.getElementById("result");
  //   result.textContent = "total vowels : " + vowelcount;
  result.innerHTML = "total vowels : " + vowelcount;
}
function isVowels(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
