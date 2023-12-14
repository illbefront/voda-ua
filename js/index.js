const defaultWindow = document.getElementsByClassName("order-block default")[0];
const successWindow = document.getElementsByClassName("order-block success")[0];
const orderButton = document.getElementsByClassName("order-action-button")[0];

const handleOrder = () => {
  defaultWindow.style.display = "none";
  successWindow.style.display = "flex";

  setTimeout(() => {
    defaultWindow.style.display = "flex";
    successWindow.style.display = "none";
  }, 2000);
};

orderButton.addEventListener("click", handleOrder);
