const token = 'BQD8Js6ISAP50wkY_4gVDM1eHE9Ts5QPae35bHgErTzQ3DkztUXLjk1SKNGDIWDIvQG5cK9FO4EZg3hG0jv3NPzKobB25Zt1j17yow1xHC2AkiOXUWv-sZYl85Zr5OJYxw398yqCbt5OJh8r2UWOTo9YoYhMbU5EAVt7is9hOy_v2SuFNn1eJQH66PTluluSMP19DYeJSDiyH93SEPQILhdWYr9_EPvBJUU2lLP1fWpKFsKAMrDiL1F3ds-y4Fcowfey4-At9mdPJCGLJHSmWwdMVgP4WtB4aBSt55WXhYouDLfFTsNpqi8';
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
