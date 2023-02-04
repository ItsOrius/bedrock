// fetch from /api/capes
fetch('/api/capes').then(res => res.json()).then(data => {
  const header = document.getElementById('capes-header');
  header.textContent += ` (${Object.keys(data).length})`;
  const container = document.getElementById('capes-container');
  Object.values(data).forEach(cape => {
    const capeDiv = document.createElement('div');
    capeDiv.classList.add('cape');
    const capeTitle = document.createElement('h3');
    capeTitle.textContent = cape.name;
    capeDiv.appendChild(capeTitle);
    container.appendChild(capeDiv);
  });
});

// fetch from /api/players
fetch('/api/players').then(res => res.json()).then(data => {
  const header = document.getElementById('players-header');
  header.textContent += ` (${Object.keys(data).length})`;
  const container = document.getElementById('players-container');
  Object.values(data).forEach(player => {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    const playerTitle = document.createElement('h3');
    playerTitle.textContent = player.name;
    playerDiv.appendChild(playerTitle);
    container.appendChild(playerDiv);
  });
});