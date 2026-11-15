const openOrFocusOptionsPage = (): void => {
  const favoritesUrl = chrome.runtime.getURL('favorites.html');

  chrome.tabs.query({ url: favoritesUrl }, (tabs) => {
    const [tab] = tabs;
    if (tab && tab.id !== undefined) {
      chrome.tabs.update(tab.id, { active: true });
    } else {
      chrome.tabs.create({ url: favoritesUrl });
    }
  });
};

chrome.action.onClicked.addListener(() => {
  openOrFocusOptionsPage();
});
