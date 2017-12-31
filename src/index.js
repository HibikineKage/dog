import changeName from './names'

let count = 0;
let lastNameIndex = 0;
const $dog = $('#dog');
const $countNum = $('#count-num');
const dogStatus = {
  defaultLength: 10, // 元の長さ
  length: 10, // 現在の長さ
  acceleration: 0, // 尻の加速度
  unit: 20, // px/カウント
  weight: 5, // 重さ(単位適当)
  friction: 0.9, // 摩擦係数
};

function drawDog() {
  // 目指す長さ
  const targetDogLength = dogStatus.defaultLength + count * dogStatus.unit;
  // バネの強さ
  const springForce = targetDogLength - dogStatus.length;
  // 加速度を計算
  dogStatus.acceleration += springForce / dogStatus.weight;
  // 摩擦
  dogStatus.acceleration *= dogStatus.friction;
  // 長さを図る
  dogStatus.length += dogStatus.acceleration;
  // デフォルトの長さより短くならないように
  if (dogStatus.length < dogStatus.defaultLength) {
    dogStatus.length = dogStatus.defaultLength;
    dogStatus.acceleration *= -1;
  }
  $dog.css('width', `${dogStatus.length}px`);
  window.requestAnimationFrame(drawDog);
}

// eslint-disable-next-line no-unused-vars
$('#extend').click(() => {
  updateCount(++count);
});

$('#twitter').click(() => {
  open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`すっぱいぬ🐶を${count}回伸ばしました！ https://hibikine.me/dog/ #のびるすっぱいぬ`)}`, '_blank');
});

$('#form').submit(function() {
  const action = $(this).attr('action');
  const data = {
    score: count
  };
  $.post(action, data, (result) => {
    showRanking(result.ranking, result.lastScore, result.rank);
  }, 'json');
  updateCount(count = 0);
  gtag('event', 'send_rank');
  return false;
});

function updateCount(count) {
  $countNum.html(count);
  const meter = 1 + count / 2;
  $('#meter').html(`${meter}m`);
  $('#reset').prop("disabled", count == 0)
  changeName(meter);
}
// eslint-disable-next-line no-unused-vars
function showRanking(ranking, lastScore, rank) {
  const rankingHeader = $('<h2>すっぱランキング</h2>');
  const rankingList = $('<ol></ol>').append(ranking.map(i => $(`<li>${i}</li>`)));
  const yourRank = $(`<p>あなたのランク: ${rank + 1}位</p>`);

  const rankingWrapper = $('#ranking');
  rankingWrapper.empty();
  rankingWrapper.append(rankingHeader);
  rankingWrapper.append(rankingList);
  rankingWrapper.append(yourRank);
}

drawDog();
