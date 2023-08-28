

const emailInput = document.querySelector('#text-email');
const searchBar = document.querySelector('#search-bar');

console.log(emailInput);
console.log(searchBar);

emailInput.addEventListener('focus', () => {
    searchBar.classList.add('shadow');
});

emailInput.addEventListener('blur', () => {
    searchBar.classList.remove('shadow');
})
