const backButton = document.getElementById("back-button");

backButton.addEventListener("click", function () {
  history.back();
});

const copyDestyleButton = document.getElementById("copy-destyle-button");
const destyleCdnCode = document.getElementById("destyle-cdn-code");
const copyStatus = document.getElementById("copy-status");

if (copyDestyleButton && destyleCdnCode && copyStatus) {
  copyDestyleButton.addEventListener("click", function () {
    if (!navigator.clipboard) {
      copyStatus.textContent = "このブラウザではコピーできませんでした";
      return;
    }

    navigator.clipboard.writeText(destyleCdnCode.textContent)
      .then(function () {
        copyStatus.textContent = "コピーしました";
      })
      .catch(function () {
        copyStatus.textContent = "コピーできませんでした";
      });
  });
}
