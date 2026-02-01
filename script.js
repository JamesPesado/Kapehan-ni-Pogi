function submitOrder() {
  let name = document.getElementById("name").value;
  let flavor = document.getElementById("flavor").value;
  let size = document.getElementById("size").value;
  let quantity = document.getElementById("quantity").value;

  if (name === "" || flavor === "" || size === "" || quantity === "") {
    alert("Please fill in all required fields!");
    return;
  }

  // Random waiting number
  let waitingNumber = Math.floor(Math.random() * 900) + 100;

  document.getElementById("result").innerHTML = `
    <h3>Order Successful ☕</h3>
    <p>Name: <b>${name}</b></p>
    <p>Your Waiting Number:</p>
    <h1>${waitingNumber}</h1>
    <p>Please wait for your order.</p>
  `;
}
