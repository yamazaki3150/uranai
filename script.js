
'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultArea = document.getElementById('result-area');

const fortunes = [
  {
    name: '大吉 🌟',
    message: '今日は最高の1日！新しいことに挑戦してみよう！'
  },
  {
    name: '中吉 🌸',
    message: '落ち着いて行動すると良いことがありそう！'
  },
  {
    name: '小吉 🍀',
    message: '小さな幸せが見つかる日になりそう！'
  },
  {
    name: '吉 ☀️',
    message: 'いつも通り過ごすことで良い結果につながりそう！'
  },
  {
    name: '末吉 🌙',
    message: '焦らずゆっくり進んでみよう！'
  },
  {
    name: '超大吉 💖',
    message: 'ラッキーな出来事が起こる予感！'
  }
];

const colors = [
  'ピンク 🌷',
  '水色 🩵',
  '紫 💜',
  '黄色 💛',
  '緑 💚',
  '白 🤍'
];

const items = [
  'お気に入りのペン',
  'スマートフォン',
  'ハンカチ',
  '腕時計',
  'お気に入りの本',
  'イヤホン'
];

function randomChoice(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function showResult() {
  const userName = userNameInput.value.trim();

  if (userName === '') {
    resultArea.innerText = '名前を入力してください！';
    resultArea.classList.add('show');
    return;
  }

  const fortune = randomChoice(fortunes);
  const color = randomChoice(colors);
  const item = randomChoice(items);

  resultArea.innerHTML = '';

  const heading = document.createElement('h2');
  heading.innerText = '🔮 診断結果 🔮';

  const nameText = document.createElement('p');
  nameText.innerText = userName + 'さんの今日の運勢は…';

  const fortuneText = document.createElement('h2');
  fortuneText.innerText = fortune.name;

  const messageText = document.createElement('p');
  messageText.innerText = fortune.message;

  const colorText = document.createElement('p');
  colorText.innerText = '🎨 ラッキーカラー：' + color;

  const itemText = document.createElement('p');
  itemText.innerText = '🎁 ラッキーアイテム：' + item;

  resultArea.appendChild(heading);
  resultArea.appendChild(nameText);
  resultArea.appendChild(fortuneText);
  resultArea.appendChild(messageText);
  resultArea.appendChild(colorText);
  resultArea.appendChild(itemText);

  resultArea.classList.add('show');
}

assessmentButton.addEventListener('click', showResult);

userNameInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    showResult();
  }
});
