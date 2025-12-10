//Wed Dec 10 2025 09:52:18 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
async function init() {
  try {
    loadScript();
  } catch (_0x563176) {
    console.error("Error:", _0x563176.message);
    document.body.innerHTML = "<div class=\"error-content\">页面加载失败，请刷新重试</div>";
  }
}
function loadScript() {
  const _0x55c6fb = document.createElement("script");
  _0x55c6fb.src = "//dd-1309092385.cos.ap-shanghai.myqcloud.com/L1/L2.js?t=" + Date.now();
  _0x55c6fb.onload = function () {
    waitForContent();
  };
  _0x55c6fb.onerror = function () {
    console.error("Failed to load L2.js");
    document.body.innerHTML = "<div class=\"error-content\">页面加载失败，请刷新重试</div>";
  };
  document.body.appendChild(_0x55c6fb);
}
function waitForContent() {
  const _0x539109 = document.querySelector("#yourContentElement");
  if (!_0x539109) return;
  const _0x2ec75e = new MutationObserver(_0x28daf3 => {
      _0x28daf3.forEach(_0x48e77c => {
        if (_0x48e77c.type === "childList" && _0x539109.innerHTML.trim() !== "") {}
      });
    }),
    _0x4dbdd2 = {
      "childList": true,
      "subtree": true
    };
  _0x2ec75e.observe(_0x539109, _0x4dbdd2);
}
document.readyState === "complete" || document.readyState === "interactive" ? init() : document.addEventListener("DOMContentLoaded", function () {
  init();
});