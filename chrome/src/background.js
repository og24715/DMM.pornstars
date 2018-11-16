const openOrFocusOptionsPage = () => {
  const favoritesUrl = chrome.runtime.getURL('favorites.html');

  chrome.tabs.query({ url: favoritesUrl }, (tabs) => {
    if (tabs.length) {
      chrome.tabs.update(tabs[0].id, { active: true });
    } else {
      chrome.tabs.create({ url: favoritesUrl });
    }
  });
};

chrome.browserAction.onClicked.addListener(() => {
  openOrFocusOptionsPage();
});
