import { addPornstar } from './utils/chrome';

console.log('Running DMM.pornstar');

function createFollowPornstarButton(data) {
  function handleClick() {
    addPornstar(data);
  }

  const followButton = document.createElement('button', { type: 'button' });
  followButton.innerHTML = 'お気に入り';
  followButton.addEventListener('click', handleClick);

  return followButton;
}

function getPornstarData(link) {
  const regex = /digital\/videoa\/-\/list\/=\/article=(.*)\/id=(\d*)\//;
  const [, type, id] = regex.exec(link);
  const data = {
    type,
    id,
    name: link.innerText,
  };

  return data;
}

const insertFollowButtonBehindPornstarNames = () => {
  const performerLinks = document.querySelectorAll('#performer > a');
  const coverArtUrl = document.querySelector('[name=package-image]').href;

  [...performerLinks].forEach((link) => {
    const data = getPornstarData(link);
    const followButton = createFollowPornstarButton({ ...data, coverArtUrl });
    const performerSpan = document.createElement('span');
    performerSpan.append(link.cloneNode(true), followButton);

    link.parentNode.replaceChild(performerSpan, link);
  });
};

insertFollowButtonBehindPornstarNames();
