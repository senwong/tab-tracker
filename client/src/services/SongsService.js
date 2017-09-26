import Api from '@/services/Api.js'

export default {
  index () {
    return Api().get('songs')
  },
  post (songData) {
    return Api().post('songs', songData)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
