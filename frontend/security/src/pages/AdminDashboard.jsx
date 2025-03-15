import { useState, useEffect } from 'react'
import axios from 'axios'

function AdminDashboard({ token }) {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin/welcome', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setMessage(response.data)
      } catch (err) {
        setError(err.response?.data || 'Failed to fetch admin data')
      }
    }
    fetchData()
  }, [token])

  return (
    <div className="dashboard-card">
      <h2>Admin Dashboard</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="content">
          <p>{message}</p>
          <p className="subtext">Restricted to users with ADMIN role only.</p>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard