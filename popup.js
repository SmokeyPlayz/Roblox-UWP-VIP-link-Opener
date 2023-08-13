document.addEventListener('DOMContentLoaded', function () {
  const convertBtn = document.getElementById('convertBtn');
  const vipLinkInput = document.getElementById('vipLinkInput');

  convertBtn.addEventListener('click', function () {
    const vipLink = vipLinkInput.value.trim();

    const url = new URL(vipLink);
    const gameId = url.pathname.match(/\/games\/(\d+)/)[1];
    const linkCode = url.searchParams.get('privateServerLinkCode');

    if (gameId && linkCode) {
      const robloxProtocolLink = `roblox://placeID=${gameId}&LinkCode=${linkCode}`;
      
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        chrome.tabs.update(tab.id, { url: robloxProtocolLink });
      });
    } else {
      alert('Invalid Roblox VIP link.');
    }
  });
});
