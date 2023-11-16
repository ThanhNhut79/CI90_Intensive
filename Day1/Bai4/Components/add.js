document.querySelector("#phone-book-submit").onclick = function (e) {
  e.preventDefault();
  let userNameInput = document.querySelector("#userName").value;
  let userPhoneInput = document.querySelector("#phoneNumber").value;
  phoneBooks.push({
    id: Math.floor(Math.random() * 100),
    userName: userNameInput,
    userNumber: userPhoneInput,
  });
  renderListPhoneBook(phoneBooks);
  savePhoneBook();
};
