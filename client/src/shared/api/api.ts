// client/src/services/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // Proxy configurado no Vite
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api