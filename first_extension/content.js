chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  document.body.style.backgroundColor = request.color;
});

