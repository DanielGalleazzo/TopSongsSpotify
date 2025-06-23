const token = 'BQANfKXbLvcs8IdTN-xtq2a9GWb0QP83Q0gEDsQ6Z1PVasPvNzoGoEYFAUIqO3OfbzHqT7ajS97khHywamLyNoGy0G4SRaLomEaY4b9cc_YNjL2lHh06bPoC-NsVuhdfuHMZSa1I7RjimwgJ7Ekr5wPSpQSjGhqtqWQypoHjUfn72Z2wDulrB4CE6czkTLmkgvSRq3_U_zvTmUC1aNYXSFHOKTvuqtt1JZrIex9V1WweR91QjEa1G5GbwsT9MQ_HhV58HRLQnbhiT1GhnWoU-Jc127nrX1hZ-qzemJ0msNjwPDPjwhMYdQI';
let isPublic = false;

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    method,
    body: body ? JSON.stringify(body) : undefined
  });
  return res.json();
}

const tracksUri = [
  'spotify:track:7A0f2o7lsf2e31si3BXpcf',
  'spotify:track:2fXIrAxHbMeLukqcQTyhrh',
  'spotify:track:1mo6pWcIXljy3y1Kju5JWG',
  'spotify:track:4hKLzFvNwHF6dPosGT30ed',
  'spotify:track:4tqcoej1zPvwePZCzuAjJd'
];

document.getElementById('botaoSim').onclick = () => isPublic = true;
document.getElementById('botaoNao').onclick = () => isPublic = false;

document.getElementById('botaoCriar').onclick = async () => {
  const name = document.getElementById('playlistNome').value.trim();
  const description = document.getElementById('playlistDescricao').value.trim();

  const { id: user_id } = await fetchWebApi('v1/me', 'GET');
  const playlist = await fetchWebApi(`v1/users/${user_id}/playlists`, 'POST', { name, description, public: isPublic });

  await fetchWebApi(`v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`, 'POST');

  console.log(`Playlist "${playlist.name}" criada!`);
};

