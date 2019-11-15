requirePlugin('cocos');
const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');

function main () {
  const text = `当前 Cocos Creator 引擎版本: ${cc.ENGINE_VERSION}`;
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px serif';
  ctx.fillText(text, 15, 200);
}

main();
