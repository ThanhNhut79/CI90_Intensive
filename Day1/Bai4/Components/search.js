document.querySelector("#btnSearch").onclick = function (e) {
  e.preventDefault();
  let keyword = document.querySelector("#keyword").value;
  console.log(keyword);
  keyword = keyword.trim().toLowerCase();
  let arrPhoneBookSearch = [];
  for (let index = 0; index < phoneBooks.length; index++) {
    const phoneBookItem = phoneBooks[index];
    if (
      phoneBookItem.userName
        .trim()
        .toLowerCase()
        .search(keyword.trim().toLowerCase()) !== -1
    ) {
      arrPhoneBookSearch.push(phoneBookItem);
    } else if (keyword === phoneBookItem.userNumber) {
      arrPhoneBookSearch.push(phoneBookItem);
    }
  }
  renderListPhoneBook(arrPhoneBookSearch);
};
