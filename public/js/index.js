const tab = document.querySelector('.tab-open');
const update = document.querySelector('.update-open');
const tabClose = document.querySelector('.tab-close');
const updateClose = document.querySelector('.update-close');
const UserTab = document.querySelector('.user-container');
const newUSerTab = document.querySelector('.new-user-container');
const updateUSerTab = document.querySelector('.update-user-container');

tab.addEventListener('click', () => {
    UserTab.classList.add('hide')
    newUSerTab.classList.remove('hide')
    newUSerTab.classList.add('show')
    console.log(newUSerTab)
    console.log(UserTab)
})

update.addEventListener('click', () => {
    UserTab.classList.add('hide')
    updateUSerTab.classList.remove('hide')
    updateUSerTab.classList.add('show')
    console.log(newUSerTab)
    console.log(UserTab)
})

updateClose.addEventListener('click', () => {
    updateUSerTab.classList.remove('show')
    updateUSerTab.classList.add('hide')
    UserTab.classList.remove('hide')
    UserTab.classList.add('show')
    console.log(newUSerTab)
    console.log(UserTab)
})

tabClose.addEventListener('click', () => {
    newUSerTab.classList.remove('show')
    newUSerTab.classList.add('hide')
    UserTab.classList.remove('hide')
    UserTab.classList.add('show')
    console.log(newUSerTab)
    console.log(UserTab)
})