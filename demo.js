hljs.highlightBlock(document.querySelector(".static-sample-code"));

const runCodePenButton = document.querySelector('.run-codepen');

runCodePenButton.addEventListener('click', () => {
  window.__CPEmbed(".codepen-i-ex");
  runCodePenButton.classList.add('hidden');
});
