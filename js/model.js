const modelController = (function () {
  const Application = function (id, name, phone, email, product, status) {
    this.id = id;
    this.date = new Date();
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.product = product;
    this.status = status;
  };

  const reference = {
    status: {
      new: {
        display: "Новая",
        badgeClass: "badge-danger",
        attribute: "new",
      },
      process: {
        display: "В работе",
        badgeClass: "badge-warning",
        attribute: "process",
      },
      completed: {
        display: "Завершена",
        badgeClass: "badge-success",
        attribute: "completed",
      },
      payment: {
        display: "Ожидается оплата",
        badgeClass: "badge-info",
        attribute: "payment",
      },
      canceled: {
        display: "Отказ",
        badgeClass: "badge-dark",
        attribute: "canceled",
      },
      archive: {
        display: "Архив",
        badgeClass: "badge-secondary",
        attribute: "archive",
      },
    },
    product: {
      course_html: {
        display: "Курс по верстке",
        name: "course_html",
      },
      course_js: {
        display: "Курс по JavaScript",
        name: "course_js",
      },
      course_vue: {
        display: "Курс по VUE JS",
        name: "course_vue",
      },
      course_php: {
        display: "Курс по PHP",
        name: "course_php",
      },
      course_wordpress: {
        display: "Курс по WordPress",
        name: "course_wordpress",
      },
    },
  };

  const filter = {
    status: "all",
    product: "all",
  };

  function changeFilterObj(key, value) {
    filter[key] = value;
    return filter;
  }

  // function calculateStatuses() {
  //   const statusesObj = { new: "", process: "", completed: "" };

  //   const statuses = ["new", "process", "completed"];
  //   let toRender;

  //   if (filter.product === "all") {
  //     toRender = applications;
  //   } else {
  //     toRender = applications.filter(
  //       (element) => element.product.name === filter.product
  //     );
  //   }

  //   statuses.forEach(function (item) {
  //     const lengthsItem = toRender.filter(
  //       (element) => element.status.attribute === item
  //     );
  //     statusesObj[item] = lengthsItem.length;
  //   });
  //   return statusesObj;
  // }

  function calculateStatuses() {
    const result = {
      all: applications.length,
    };

    let apps = applications;

    if (filter.product !== "all") {
      apps = apps.filter((element) => element.product.name === filter.product);
    }

    result.all = apps.length;

    Object.keys(reference.status).forEach((status) => {
      result[status] = apps.reduce(
        (sum, item) => (status === item.status.attribute ? sum + 1 : sum),
        0
      );
    });

    return result;
  }

  function addItem(name, phone, email, productN) {
    let ID;
    const productObj = reference.product[productN];
    console.log(applications);

    if (applications.length > 0) {
      ID = applications[applications.length - 1].id + 1;
    } else {
      ID = 1;
    }

    const newItem = new Application(
      ID,
      name,
      phone,
      email,
      productObj,
      reference.status.new
    );
    applications.push(newItem);
    updateLocalStorage();
    window.location.href = "02-crm-all-bids.html";
  }

  // should be saved in localStorage
  const applications = JSON.parse(localStorage.getItem("apps")) || [];

  function updateLocalStorage() {
    localStorage.setItem("apps", JSON.stringify(applications));
  }

  function deleteApplication(app) {
    app.status = reference.status.archive;
    console.log(applications);
    updateLocalStorage();
  }

  function formatDate(form, date) {
    let dateString;
    const d = new Date(date);
    const mm = ("0" + d.getMonth()).slice(-2);
    const dd = ("0" + d.getDate()).slice(-2);
    const yy = d.getFullYear();
    const hh = d.getHours();
    const mn = d.getMinutes();
    const ss = d.getSeconds();
    if (form === "long") {
      dateString = `${yy}-${mm}-${dd} ${hh}:${mn}:${ss}`;
    } else if (form === "short") {
      dateString = `${dd}.${mm}.${yy}`;
    }

    return dateString;
  }

  return {
    applications,
    reference,
    addItem: addItem,
    changeFilterObj: changeFilterObj,
    calculateStatuses: calculateStatuses,
    deleteApplication: deleteApplication,
    updateLocalStorage: updateLocalStorage,
    formatDate: formatDate,
    test: function () {
      console.log(applications);
    },
  };
})();
