const createFollowButtons = () => {
  const performerLinks = document.querySelectorAll('#performer > a');
  const coverArtUrl = document.querySelector('[name=package-image]').href;
  const handleClickFollowButton = newFollowing => () => {
    console.log('newFollowing', newFollowing);

    chrome.storage.local.get('following', ({ following = [] }) => {
      const index = following.findIndex(performer => performer.id === newFollowing.id);

      if (index === -1) {
        following.push(newFollowing);
      } else {
        following.splice(index, 1, newFollowing);
      }

      chrome.storage.local.set({ following }, () => {
        console.log('Value is set to', following);
      });
    });
  };

  [...performerLinks].forEach((link) => {
    const [, type, id] = /digital\/videoa\/-\/list\/=\/article=(.*)\/id=(\d*)\//.exec(link);
    const performer = {
      type,
      id,
      name: link.innerText,
    };

    const followButton = document.createElement('button', { type: 'button' });
    followButton.innerHTML = 'follow';
    followButton.addEventListener('click', handleClickFollowButton({ ...performer, coverArtUrl }));

    const performerSpan = document.createElement('span');
    performerSpan.append(link.cloneNode(true), followButton);

    link.parentNode.replaceChild(performerSpan, link);
  });
};

createFollowButtons();
