import Dog from './dog';
import showVersion from './version';
import Counter from './counter';
import { updateMeter, updateResetButton } from './ui';

const tweetURL = 'https://twitter.com/intent/tweet';
const scoreURL = '/dog/score.php';

const counter = new Counter();

// 伸ばすをクリック
$('#extend').click(() => {
  counter.add();
});

// つぶやくをクリック
$('#twitter').click(() => {
  const queryObj = {
    text: `すっぱいぬ🐶を${counter.count}回伸ばしました！ https://hibikine.me/dog/ #のびるすっぱいぬ`
  };
  const query = $.param(paramObj);
  const url = `${tweetURL}?${query}`;
  window.open(url, '_blank');
});

// すっぱりセットをクリック
$('#reset').click(() => {
  const action = scoreURL;
  const data = {
    score: counter.count,
  };
  // スコア送信
  $.post(action, data, (result) => {
    showRanking(result);
  }, 'json');

  counter.reset();
  gtag('event', 'send_rank');
});

counter.addEventListener(updateMeter);
counter.addEventListener(updateResetButton);
showVersion();

const dog = new Dog();
function mainLoop() {
  dog.updateDog(counter.count);
  dog.drawDog();
  window.requestAnimationFrame(mainLoop);
}
mainLoop();
