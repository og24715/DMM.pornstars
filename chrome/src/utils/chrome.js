export function addPornstar(pornstarData) {
  chrome.storage.local.get('following', ({ following = [] }) => {
    const removeAddedPornstar = following.filter(p => p.id !== pornstarData.id);
    removeAddedPornstar.push(pornstarData);

    chrome.storage.local.set({ following: removeAddedPornstar }, () => {
      console.log('Value is set to', following);
    });
  });
}

export function getPornstars(callback) {
  chrome.storage.local.get('following', callback);
}