import { useState } from 'react'

const NAV_ITEMS = ['Account', 'Analytics', 'Products', 'Support']

export default function Navbar() {
  const [active, setActive] = useState('Account')
  return (
    <nav className="navbar">
      <h1>🌾 FarmConnect</h1>
      <ul>
        {NAV_ITEMS.map(item => (
          <li key={item} className={active === item ? 'active' : ''} onClick={() => setActive(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}
