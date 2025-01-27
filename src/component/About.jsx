import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">About Us</h1>
        <p className="text-muted">
          Discover who we are, what we do, and how we aim to make a difference.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            felis vitae sem eleifend vestibulum. Sed eu dui non nisl fermentum
            tempus at non elit. Nulla ac neque nec eros tincidunt vulputate vel
            eget augue. Vivamus tempus libero sed risus pharetra gravida.
          </p>
          <p>
            Cras ultrices, arcu at luctus eleifend, quam justo feugiat sem, a
            placerat odio eros ac enim. Aenean pharetra, mauris nec hendrerit
            facilisis, velit lorem laoreet ipsum, eget bibendum magna erat vel
            metus.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row bg-light p-4 rounded-3 shadow mb-5">
        <div className="col-md-12 text-center">
          <h2 className="fw-bold">Our Mission</h2>
          <p className="text-muted">
            Empowering people and businesses to thrive in a changing world.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fa-solid fa-bullseye fa-3x text-primary mb-3"></i>
          <h4 className="fw-bold">Focus</h4>
          <p>
            We focus on delivering top-quality solutions tailored to your needs
            while fostering innovation and creativity.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fa-solid fa-handshake fa-3x text-success mb-3"></i>
          <h4 className="fw-bold">Commitment</h4>
          <p>
            Our team is committed to providing exceptional service and building
            lasting relationships with our customers.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fa-solid fa-leaf fa-3x text-warning mb-3"></i>
          <h4 className="fw-bold">Sustainability</h4>
          <p>
            We aim to create sustainable solutions that benefit both society and
            the environment.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h2 className="text-center fw-bold">Meet Our Team</h2>
        <p className="text-center text-muted">
          A diverse team of professionals united by a common vision.
        </p>
        <div className="row">
          {[
            { name: "John Doe", role: "CEO", img: "https://via.placeholder.com/150" },
            { name: "Jane Smith", role: "CTO", img: "https://via.placeholder.com/150" },
            { name: "Alice Johnson", role: "CMO", img: "https://via.placeholder.com/150" },
          ].map((member, index) => (
            <div className="col-lg-4 col-md-6 text-center mb-4" key={index}>
              <div className="card shadow h-100">
                <img
                  src={member.img}
                  className="card-img-top rounded-circle w-50 mx-auto mt-3"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-primary text-white text-center p-4 rounded-3 shadow">
        <h2 className="fw-bold">Join Us in Making a Difference</h2>
        <p>
          Be part of our journey to create innovative solutions and empower
          communities around the world.
        </p>
        <button className="btn btn-light btn-lg mt-3">Contact Us</button>
      </div>
    </div>
  );
};

export default About;
