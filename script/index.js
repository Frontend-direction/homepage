const langEngEl = document.querySelector('.lang_en');
const langRuEl = document.querySelector('.lang_ru');
const avatarEl = document.querySelector('.avatar');
const audioEl = document.querySelector('.beeSound');

langEngEl.addEventListener('click', (e) => {
  avatarEl.setAttribute('data', './assets/images/avatar_eng.png');
});

langRuEl.addEventListener('click', (e) => {
  avatarEl.setAttribute('data', './assets/images/avatar_soviet.png');
});


avatarEl.addEventListener('mouseenter', () => {
  audioEl.play();
});

avatarEl.addEventListener('mouseleave', () => {
  audioEl.pause();
});