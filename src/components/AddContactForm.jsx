import React, { useState } from 'react'
import './AddContactForm.css'

function AddContactForm({ onAddContact }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim() && formData.email.trim()) {
      onAddContact(formData)
      setFormData({ name: '', email: '', phone: '' })
      setIsOpen(false)
    }
  }

  const handleCancel = () => {
    setFormData({ name: '', email: '', phone: '' })
    setIsOpen(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCancel()
    }
  }

  return (
    <>
      <button 
        className="add-contact-button"
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-plus add-icon"></i> Add Contact
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCancel}>
              <i className="fas fa-times"></i>
            </button>
            <form className="add-contact-form" onSubmit={handleSubmit}>
              <h3>Add New Contact</h3>
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Add Contact
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddContactForm

