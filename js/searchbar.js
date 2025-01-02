const searchBtn = document.querySelector('.search');
const searchForm = document.getElementById('search_form');
searchBtn.addEventListener('click', showSearch);

function showSearch(e) {
  e.preventDefault();
  searchBtn.classList.add('hidden');
  searchForm.classList.remove('hidden');
}

function hideSearch() {
  searchBtn.classList.remove('hidden');
  searchForm.classList.add('hidden');
}