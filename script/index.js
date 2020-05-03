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
  try {
    audioEl.play();
  } catch (e) {
    console.log(e)
  }
});

avatarEl.addEventListener('mouseleave', () => {
  try {
    audioEl.pause();
  } catch (e) {
    console.log(e)
  }
});