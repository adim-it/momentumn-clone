const searchForm = document.getElementById("search-form");
const searchInput = searchForm.querySelector("input");
const GOOGLE_SEARCH_URL = "https://www.google.com/search?q=";

searchForm.addEventListener("submit", submitLink);

function submitLink(event) {
    event.preventDefault();
    
    const keyword = searchInput.value;
    const url = GOOGLE_SEARCH_URL + keyword;
    window.open(url, "newWindow");

    searchInput.value = "";

}


