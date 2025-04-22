import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      name: '',
      email: '',
      address: '',
      message: ''
    })
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className="contact-image">
          <img
            src="./src/assets/Contactus.png"
            alt="Contact Food"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact