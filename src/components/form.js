import React, { useState } from "react"

const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  // Function to handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // You can perform actions with the form data here
    console.log("Form submitted:", formData)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "login",
      customEventData: {
        userName: formData.name,
        userEmail: formData.email,
      },
    })
  }

  const handleFocus = () => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "inputFocus",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onFocus={handleFocus}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default MyForm
