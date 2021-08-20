const formController = (function (modelCtrl, uiCtrl) {
  function setupEventListeners() {
    const DOM = uiCtrl.getDOMStrings();
    document
      .querySelector(DOM.form)
      .addEventListener("submit", formCtrlAddItem);
  }

  function formCtrlAddItem(event) {
    event.preventDefault();
    //console.log("fired");

    const input = uiCtrl.getInput();
    console.log(input);

    modelCtrl.addItem(input.name, input.phone, input.email, input.product);
    //modelCtrl.test();
  }

  return {
    init: function () {
      console.log("App started!");
      setupEventListeners();
    },
  };
})(modelController, formViewController);

formController.init();
