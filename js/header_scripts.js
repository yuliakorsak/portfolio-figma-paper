/* Поисковая строка */
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


/* Бургер-меню */
const openMenuBtn = document.querySelector('.nav_open-list');
const closeMenuBtn = document.querySelector('.nav_close-list');
const menu = document.querySelector('.nav_text-block');

function openMenu() {
  menu.style.display = 'flex';
  openMenuBtn.style.display = 'none';
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  menu.style.display = null;
  openMenuBtn.style.display = null;
  document.body.classList.remove('no-scroll');
}