const apiURL = "https://api.thecatapi.com/v1/images/search?limit=100";
const apiKey =
  "live_w7GAshIqDq7ygWT6Qr2GoAYlijzudgFU6swXLqsmt3WyUGa6yt1QhA6IruE7KuVn";

async function getData() {
  try {
    const response = await fetch(apiURL, { headers: { "x-api-key": apiKey } });
    if (response) {
      const data = await response.json();
      displayData(data);
      console.log(data);
    } else {
      console.log("Api Failure: " + response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

function displayData(data) {
  const tableBody = document.querySelector("#displayData tbody");

  data.forEach((cat) => {
    const row = document.createElement("tr");
    const categoryCell = document.createElement("td");
    categoryCell.innerText = cat.breeds;
    const cell = document.createElement("td");
    const imageCell = document.createElement("td");
    cell.textContent = cat.id;
    const image = document.createElement("img");
    image.src = cat.url;
    imageCell.appendChild(image);
    row.appendChild(categoryCell);
    row.appendChild(cell);
    row.appendChild(imageCell);

    tableBody.appendChild(row);
  });
}

getData();
