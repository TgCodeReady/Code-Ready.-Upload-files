document.addEventListener("DOMContentLoaded", () => {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertBtn = document.getElementById("convertBtn");
  const amount = document.getElementById("amount");
  const result = document.getElementById("result");
  const loader = document.getElementById("loader");

  // Fetch currency data and populate select options
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data.rates);
      currencies.forEach((currency) => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);
      });
    });

  // Convert currency
  convertBtn.addEventListener("click", () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = amount.value;

    loader.style.display = "block";
    result.style.display = "none";

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[to];
        const convertedAmount = (amountValue * rate).toFixed(2);

        setTimeout(() => {
          loader.style.display = "none";
          result.textContent = `${amountValue} ${from} = ${convertedAmount} ${to}`;
          result.style.display = "block";
        }, 1000);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        loader.style.display = "none";
        result.textContent = "Error fetching data";
        result.style.display = "block";
      });
  });
});
