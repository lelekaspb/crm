const tableViewController = (function (modelCtrl) {
  const DOMStrings = {
    tableBody: "#apps-container",
    topBtnGroup: "#top-btn-group",
    filterForm: "#filter-form",
    selectCourse: "#inputGroupSelect01",
    leftBtnGroup: "#left-btn-group",
    template: "#application-template",
    tableID: ".table-id",
    tableDate: ".table-date",
    tableProduct: ".table-product",
    tableName: ".table-name",
    tableEmail: ".table-email",
    tablePhone: ".table-phone",
    tableBadgeDiv: ".table-badge > div",
    tableEditLink: ".table-edit > a",
  };

  function createApp(item) {
    const parentElement = document.querySelector(DOMStrings.tableBody);
    const formattedDate = modelCtrl.formatDate("short", item.date);

    const html = ` <tr>
                      <th scope="row">${item.id}</th>
                      <td>${formattedDate}</td>
                      <td>${item.product.display}</td>
                      <td>${item.name}</td>
                      <td>${item.email}</td>
                      <td>${item.phone}</td>
                      <td>
                        <div class="badge badge-pill ${item.status.badgeClass}">${item.status.display}</div>
                      </td>
                      <td>
                        <a href="03-crm-edit-bid.html?id=${item.id}">Edit</a>
                      </td>
                    </tr> `;

    parentElement.insertAdjacentHTML("beforeend", html);
  }

  function renderApplications(applications) {
    document.querySelector(DOMStrings.tableBody).innerHTML = "";
    applications.forEach(function (item) {
      createApp(item);
    });
  }

  function getSelectValue() {
    return document.querySelector(DOMStrings.selectCourse).value;
  }

  function changeActiveClass(status) {
    if (
      document.querySelector(DOMStrings.leftBtnGroup).querySelector(".active")
    ) {
      document.querySelectorAll(".active").forEach(function (item) {
        item.classList.remove("active");
      });
    }

    document
      .querySelectorAll(`[data-status='${status}']`)
      .forEach(function (item) {
        item.classList.add("active");
      });
  }

  return {
    getDOMStrings: function () {
      return DOMStrings;
    },
    renderApplications: renderApplications,
    getSelectValue: getSelectValue,
    changeActiveClass: changeActiveClass,
  };
})(modelController);
