import type { Pornstar } from '../types';

export function addPornstar(pornstarData: Pornstar): void {
  chrome.storage.local.get('following', (result: { following?: Pornstar[] }) => {
    const { following = [] } = result;
    const removeAddedPornstar = following.filter((p) => p.id !== pornstarData.id);
    removeAddedPornstar.push(pornstarData);

    chrome.storage.local.set({ following: removeAddedPornstar }, () => {
      console.log('Value is set to', following);
    });
  });
}

export function getPornstars(
  callback: (result: { following?: Pornstar[] }) => void,
): void {
  chrome.storage.local.get('following', callback);
}
