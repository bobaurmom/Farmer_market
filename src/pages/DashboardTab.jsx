const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const REVENUE = [800, 1200, 950, 1500, 1100, 1840]
const MAX = Math.max(...REVENUE)

const RECENT_ORDERS = [
  { id: '#ORD-0281', farmer: 'Aegon Targaryen', product: 'Jasmine Rice 50kg', date: 'Mar 15, 2026', amount: '$120', status: 'active'   },
  { id: '#ORD-0280', farmer: 'Sora Kim',        product: 'Brown Rice 25kg',   date: 'Mar 12, 2026', amount: '$55',  status: 'pending'  },
  { id: '#ORD-0279', farmer: 'Dara Chea',       product: 'White Rice 100kg',  date: 'Mar 8, 2026',  amount: '$210', status: 'active'   },
  { id: '#ORD-0278', farmer: 'Bora Sok',        product: 'Sticky Rice 30kg',  date: 'Mar 2, 2026',  amount: '$75',  status: 'inactive' },
]

export default function DashboardTab() {
  return (
    <div className="dashboard">
      <div className="dash-cards">
        <div className="dash-card"><span className="dash-icon">📦</span><div><strong>1,284</strong><p>Total Orders</p></div></div>
        <div className="dash-card"><span className="dash-icon">💰</span><div><strong>$48.6k</strong><p>Total Revenue</p></div></div>
        <div className="dash-card"><span className="dash-icon">🌾</span><div><strong>38</strong><p>Active Farmers</p></div></div>
      </div>

      <div className="section-card">
        <h3>Monthly Revenue</h3>
        <div className="bar-chart">
          {REVENUE.map((val, i) => (
            <div key={i} className="bar-col">
              <div className="bar-label">${val}</div>
              <div className="bar" style={{ height: `${(val / MAX) * 150}px` }} />
              <div className="bar-name">{MONTHS[i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h3>Recent Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th><th>Farmer</th><th>Product</th>
              <th>Date</th><th>Amount</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_ORDERS.map(o => (
              <tr key={o.id}>
                <td data-label="Order ID">{o.id}</td>
                <td data-label="Farmer">{o.farmer}</td>
                <td data-label="Product">{o.product}</td>
                <td data-label="Date">{o.date}</td>
                <td data-label="Amount">{o.amount}</td>
                <td data-label="Status"><span className={`badge ${o.status}`}>{o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
