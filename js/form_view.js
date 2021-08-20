const formViewController = (function () {
  const DOMStrings = {
    form: "#application_form",
    inputName: "#input_name",
    inputPhone: "#input_phone",
    inputEmail: "#input_email",
    selectProduct: "#select_product",
  };

  function getInput() {
    return {
      name: document.querySelector(DOMStrings.inputName).value,
      phone: document.querySelector(DOMStrings.inputPhone).value,
      email: document.querySelector(DOMStrings.inputEmail).value,
      product: document.querySelector(DOMStrings.selectProduct).value,
    };
  }

  return {
    getInput: getInput,
    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();
