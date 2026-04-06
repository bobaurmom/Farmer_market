export default function ProfileTab() {
  return (
    <>
      <div className="section-card">
        <h3>Personal Information</h3>
        <div className="form-grid">
          <div className="form-group"><label>First Name</label><div className="field">Aegon</div></div>
          <div className="form-group"><label>Last Name</label><div className="field">Targaryen</div></div>
          <div className="form-group full"><label>Email</label><div className="field">Aegon.farmer@gmail.com</div></div>
          <div className="form-group"><label>Phone</label><div className="field">077 624 249</div></div>
          <div className="form-group"><label>Date of Birth</label><div className="field">Sep 11, 2011</div></div>
          <div className="form-group full"><label>Location</label><div className="field">Sensok, CD</div></div>
        </div>
      </div>
      <div className="section-card">
        <h3>Farm Details</h3>
        <div className="form-grid">
          <div className="form-group"><label>Farm Type</label><div className="field">Rice / Grain</div></div>
          <div className="form-group"><label>Farm Size</label><div className="field">—</div></div>
          <div className="form-group full"><label>Region</label><div className="field">Sensok, CD</div></div>
        </div>
      </div>
    </>
  )
}
