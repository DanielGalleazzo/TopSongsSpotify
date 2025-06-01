# 🎵 TopSongsSpotify

Uma aplicação web simples que mostra suas músicas mais ouvidas no Spotify.

---

## ⚙️ Funcionalidades

- Autenticação com a conta do Spotify 🟢
- Exibição das suas top 5 (ou mais) músicas
- Interface leve e responsiva.  

---

## 🔨 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript   
- API do SpotifyWeb 

---

## Como eu posso ter uma chave API ?

Você precisa acessar a sua conta no site: https://developer.spotify.com/
a API varia de usuário para usuário, a sua API estará localizada no campo
" const token = ... " logo na segunda linha

---

## É possivel ver uma quantia maior de música ou um tempo diferente ?

Sim !! No método "getTopTracks" temos a variável
e é ela que define a quantia de músicas e o tempo determinado

---

## Como eu posso alterar a quantia de tempo/músicas ?

Isso é muito simples, basta mudar os valores na variável "const res"
![image_alt](https://raw.githubusercontent.com/DanielGalleazzo/TopSongsSpotify/refs/heads/main/spotifyconstres.JPG)
você pode alterar a quantida de músicas e a data : short, medium e long
short = 30 dias 
medium = 90 dias
long = 180 dias

---

## Resultados
Short 
![image alt](https://raw.githubusercontent.com/DanielGalleazzo/TopSongsSpotify/refs/heads/main/Top5MusicasShortTime.JPG)
Medium
![image_alt](https://raw.githubusercontent.com/DanielGalleazzo/TopSongsSpotify/refs/heads/main/Top5MusicasMediumTime.JPG)
Long
![image_alt](https://raw.githubusercontent.com/DanielGalleazzo/TopSongsSpotify/refs/heads/main/Top5MusicasLongTime.JPG)
Short com 10 músicas
![image_alt](https://raw.githubusercontent.com/DanielGalleazzo/TopSongsSpotify/refs/heads/main/Top10MusicasShortTime.JPG)

---

## Créditos e explicações

Uma boa parte desse código está presente no site: https://developer.spotify.com/
eu apenas reduzi o tamanho e adaptei para o HTML. 
Todos os direitos da API são do SPOTIFY 













