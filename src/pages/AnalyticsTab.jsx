const TOP_PRODUCTS = [
  { name: 'Rice',      count: 320 },
  { name: 'Beef',      count: 210 },
  { name: 'Vegetable', count: 185 },
  { name: 'Fish',      count: 150 },
  { name: 'Fruit',     count: 120 },
]

const PROVINCE_SALES = [
  { name: 'Kandal',       count: 280 },
  { name: 'Phnom Penh',   count: 240 },
  { name: 'Siem Reap',    count: 190 },
  { name: 'Battambang',   count: 160 },
  { name: 'Kampong Cham', count: 130 },
]

const AVG_PRICES = [
  { name: 'Rice',      price: 45  },
  { name: 'Beef',      price: 120 },
  { name: 'Vegetable', price: 20  },
  { name: 'Fish',      price: 75  },
  { name: 'Fruit',     price: 35  },
]

function BarChart({ data, valueKey, color = '#1a4d2e' }) {
  const max = Math.max(...data.map(d => d[valueKey]))
  return (
    <div className="bar-chart">
      {data.map((item, i) => (
        <div key={i} className="bar-col">
          <div className="bar-label">{item[valueKey]}{valueKey === 'price' ? '$' : ''}</div>
          <div
            className="bar"
            style={{ height: `${(item[valueKey] / max) * 150}px`, background: color }}
          />
          <div className="bar-name">{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default function AnalyticsTab() {
  return (
    <>
      <div className="metrics-grid">
        <div className="metric-card"><strong>1,284</strong><span>Total Orders</span></div>
        <div className="metric-card"><strong>$48.6k</strong><span>Total Revenue</span></div>
        <div className="metric-card"><strong>38</strong><span>Active Farmers</span></div>
      </div>

      <div className="section-card">
        <h3>Most Posted Products</h3>
        <BarChart data={TOP_PRODUCTS} valueKey="count" color="#1a4d2e" />
      </div>

      <div className="section-card">
        <h3>Sales by Province</h3>
        <BarChart data={PROVINCE_SALES} valueKey="count" color="#2d7a4f" />
      </div>

      <div className="section-card">
        <h3>Average Price per Product ($)</h3>
        <BarChart data={AVG_PRICES} valueKey="price" color="#f0b429" />
      </div>
    </>
  )
}
