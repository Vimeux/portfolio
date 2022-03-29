import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Basic ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
    'Content-Type': 'application/json'
  }
})

const getAllRepos = async () => {
  try {
    const response = await api.get('/user/repos', { params: { visibility: 'public' } })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllRepos
}
