export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/504268516_30393520003579734_4776808174969474958_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=PFBzSEe6FuMQ7kNvwETUy_r&_nc_oc=AdrUmXe7UqfsowhVwUBMLAClGRcQkwFXiCO6XsuFZm9bVOE5aDbfHHJCa1U9cuLdCfI&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=4-e-EU9WcfRtE8WOwkXNnw&_nc_ss=7a3a8&oh=00_Af3kCQb9CedbcxyA2D7n9_clGt8ONe8SgoY6b7z9tNQ9_w&oe=69D993B3" alt="Aegon Targaryen" />
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
