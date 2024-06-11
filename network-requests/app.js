
// let response = await fetch('https://dummy.restapiexample.com/api/v1/employees')
// if (response.ok) {
//   let json = await response.json()
//   console.log(json)
// } else {
//   alert("HTTP error: " + response.status);
// }

async function getProducts() {
  try {
    let data = await fetch('https://fakestoreapi.com/products');
    if (data.ok) {
      let json = await data.json();
      console.log(json);
    } else {
    console.log("fetch error" + err.message)
}
  } catch (err) {
    console.log("fetch error" + err.message)
  }
}


getProducts();


// get github commits

async function getGithubCommits() {
  let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits");
  if (response.ok) {
    let data = await response.json();
    displayCommits(data)
  } else {
    console.log('HTTP error: ' + response.status);
  }
}

function displayCommits(data){
  const tableBody = document.getElementById("displayTable").getElementsByTagName('tbody')[0];
  data.forEach(item => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    cell1.textContent = item.author.login;
  });
}

getGithubCommits();