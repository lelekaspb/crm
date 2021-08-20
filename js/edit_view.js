const editViewController = (function (modelCtrl) {
  const DOMStrings = {
    btnGroup: "#btn-group",
    saveChanges: "#save-changes",
    delete: "#delete",
    selectStatus: "#inputGroupSelect01",
    phone: "#phone",
    email: "#email",
    name: "#name",
    selectProduct: "#inputGroupSelect02",
    date: "#date",
    id: "#id > span",
  };

  function displayApplication(application) {
    document.querySelector(DOMStrings.id).textContent = application.id;
    document.querySelector(DOMStrings.date).textContent = modelCtrl.formatDate(
      "long",
      application.date
    );
    document.querySelector(DOMStrings.selectProduct).value =
      application.product.name;
    document.querySelector(DOMStrings.name).value = application.name;
    document.querySelector(DOMStrings.email).value = application.email;
    document.querySelector(DOMStrings.phone).value = application.phone;
    document.querySelector(DOMStrings.selectStatus).value =
      application.status.attribute;
  }

  function getInput() {
    return {
      product: document.querySelector(DOMStrings.selectProduct).value,
      name: document.querySelector(DOMStrings.name).value,
      email: document.querySelector(DOMStrings.email).value,
      phone: document.querySelector(DOMStrings.phone).value,
      status: document.querySelector(DOMStrings.selectStatus).value,
    };
  }

  return {
    getDOMStrings: function () {
      return DOMStrings;
    },
    displayApplication: displayApplication,
    getInput: getInput,
  };
})(modelController);
