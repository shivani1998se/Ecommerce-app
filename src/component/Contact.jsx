import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <p className="text-muted">
          Have questions or need assistance? We're here to help!
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card shadow p-4">
            <h3 className="fw-bold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-lg-6">
          <div className="card shadow p-4 bg-light">
            <h3 className="fw-bold mb-4">Contact Information</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fa-solid fa-phone fa-lg text-primary me-3"></i>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-envelope fa-lg text-primary me-3"></i>
                <strong>Email:</strong> contact@yourwebsite.com
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-map-marker-alt fa-lg text-primary me-3"></i>
                <strong>Address:</strong> 123 Main Street, Your City, Your Country
              </li>
              <li>
                <i className="fa-solid fa-clock fa-lg text-primary me-3"></i>
                <strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <h3 className="fw-bold text-center mb-4">Our Location</h3>
        <div className="card shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098983!2d144.9537363153109!3d-37.81627917975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f501fd81%3A0x5045675218ce660!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1634959084679!5m2!1sen!2sau"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
