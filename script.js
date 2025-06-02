const token = 'BQAdE_YiqzgaiEPtUyGmrBwuQaqUfKF0MLsp9qz4mJWsc1PCy8ekodvJ0DAmvaQX6o4C_3bwMkTTua3yixvT4MqtN0IKdF5m5ZjZiSAoPAMUdx2aXofNvDOdqsD3uMoeZUNOMbQVIHuMuxTZWYBZ8g5tv2sJqk-tdVb8mjzDcRfAMAkZZX7rrU4QhojYQr5Y5EwWmpQtg-q6Cg1UwPZtCTAffEcxtofls-exOeAidCjtznCqGkOBVW5FCxATtF56P3foY1wzzh7TWXxG3lUkd9AVZjqvmp0vcCn-os4Uz2NpBH1uTriH7Ho';

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