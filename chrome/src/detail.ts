import { addPornstar } from './utils/chrome';
import type { Pornstar } from './types';

console.log('Running DMM.pornstar');

type PornstarLinkData = Pick<Pornstar, 'type' | 'id' | 'name'>;

function createFollowPornstarButton(data: Pornstar): HTMLButtonElement {
  function handleClick(): void {
    addPornstar(data);
  }

  const followButton = document.createElement('button');
  followButton.type = 'button';
  followButton.innerHTML = 'お気に入り';
  followButton.addEventListener('click', handleClick);

  return followButton;
}

function getPornstarData(link: HTMLAnchorElement): PornstarLinkData | null {
  const regex = /digital\/videoa\/-\/list\/=\/article=(.*)\/id=(\d*)\//;
  const match = regex.exec(link.href);
  if (!match) {
    return null;
  }
  const [, type, id] = match;
  return {
    type,
    id,
    name: link.innerText,
  };
}

const insertFollowButtonBehindPornstarNames = (): void => {
  const performerLinks = document.querySelectorAll<HTMLAnchorElement>('#performer > a');
  const packageImage = document.querySelector<HTMLAnchorElement>('[name=package-image]');
  const coverArtUrl = packageImage ? packageImage.href : '';

  performerLinks.forEach((link) => {
    const data = getPornstarData(link);
    if (!data) {
      return;
    }
    const followButton = createFollowPornstarButton({ ...data, coverArtUrl });
    const performerSpan = document.createElement('span');
    performerSpan.append(link.cloneNode(true), followButton);

    if (link.parentNode) {
      link.parentNode.replaceChild(performerSpan, link);
    }
  });
};

insertFollowButtonBehindPornstarNames();
