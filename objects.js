var playlist = { 'World Order': 'Missing beauty' }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  var pl = Object.assign({}, playlist)
  delete playlist[artistName]
  return playlist
}