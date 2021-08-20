const mainJS = (function (modelCtrl) {
  function renderLeftBadges(containerSelector) {
    const statuses = modelCtrl.calculateStatuses();

    const container = document.querySelector(containerSelector);
    const links = Array.from(container.querySelectorAll("[data-status]"));

    links.forEach(function (link) {
      const badge = link.querySelector(".badge");
      if (badge) {
        if (statuses[link.dataset.status] > 0) {
          badge.textContent = statuses[link.dataset.status];
        } else {
          badge.textContent = "";
        }
      }
    });
  }

  return {
    renderLeftBadges: renderLeftBadges,
  };
})(modelController);
