export const setItemFromLocalStorage = (
  variable,
  value,
  allowalert,
  alertMessage
) => {
  localStorage.setItem(variable.toString(), value);
  if (allowalert && alertMessage) {
    alert(alertMessage);
  }
};

export const getItemFromLocalStorage = ({ variable, value }) => {
  localStorage.getItem(variable.toString(), value);
};
