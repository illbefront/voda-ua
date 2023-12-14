// order block
const orderBlockDefault = document.getElementById("order-block_default");
const orderBlockSuccess = document.getElementById("order-block_success");
const phoneInput = document.getElementById("order-block_phone-input");
const submitButton = document.getElementById("order-block_submit-button");

// dialog
const closeDialogButton = document.getElementById("close-order-dialog-button");
const dialogOrderBlockDefault = document.getElementById(
  "order-dialog_order-block_default",
);
const dialogOrderBlockSuccess = document.getElementById(
  "order-dialog_order-block_success",
);
const orderDialog = document.getElementsByClassName("order-dialog")[0];
const openDialogButtons = document.getElementsByClassName("open-dialog-button");
const dialogPhoneInput = document.getElementById(
  "dialog_order-block_phone-input",
);
const dialogSubmitButton = document.getElementById(
  "dialog_order-block_submit-button",
);

const maskOptions = {
  mask: "+{380} 00 000 00 00",
};
const phoneInputMask = IMask(phoneInput, maskOptions);
const dialogPhoneInputMask = IMask(dialogPhoneInput, maskOptions);

// flags
let originalBodyStyle;

const handleOrder = () => {
  if (
    phoneInputMask.value.replaceAll("+", "").replaceAll(" ", "").length !== 12
  )
    return;

  console.log(phoneInputMask.value);

  orderBlockDefault.style.display = "none";
  orderBlockSuccess.style.display = "flex";

  setTimeout(() => {
    orderBlockDefault.style.display = "flex";
    orderBlockSuccess.style.display = "none";
  }, 2000);
};

const handleDialogOrder = () => {
  if (
    dialogPhoneInputMask.value.replaceAll("+", "").replaceAll(" ", "")
      .length !== 12
  )
    return;

  console.log(dialogPhoneInputMask.value);

  dialogOrderBlockDefault.style.display = "none";
  dialogOrderBlockSuccess.style.display = "flex";

  setTimeout(() => {
    dialogOrderBlockDefault.style.display = "flex";
    dialogOrderBlockSuccess.style.display = "none";
  }, 2000);
};

const handleDialogOpen = () => {
  orderDialog.setAttribute("open", "true");

  originalBodyStyle = window.getComputedStyle(document.body).overflow;
  document.body.style.overflow = "hidden";
};

const handleDialogClose = () => {
  orderDialog.removeAttribute("open");

  document.body.style.overflow = originalBodyStyle || "scroll";
};

Array.from(openDialogButtons).forEach((button) =>
  button.addEventListener("click", handleDialogOpen),
);

closeDialogButton.addEventListener("click", handleDialogClose);
submitButton.addEventListener("click", handleOrder);
dialogSubmitButton.addEventListener("click", handleDialogOrder);
