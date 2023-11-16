document.addEventListener("DOMContentLoaded", function () {
  savePhoneBook();
  getPhoneBook();
});
// lưu danh bạ ở storage
function savePhoneBook() {
  const arrPhoneBook = JSON.stringify(phoneBooks);
  localStorage.setItem("mangDanhBa", arrPhoneBook);
}
// get danh bạ từ localStorage
function getPhoneBook() {
  if (localStorage.getItem("mangDanhBa")) {
    const _arrPhoneBook = localStorage.getItem("mangDanhBa");
    arrPhoneBook = JSON.parse(_arrPhoneBook);
    renderListPhoneBook(arrPhoneBook);
  }
}
function renderListPhoneBook(arrPhoneBook) {
  let sHTML = "";
  let arrStorage = arrPhoneBook?.sort(function (a, b) {
    if (a.userName < b.userName) return -1;
    if (a.userName > b.userName) return 1;
    return 0;
  });
  for (let index = 0; index < arrStorage.length; index++) {
    const phoneBook = arrStorage[index];
    sHTML += `
      <div class='phone-book-item'>
        <h5>${phoneBook.userName}</h5>
        <p>${phoneBook.userNumber}</p>
      </div>
    `;
  }
  document.querySelector("#phone-book-body").innerHTML = sHTML;
}
