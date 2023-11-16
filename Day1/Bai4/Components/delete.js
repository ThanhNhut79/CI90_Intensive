document.querySelector("#btnDeleteReplace").onclick = function (e) {
  e.preventDefault();
  let arrPhoneBookReplace = [];
  const uniquePhoneBook = phoneBooks.filter((item) => {
    const isDouplicate = arrPhoneBookReplace.includes(item.userNumber);
    if (!isDouplicate) {
      arrPhoneBookReplace.push(item.userNumber);
      return true;
    }
    return false;
  });
  renderListPhoneBook(uniquePhoneBook);
};
