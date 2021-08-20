const ExampleItem = function (name, phone, email, product) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.product = product;
};

const testData = [
  new ExampleItem(
    "John Doe",
    "(212) 509-6995",
    "johndoe@gmail.com",
    "course_html"
  ),
  new ExampleItem(
    "Jane Doe",
    "(212) 555-7056",
    "janedoe@gmail.com",
    "course_js"
  ),
  new ExampleItem(
    "Mary Smith",
    "(215) 786-6555",
    "marysmith@gmail.com",
    "course_vue"
  ),
  new ExampleItem(
    "Toby Jacobs",
    "(555) 112-4562",
    "tobyjacobs@gmail.com",
    "course_php"
  ),
  new ExampleItem(
    "Santa Clause",
    "(312) 111-5555",
    "santa@santa.us",
    "course_wordpress"
  ),
  new ExampleItem(
    "Donald Trump",
    "(555) 555-1234",
    "trump@gov.com",
    "course_html"
  ),
  new ExampleItem(
    "Donald Duck",
    "(607) 234-7561",
    "donnyduck@disney.com",
    "course_js"
  ),
  new ExampleItem(
    "Peter Parker",
    "(513) 654-1678",
    "spiderman@marvel.com",
    "course_vue"
  ),
  new ExampleItem(
    "Rachel Greene",
    "(347) 414-3443",
    "rachel@centralperk.ny",
    "course_php"
  ),
  new ExampleItem(
    "Monica Geller",
    "(347) 414-3443",
    "mon@alessandros.com",
    "course_wordpress"
  ),
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function insertInUI() {
  const random = getRandomInt(testData.length);
  const randomItem = testData[random];

  document.querySelector("#input_name").value = randomItem.name;
  document.querySelector("#input_phone").value = randomItem.phone;
  document.querySelector("#input_email").value = randomItem.email;
  document.querySelector("#select_product").value = randomItem.product;
}

insertInUI();
