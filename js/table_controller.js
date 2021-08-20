const tableController = (function (modelCtrl, uiCtrl, mainJS) {
  const DOM = uiCtrl.getDOMStrings();
  const applications = modelCtrl.applications;

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");

  function setupEventListeners() {
    document
      .querySelector(DOM.topBtnGroup)
      .addEventListener("click", filterStatus);
    document
      .querySelector(DOM.leftBtnGroup)
      .addEventListener("click", filterStatus);
    document
      .querySelector(DOM.filterForm)
      .addEventListener("change", filterProduct);
  }

  function filterStatus(e) {
    const filterObj = modelCtrl.changeFilterObj(
      "status",
      e.target.dataset.status
    );
    filter(filterObj);
    uiCtrl.changeActiveClass(filterObj.status);
  }

  function filterProduct() {
    const filterObj = modelCtrl.changeFilterObj(
      "product",
      uiCtrl.getSelectValue()
    );
    filter(filterObj);
  }

  function setupAppsToRender() {
    if (status) {
      const filterObj = modelCtrl.changeFilterObj("status", status);
      filter(filterObj);
      uiCtrl.changeActiveClass(filterObj.status);
    } else {
      renderApplications();
    }
  }

  function filter(filterObj) {
    const filtered = filterApplications(filterObj);
    uiCtrl.renderApplications(filtered);
    mainJS.renderLeftBadges(DOM.leftBtnGroup);
  }

  function filterApplications(filterObj) {
    let filtered = applications;

    if (filterObj.status !== "all") {
      filtered = filtered.filter(
        (element) => element.status.attribute === filterObj.status
      );
    }

    if (filterObj.product !== "all") {
      filtered = filtered.filter(
        (element) => element.product.name === filterObj.product
      );
    }

    return filtered;
  }

  function renderApplications() {
    uiCtrl.renderApplications(applications);
  }

  return {
    init: function () {
      console.log("App started!");
      if (applications) {
        setupEventListeners();
        setupAppsToRender();
        mainJS.renderLeftBadges(DOM.leftBtnGroup);
      }
    },
  };
})(modelController, tableViewController, mainJS);

tableController.init();
