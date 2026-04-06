const INFO = [
  { label: 'Location',     value: 'Sensok, CD'             },
  { label: 'Member Since', value: 'Sep 11, 2011'           },
  { label: 'Phone',        value: '077 624 249'            },
  { label: 'Email',        value: 'Aegon.farmer@gmail.com' },
]

export default function QuickInfo() {
  return (
    <div className="info-card">
      <h3>Quick Info</h3>
      {INFO.map(item => (
        <div key={item.label} className="info-row">
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
        </div>
      ))}
    </div>
  )
}
