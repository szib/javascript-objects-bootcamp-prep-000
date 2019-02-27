var playlist = { 'World Order': 'Missing beauty' }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, [artistName]: songTitle)
}