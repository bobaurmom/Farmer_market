export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aegon Targaryen" />
      <h2>Aegon Targaryen</h2>
      <p className="role">Verified Farmer</p>
      <div className="stats">
        <div className="stat"><strong>4.8 ★</strong><span>Rating</span></div>
        <div className="stat"><strong>282</strong><span>Orders</span></div>
        <div className="stat"><strong>$12.4k</strong><span>Revenue</span></div>
      </div>
    </div>
  )
}
