chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "changeBackgroundColor",
    title: "Change Background Color",
    contexts: ["page"],
  });
});

chrome.contextMenus.create({
  id: "testMenuItem",
  title: "Test Menu Item",
  contexts: ["page"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "changeBackgroundColor" && tab) {
    chrome.storage.local.get("backgroundColor", (data) => {
      const savedColor = data.backgroundColor || "#ffffff";
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { color: savedColor });
      });
    });
  }
});


