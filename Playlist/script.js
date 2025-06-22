const token = 'BQCyPCb2O-ZILRzxD949KH6A_l46HXbWAXwX0t3tAMZ2MncS2Rq8Dpf-pvYFo_PYDpn1M-7fcW1eCWmCXR__qzmK5ISDb_4UdnZWT37DpRdDSbnH3cJbZoAqscHC_2NcWX4hWfSrClXvHVq2_oT1IUwuUNQ8qh4SvffDzHs1yOYqDOynOtUhoukRY3xZZzDDgCyMMKfrTOUsRICmvFKtxqhFQihdFmPvYyvRfZTePsNPrnAjsPKdWYJ8cEdi3ver539dSJ8V-xMiadhREjq13oHO9aj8Z7eO0iBl2quXrzC7_b6Mw0UUba0';
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
      "name": "Playlist teste 123",
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