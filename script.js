const token = 'BQD2Kikg9WpX7uJSAbNTzSqbl_-SSLSGF70RDpwAoVZ_5bnlcjoEv5Dhto9PwS6BcVLX9BQc5pi8jA9fkhHSW85zv3opyR2SQymnuEAusIdlSmbKsKEOd0ieywSMbqkAy4tWaEyguGTeoTA0F7Uqlfxez5lnnqYwTDjmB35uk-gOCmEiCDUL7EhXLE73RJsstOw-uh0FNQYcz48fy3vgaJ5VeKuxDqpCM1d9CSDi3gQz-z4w1VKgKzYj8P9lbFnkdzYq8c_ndD-PDxXH79Gi9ETA6NT6VbZG26fVxOubk3Vd-0XyS-mRYyQ'; // 🔐 Substitua com seu token

async function getTopTracks() {
  const res = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return (await res.json()).items;
}
document.getElementById('carregarMusicas').onclick = async () => {
  const tracks = await getTopTracks();
  document.getElementById('ListaDeMusicas').innerHTML = tracks.map(
    t => `<li>${t.name} — ${t.artists.map(a => a.name).join(', ')}</li>`
  ).join('');
};