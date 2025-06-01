const token = 'BQBbnMUFYKURHUih5-OkGHvIsWG4ntUNGsrFQSyZhTQOa4F8fhAJzVy0UUho2R_lrHmoBy65vr_faJMk6Tcr4G06UmE7s4iHKBSGZK6RlPRKPtcwWfRN5YhJAAYg-gVTWFs4iDk83xClk9OXKKCM3mD_8rOXTkVHfesISagl7-85ZQ2HcZamKNLKBgCWmqJziubMzJbvQM56MfPvbk29fPwhqm4tzk80CZCu0lk_rSRlKhwE6RzLTDBQfhkxYWh7DMFcWz0LOA13N3Xe_mNBqcxw73KxfLrF1PJ13YSn7dksyZ0sMpzrRxw';

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