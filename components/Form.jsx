import React, { useCallback } from 'react'
import { useFormik } from 'formik';

function Form () {
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = useCallback(
    values => {
      const body = encode({ "form-name": "form 1", ...values });
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
    },
    [],
  );

  const formik = useFormik({
    initialValues: {
      inputEmail4: '',
      inputPassword4: '',
      inputAddress: '',
      inputAddress2: '',
      inputCity: '',
      inputState: '',
      inputZip: '',
      gridCheck: '',
      'form-name': 'form 1',
      'bot-field': ''
    },
    onSubmit: values => {
      handleSubmit(values)
    },
  });  

  return (
    <form 
      onSubmit={formik.handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="form 1"
    >
      <input type="hidden" name="form-name" />
      <input 
        name="bot-field"
        type="hidden"
        onChange={formik.handleChange}
        value={formik.values['bot-field']}
      />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input 
            name="inputEmail4"
            type="email"
            className="form-control"
            id="inputEmail4"
            onChange={formik.handleChange}
            value={formik.values.inputEmail4}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input 
            name="inputPassword4"
            type="password"
            className="form-control"
            id="inputPassword4"
            onChange={formik.handleChange}
            value={formik.values.inputPassword4}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input 
          name="inputAddress"
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St" 
          onChange={formik.handleChange}
          value={formik.values.inputAddress}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress2">Address 2</label>
        <input 
          name="inputAddress2"
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor" 
          onChange={formik.handleChange}
          value={formik.values.inputAddress2}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input 
            name="inputCity"
            type="text"
            className="form-control"
            id="inputCity" 
            onChange={formik.handleChange}
            value={formik.values.inputCity}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <select 
            name="inputState"
            id="inputState"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.inputState}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input 
            name="inputZip" 
            type="text" 
            className="form-control" 
            id="inputZip" 
            onChange={formik.handleChange}
            value={formik.values.inputZip}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input 
            className="form-check-input" 
            name="gridCheck"
            type="checkbox"
            id="gridCheck" 
            onChange={formik.handleChange}
            value={formik.values.gridCheck}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  )
}

export default Form 
