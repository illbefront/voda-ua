const defaultOrderBlocks = document.getElementsByClassName(
  "order-block default",
);
const successOrderBlocks = document.getElementsByClassName(
  "order-block success",
);
const orderDialog = document.getElementsByClassName("order-dialog")[0];
const openDialogButtons = document.getElementsByClassName("open-dialog-button");
const orderButtons = document.getElementsByClassName("order-action-button");

const handleOrder = () => {
  Array.from(defaultOrderBlocks).forEach(
    (block) => (block.style.display = "none"),
  );
  Array.from(successOrderBlocks).forEach(
    (block) => (block.style.display = "flex"),
  );

  setTimeout(() => {
    Array.from(defaultOrderBlocks).forEach(
      (block) => (block.style.display = "flex"),
    );
    Array.from(successOrderBlocks).forEach(
      (block) => (block.style.display = "none"),
    );
  }, 2000);
};

const handleDialogOpen = () => {
  orderDialog.setAttribute("open", "true");
};

Array.from(openDialogButtons).forEach((button) =>
  button.addEventListener("click", handleDialogOpen),
);
Array.from(orderButtons).forEach((button) =>
  button.addEventListener("click", handleOrder),
);
