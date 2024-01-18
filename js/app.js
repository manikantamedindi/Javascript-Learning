let syntaxElements = document.getElementsByTagName("code");

// Convert the collection to an array and add classes to each element
Array.from(syntaxElements).forEach((element) => {
  element.classList.add("language-javascript", "line-numbers");
});
