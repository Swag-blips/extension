chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ MENUS: MENUS }, function () {
    console.log("Menu saved to storage");
  });
});
