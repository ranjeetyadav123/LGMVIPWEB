import React, { useState } from "react";
import './form.css'

function Form() {
  const initialValue={
    Name: "",
    Email: "",
    WebsiteLink: "",
    ImageLink: "",
    Gender: "",
    Skills: ""
  }
  const [detail, setDetail] = useState(initialValue);
  const [record, setRecord] = useState([]);
  const handeleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setDetail({ ...detail, [name]: value });
  };
  const handleClear=(e)=>{ setRecord([])};
  const handleSubmit = (e) => {
    e.preventDefault();
    const StudentRecordes = { ...detail, id: new Date().getTime().toString() };
    setRecord([...record, StudentRecordes]);
    console.log(StudentRecordes);
  };

  return (
    <>
      <from className="from" action="submit" onSubmit={handleSubmit}>
        <div className="container">
        <div className="">
          <label>Name </label>
          <input
            placeholder="Enter Name"
            value={detail.Name}
            name="Name"
            onChange={handeleChange}
          />
        </div>
        <div className="email">
          <label>Email </label>
          <input
            placeholder="Enter Email"
            value={detail.Email}
            name="Email"
            onChange={handeleChange}
          />
        </div>
        <div className="">
          <label>Website Link </label>
          <input
            value={detail.WebsiteLink}
            name="WebsiteLink"
            onChange={handeleChange}
          />
        </div>
        <div className="">
          <label>Image Link </label>
          <input
            placeholder=""
            value={detail.ImageLink}
            name="ImageLink"
            onChange={handeleChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            value="Male"
            name="Gender"
            onChange={handeleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            value="Female"
            name="Gender"
            onChange={handeleChange}
          />
          <label>Female</label>
        </div>
        <div>
          <label>Skills </label>
          <input
          placeholder="List Your Skills"
            value={detail.Skills}
            name="Skills"
            onChange={handeleChange}
          />
         
        </div>
        <button className="btn-1" type="submit" onClick={handleSubmit}>
          Registration
        </button>
        <button className="btn-2" onClick={handleClear}> Clear</button>
        </div>
      </from>
      {record.map((curE) => {
        return (
          <>
            <body class="bg-grid-line"></body>
            <div class="card">
              <header>
                <h1>Student Details</h1>
              </header>
              <article>
                <img alt="My Pic" id="thumb" src={curE.ImageLink} />
                <h2>Name-{curE.Name}</h2>
                <h2>Gender-{curE.Gender}</h2>
                <h2>Email-{curE.Email}</h2>
                <h2>Web Link-<a href={curE.WebsiteLink} target="_blank">{curE.WebsiteLink}</a></h2>
                <div class="area">
                  <h2>Skills<p>{curE.Skills}</p></h2>
                  
                </div>
              </article>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Form;
