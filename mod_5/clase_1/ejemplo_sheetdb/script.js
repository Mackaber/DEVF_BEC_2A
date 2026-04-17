const product_form = document.querySelector("#product_form");
const container = document.querySelector("#container")

const raw = "";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://sheetdb.io/api/v1/vudlx107qfq4j", requestOptions)
  .then((response) => response.text())
  .then((result) =>  {
        container.innerHTML = result;
        console.log(result)
    })
  .catch((error) => console.error(error));

product_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "ID": event.target["ID"].value,
    "Product": event.target["Product"].value,
    "Price": event.target["Price"].value,
    "Qty": event.target["Qty"].value
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("https://sheetdb.io/api/v1/vudlx107qfq4j", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})