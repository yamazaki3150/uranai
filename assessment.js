
'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultArea = document.getElementById('result-area');

// 運勢のデータ
const fortunes = [
  {
    name: '大吉 🌟',
    message: '今日は最高の1日になりそう！新しいことに挑戦してみよう！'
  },
  {
    name: '中吉 🌸',
    message: '落ち着いて行動すると良いことがありそう！'
  },
  {
    name: '小吉 🍀',
    message: '小さな幸せが見つかる日。周りの人に優しくしてみよう！'
  },
  {
    name: '吉 ☀️',
    message: 'いつも通り過ごすことで良い結果につながりそう！'
  },
  {
    name: '末吉 🌙',
    message: '焦らずゆっくり進もう。努力が実を結ぶ日になりそう！'
  },
  {
    name: '超大吉 💖',
    message: 'ラッキーな出来事が起こる予感！笑顔を忘れずに！'
  }
];

// ラッキーカラー
const colors = [
  'ピンク 🌷',
  '水色 🩵',
  '紫 💜',
  '黄色 💛',
  '緑 💚',
  '白 🤍'
];

// ラッキーアイテム
const items = [
  'お気に入りのペン',
  'スマートフォン',
  'ハンカチ',
  '腕時計',
  'お気に入りの本',
  'イヤホン'
];

// 診断ボタンを押したときの処理
assessmentButton.addEventListener('click', () => {
  const userName = userNameInput.value.trim();

  // 名前が入力されていない場合
  if (userName.length === 0) {
    resultArea.innerText = '名前を入力してください！';
    return;
  }

  // ランダムに結果を選ぶ
  const fortune = fortunes[
    Math.floor(Math.random() * fortunes.length)
  ];

  const color = colors[
    Math.floor(Math.random() * colors.length)
  ];

  const item = items[
    Math.floor(Math.random() * items.length)
  ];

  // 診断結果を表示する
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
});

// Enterキーでも占えるようにする
userNameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    assessmentButton.click();
  }
});
