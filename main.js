// spinボタンをおすとパネルが動き始める
const spinBtn = document.getElementById('spin');
const panel = document.getElementsByClassName('panel');

spinBtn.addEventListener('click' , () => {
  setInterval(() => {
    let panelImg = panel.getAttribute('src');
    console.log(panel);
  },1000)
});

// valueを取得したい


// stopボタンを押すとパネルがストップする
const stopBtn = document.getElementsByClassName('stop');
stopBtn.addEventListener('click' , () => {
  const stopN = panel.value;
  let panelNumber = this.stopN;


});
// getElementsByClassName()メソッドが返す値は配列だと思っていたら、実は違った！
// getElementsByClassName()は、配列に似ていますが実際には配列ではないHTMLcollectionオブジェクトを返します。
// 戻り値	elements	存在する場合は1個以上のHTMLCollectionを返し、存在しない場合は0個のHTMLCollectionを返す
