import { useState, useEffect } from 'react'
import axios from 'axios'

function UserDashboard({ token }) {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user/welcome', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setMessage(response.data)
      } catch (err) {
        setError(err.response?.data || 'Failed to fetch user data')
      }
    }
    fetchData()
  }, [token])

  return (
    <div className="dashboard-card">
      <h2>User Dashboard</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="content">
          <p>{message}</p>
          <p className="subtext">Accessible to users with USER or ADMIN roles.</p>
        </div>
      )}
    </div>
  )
}

export default UserDashboard