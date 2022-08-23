import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const API = {
  searchForHero: async (input) => {
    return axios.get(`${API_URL}/search/${input}`)
  },
  getHeroInfo: async (id) => {
    return axios.get(`${API_URL}/${id}`)
  },
  setHeroStats: async (id, stats) => {
    return axios.put(`${API_URL}/alter/${id}`, {
      stats: stats
    })
  }
}

export default API