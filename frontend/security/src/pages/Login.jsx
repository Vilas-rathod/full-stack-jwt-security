import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({ setToken, setRoles }) {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth/login', formData)
      const { jwt } = response.data
      setToken(jwt)
      localStorage.setItem('token', jwt)
      const roles = parseJwt(jwt).roles.map(r => r.authority)
      setRoles(roles)
      localStorage.setItem('roles', JSON.stringify(roles))
      setMessage('Login Successful'); // Set message first
    setTimeout(() => {
      navigate('/user'); // Delay navigation by 2 seconds
      // navigate(roles.includes('ROLE_ADMIN') ? '/admin' : '/user'); // Uncomment if needed
    }, 1000)
    } catch (err) {
      setError(err.response?.data || 'Login failed')
    }
  }

  const parseJwt = (token) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    return JSON.parse(atob(base64))
  }

  return (
    <div className="form-card">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Login</button>
        {message && <p className="success">{message}</p>}
      </form>
    </div>
  )
}

export default Login