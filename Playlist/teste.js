// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQD8Js6ISAP50wkY_4gVDM1eHE9Ts5QPae35bHgErTzQ3DkztUXLjk1SKNGDIWDIvQG5cK9FO4EZg3hG0jv3NPzKobB25Zt1j17yow1xHC2AkiOXUWv-sZYl85Zr5OJYxw398yqCbt5OJh8r2UWOTo9YoYhMbU5EAVt7is9hOy_v2SuFNn1eJQH66PTluluSMP19DYeJSDiyH93SEPQILhdWYr9_EPvBJUU2lLP1fWpKFsKAMrDiL1F3ds-y4Fcowfey4-At9mdPJCGLJHSmWwdMVgP4WtB4aBSt55WXhYouDLfFTsNpqi8';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:7A0f2o7lsf2e31si3BXpcf','spotify:track:2fXIrAxHbMeLukqcQTyhrh','spotify:track:1mo6pWcIXljy3y1Kju5JWG','spotify:track:4hKLzFvNwHF6dPosGT30ed','spotify:track:4tqcoej1zPvwePZCzuAjJd'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My top tracks playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);
