const versions = {
  '0.4.1': '見た目を修正',
  '0.4.0': '関わってる人の名前を出した',
  '0.3.1': '午後にデイリーランキングと毎時ランキングがリセットされてしまうバグを修正',
  '0.3.0': 'デイリーランキングと毎時ランキングが出るようになった',
  '0.2.0': '2018年度版🐶豪華犬',
  '0.1.1': 'あなたのランクが出るようになった',
  '0.1.0': 'ランキング機能追加',
  '0.0.9': '絵文字さらにましまし',
  '0.0.8': '実績が解除されないバグを修正',
  '0.0.7': '絵文字追加',
  '0.0.6': 'リファクタ',
  '0.0.5': 'タグが使われてたので修正',
  '0.0.4': 'タグがふえた',
  '0.0.3': 'すっぱTwitterのバグを直した',
  '0.0.2': 'Twitterカード対応',
  '0.0.1': 'バージョニング',
};

export default function showVersion($titleVersion, $versionLog) {
  versionText = Object.keys(versions)[0] || "";
  $titleVersion.text(`v${versionText}`);

  Object.entries(versions).reduce(($version, [key, value]) => {
    $version.append($(`<dt>v${key}:</dt>`));
    $version.append($(`<dd>${value}</dd>`));
    return $version;
  }, $versionLog);
}
