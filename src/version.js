const versions = {  'v0.3.0': 'デイリーランキングと毎時ランキングが出るようになった',  'v0.2.0': '2018年度版🐶豪華犬',  'v0.1.1': 'あなたのランクが出るようになった',  'v0.1.0': 'ランキング機能追加',  'v0.0.9': '絵文字さらにましまし',  'v0.0.8': '実績が解除されないバグを修正',  'v0.0.7': '絵文字追加',  'v0.0.6': 'リファクタ',  'v0.0.5': 'タグが使われてたので修正',  'v0.0.4': 'タグがふえた',  'v0.0.3': 'すっぱTwitterのバグを直した',  'v0.0.2': 'Twitterカード対応',  'v0.0.1': 'バージョニング',
};

export default function showVersion() {
  $('#title-version').text(Object.keys(versions)[0]);

  Object.entries(versions).reduce(($version, [key, value]) => {
    $version.append($(`<dt>${key}:</dt>`));
    $version.append($(`<dd>${value}</dd>`));
    return $version;
  }, $('#version-log'));
}