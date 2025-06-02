const token = 'BQCy7UQXJygeavtMQ7-q5o2flgK8yIfJdCVg6_z62MR3p-HhXGO_bwiAwEMyfy2f7JRbCVNTXIHsMc_0MdoF8az7CVrLJboVmq9CyBh4Bf5p2RRPXxZJc9wQWrNPS_8rpe0DRhRJyCw7qrF-Afmi4Xg1yM_5_Sl1m5cv0MezAlvtIlZqqjet6oQrwPyoUsynI9peZnysvDpBqAe2HsX_RZSIzlJUe3g0HBga2a1wCBrGWnV2FzScz6_D3gqe0RrUk3jrAD_r0XluzAII9UvOD5POZzGo_Ieo2cZmLErRVhABTQpXvQbn5G0';

async function getTopTracks() { 
  const tempo = document.getElementById('tempo').value;
  const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${tempo}&limit=50`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return (await res.json()).items;
}
  async function getTopTracks5() {
  const tempo = document.getElementById('tempo').value;
  const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${tempo}&limit=5`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return (await res.json()).items;
}
  async function getTopTracks10() {
  const tempo = document.getElementById('tempo').value;
  const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${tempo}&limit=10`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return (await res.json()).items;
}
  async function getTopTracks25() {
  const tempo = document.getElementById('tempo').value;
  const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${tempo}&limit=25`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return (await res.json()).items;
}
  async function getTopTracks50() {
   const tempo = document.getElementById('tempo').value;
  const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${tempo}&limit=50`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return (await res.json()).items;
}

document.getElementById('Quantidade5').onclick = async () => {
  const tracks = await getTopTracks5();
  document.getElementById('ListaDeMusicas').innerHTML = tracks.map(
    t => `<li>${t.name} — ${t.artists.map(a => a.name).join(', ')}</li>`
  ).join('');
};

document.getElementById('Quantidade10').onclick = async () => {
  const tracks = await getTopTracks10();
  document.getElementById('ListaDeMusicas').innerHTML = tracks.map(
    t => `<li>${t.name} — ${t.artists.map(a => a.name).join(', ')}</li>`
  ).join('');
};

document.getElementById('Quantidade25').onclick = async () => {
  const tracks = await getTopTracks25();
  document.getElementById('ListaDeMusicas').innerHTML = tracks.map(
    t => `<li>${t.name} — ${t.artists.map(a => a.name).join(', ')}</li>`
  ).join('');
};
document.getElementById('Quantidade50').onclick = async () => {
  const tracks = await getTopTracks50();
  document.getElementById('ListaDeMusicas').innerHTML = tracks.map(
    t => `<li>${t.name} — ${t.artists.map(a => a.name).join(', ')}</li>`
  ).join('');
};