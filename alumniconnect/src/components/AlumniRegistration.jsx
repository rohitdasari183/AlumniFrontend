import React, { useState } from 'react';

const AlumniRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    degree: '',
    fieldOfStudy: '',
    gradYear: '',
    employer: '',
    jobTitle: '',
    linkedin: '',
    networking: false,
    mentoring: false,
    events: false,
    bio: '',
    photo: null,
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="container mt-5">
      <h2>Alumni Registration</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="fullName" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input 
            type="text" 
            className="form-control" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input 
            type="date" 
            className="form-control" 
            id="dob" 
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input 
              type="radio" 
              id="male" 
              name="gender" 
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            <label htmlFor="male" className="form-label ms-2">Male</label>
            <input 
              type="radio" 
              id="female" 
              name="gender" 
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            <label htmlFor="female" className="form-label ms-2">Female</label>
          </div>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Current Address</label>
          <textarea 
            className="form-control" 
            id="address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Degree & Field of Study */}
        <div className="mb-3">
          <label htmlFor="degree" className="form-label">Degree</label>
          <input 
            type="text" 
            className="form-control" 
            id="degree" 
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fieldOfStudy" className="form-label">Field of Study</label>
          <input 
            type="text" 
            className="form-control" 
            id="fieldOfStudy" 
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
          />
        </div>

        {/* Graduation Year */}
        <div className="mb-3">
          <label htmlFor="gradYear" className="form-label">Year of Graduation</label>
          <select 
            className="form-select" 
            id="gradYear" 
            name="gradYear"
            value={formData.gradYear}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Add more years dynamically if needed */}
          </select>
        </div>

        {/* Professional Information */}
        <div className="mb-3">
          <label htmlFor="employer" className="form-label">Current Employer</label>
          <input 
            type="text" 
            className="form-control" 
            id="employer" 
            name="employer"
            value={formData.employer}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label">Job Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="jobTitle" 
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="linkedin" className="form-label">LinkedIn Profile</label>
          <input 
            type="url" 
            className="form-control" 
            id="linkedin" 
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        {/* Alumni Participation */}
        <div className="mb-3">
          <input 
            type="checkbox" 
            id="networking" 
            name="networking"
            checked={formData.networking}
            onChange={handleChange}
          />
          <label htmlFor="networking" className="form-label ms-2">Interested in networking with other alumni?</label>
        </div>

        <div className="mb-3">
          <input 
            type="checkbox" 
            id="mentoring" 
            name="mentoring"
            checked={formData.mentoring}
            onChange={handleChange}
          />
          <label htmlFor="mentoring" className="form-label ms-2">Interested in mentoring students or fellow alumni?</label>
        </div>

        <div className="mb-3">
          <input 
            type="checkbox" 
            id="events" 
            name="events"
            checked={formData.events}
            onChange={handleChange}
          />
          <label htmlFor="events" className="form-label ms-2">Interested in attending alumni events (e.g., reunions, webinars)?</label>
        </div>

        {/* Biography */}
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Brief Biography / Achievements</label>
          <textarea 
            className="form-control" 
            id="bio" 
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        {/* Profile Photo Upload */}
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Upload Profile Photo</label>
          <input 
            type="file" 
            className="form-control" 
            id="photo" 
            name="photo"
            onChange={handleFileChange}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="mb-3">
          <input 
            type="checkbox" 
            id="terms" 
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms" className="form-label ms-2">
            I agree to the <a href="/terms" target="_blank">terms and conditions</a>.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AlumniRegistration;
