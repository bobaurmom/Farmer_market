import { useState } from 'react'
import '../style/AdminTab.css'

const INITIAL_USERS = [
  { id: 1, name: 'Aegon Targaryen', email: 'aegon@gmail.com', role: 'Farmer', status: 'active',   joined: 'Jan 10, 2024',
    history: [
      { action: 'Posted product: Jasmine Rice', date: 'Mar 15, 2026' },
      { action: 'Completed order #ORD-0281',    date: 'Mar 14, 2026' },
      { action: 'Updated profile info',         date: 'Feb 20, 2026' },
    ]
  },
  { id: 2, name: 'Sora Kim',        email: 'sora@gmail.com',  role: 'Buyer',  status: 'active',   joined: 'Mar 5, 2024',
    history: [
      { action: 'Placed order #ORD-0280',    date: 'Mar 12, 2026' },
      { action: 'Left review on Brown Rice', date: 'Mar 13, 2026' },
    ]
  },
  { id: 3, name: 'Dara Chea',       email: 'dara@gmail.com',  role: 'Farmer', status: 'inactive', joined: 'Jun 18, 2023',
    history: [
      { action: 'Posted product: White Rice', date: 'Mar 8, 2026' },
      { action: 'Account suspended',          date: 'Mar 1, 2026' },
    ]
  },
  { id: 4, name: 'Bora Sok',        email: 'bora@gmail.com',  role: 'Buyer',  status: 'pending',  joined: 'Feb 1, 2025',
    history: [
      { action: 'Registered account', date: 'Feb 1, 2025' },
    ]
  },
  { id: 5, name: 'Maly Pich',       email: 'maly@gmail.com',  role: 'Farmer', status: 'active',   joined: 'Apr 22, 2024',
    history: [
      { action: 'Posted product: Beef 10kg',  date: 'Mar 10, 2026' },
      { action: 'Completed order #ORD-0275',  date: 'Mar 9, 2026'  },
    ]
  },
]

export default function AdminTab() {
  const [users, setUsers]       = useState(INITIAL_USERS)
  const [selected, setSelected] = useState(null)

  const deleteUser = (id) => {
    if (confirm('Are you sure you want to delete this account?')) {
      setUsers(users.filter(u => u.id !== id))
    }
  }

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('currentUser')
      window.location.href = '/sign-in'
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
      <div className="section-card">
        <h3>Account Management</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Role</th>
              <th>Status</th><th>Joined</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td data-label="Name">{u.name}</td>
                <td data-label="Email">{u.email}</td>
                <td data-label="Role">{u.role}</td>
                <td data-label="Status"><span className={`badge ${u.status}`}>{u.status.charAt(0).toUpperCase() + u.status.slice(1)}</span></td>
                <td data-label="Joined">{u.joined}</td>
                <td data-label="Actions">
                  <button className="btn-view"   onClick={() => setSelected(u)}>View History</button>
                  <button className="btn-delete" onClick={() => deleteUser(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <h2>History — {selected.name}</h2>
            <table>
              <thead>
                <tr><th>Action</th><th>Date</th></tr>
              </thead>
              <tbody>
                {selected.history.map((h, i) => (
                  <tr key={i}>
                    <td data-label="Action">{h.action}</td>
                    <td data-label="Date">{h.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
