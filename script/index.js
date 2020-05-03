const langEngEl = document.querySelector('.lang_en');
const langRuEl = document.querySelector('.lang_ru');
const avatarEl = document.querySelector('.avatar');

langEngEl.addEventListener('click', (e) => {
  avatarEl.setAttribute('data', './assets/images/avatar_eng.png');
});

langRuEl.addEventListener('click', (e) => {
  avatarEl.setAttribute('data', './assets/images/avatar_soviet.png');
});