import { useState } from 'react';
import Head from 'next/head';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    hotelName: '',
    hotelAddress: '',
    hotelWebsite: '',
    hotelCategory: '',
    services: {
      waitingRooms: false,
      changingRooms: false,
      restrooms: false,
      premiumWashrooms: false,
    },
    partnershipReason: '',
    locationsCount: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: {
          ...prevData.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or backend)
    console.log('Form Submitted:', formData);
  };

  return (
    <div>
      <Head>
        <title>Hotel Partner Registration</title>
      </Head>

      <h1>Hotel Partnership Login Form</h1>
      <p>Become a partner with Restfree and offer premium waiting & restroom services.</p>

      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        {/* Hotel Information */}
        <label>
          Hotel Name:
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Hotel Address:
          <input
            type="text"
            name="hotelAddress"
            value={formData.hotelAddress}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Hotel Website:
          <input
            type="url"
            name="hotelWebsite"
            value={formData.hotelWebsite}
            onChange={handleChange}
          />
        </label>

        <label>
          Hotel Category:
          <select
            name="hotelCategory"
            value={formData.hotelCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Luxury">Luxury</option>
            <option value="Mid-range">Mid-range</option>
            <option value="Budget">Budget</option>
          </select>
        </label>

        {/* Facilities Provided */}
        <fieldset>
          <legend>Select the services your hotel offers:</legend>
          <label>
            <input
              type="checkbox"
              name="waitingRooms"
              checked={formData.services.waitingRooms}
              onChange={handleChange}
            />
            Restfree Waiting Rooms
          </label>
          <label>
            <input
              type="checkbox"
              name="changingRooms"
              checked={formData.services.changingRooms}
              onChange={handleChange}
            />
            Changing Rooms
          </label>
          <label>
            <input
              type="checkbox"
              name="restrooms"
              checked={formData.services.restrooms}
              onChange={handleChange}
            />
            Restrooms
          </label>
          <label>
            <input
              type="checkbox"
              name="premiumWashrooms"
              checked={formData.services.premiumWashrooms}
              onChange={handleChange}
            />
            Premium Washrooms
          </label>
        </fieldset>

        {/* Partnership Details */}
        <label>
          Why do you want to partner with Restfree?
          <textarea
            name="partnershipReason"
            value={formData.partnershipReason}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          How many locations will be involved in the partnership?
          <input
            type="number"
            name="locationsCount"
            value={formData.locationsCount}
            onChange={handleChange}
            required
          />
        </label>

        {/* Terms & Conditions */}
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          I agree to the terms and conditions of the partnership program.
        </label>

        <button type="submit">Submit</button>
      </form>

      <style jsx>{`
        div {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        label {
          display: block;
        }

        input, textarea, select {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          font-size: 16px;
        }

        button {
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        fieldset {
          border: 1px solid #ddd;
          padding: 10px;
        }

        legend {
          font-weight: bold;
        }

        textarea {
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default PartnerForm;
