const editController = (function (modelCtrl, uiCtrl, mainJS) {
  const DOM = uiCtrl.getDOMStrings();

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));

  let application = modelCtrl.applications.find((element) => element.id === id);

  function renderApplication() {
    uiCtrl.displayApplication(application);
  }

  function setupEventListeners() {
    document
      .querySelector(DOM.saveChanges)
      .addEventListener("click", saveApplication);
    document
      .querySelector(DOM.delete)
      .addEventListener("click", deleteApplication);
  }

  function saveApplication() {
    const input = uiCtrl.getInput();

    application.product = modelCtrl.reference.product[input.product];
    application.status = modelCtrl.reference.status[input.status];
    application.name = input.name;
    application.phone = input.phone;
    application.email = input.email;
    modelCtrl.updateLocalStorage();
    mainJS.renderLeftBadges(DOM.btnGroup);
  }

  function deleteApplication() {
    modelCtrl.deleteApplication(application);
    mainJS.renderLeftBadges(DOM.btnGroup);
  }

  return {
    init: function () {
      mainJS.renderLeftBadges(DOM.btnGroup);
      renderApplication();
      setupEventListeners();
    },
  };
})(modelController, editViewController, mainJS);

editController.init();
