// Assuming you have a button element with ID "playButton" on the Roblox game page.
const playButton = document.getElementById('playButton');
const gameUrl = new URL(window.location.href);
const pathArray = gameUrl.pathname.split('/');
const gameId = pathArray[2];

if (gameId) {
  const robloxProtocolLink = `roblox://placeID=${gameId}`;
  playButton.href = robloxProtocolLink;
}
