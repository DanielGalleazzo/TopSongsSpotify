const token = 'BQBhhczCYdWazroxCfNHbIJp-Cte6GzTW-uYbhaSndMayfoa_10jswUDy7u8V0jlSg_aBnxRCSNuD4oTVlBomoyCI4y3CKejUlGjGGgZDQuxnwZRunb0Xqbs8XX4fttnxcH8Qd765Nrcr-QU7pEormz5gT-x--gRZpltDtDtmb1aVeUbvGZwqFzs5aE4WM-6WvbwBe_NL6Y2RNSYvpPJyAfMPP4tcXmFVQ3O2uX_2WpElo17xaxUUNUvA6EIR1tqkZEtA38uTVFq1T7uCfkLWwcKFK5p0L0KL1e5KleDeO5VaOqN75tWiBM';
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
