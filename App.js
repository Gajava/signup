import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    username: "",

    dob: "",

    gender: "",

    email: "",

    address: "",

    school: "",

    department: "",

    course: "",

    hobbies: [],

    mobilenumber: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const changeHandler = (e) => {
    setChecked((prev) => {
      prev = !prev;
      console.log(prev);
    });

    console.log(e.target.name);
    console.log(checked);
    if (e.target.name === "hobbies" && e.target.checked === true) {
      //data.hobbies.push(e.target.value);
      console.log(data.hobbies);

      setData({ ...data, [e.target.name]: [...data.hobbies, e.target.value] });
      setChecked(true);
    } else if (e.target.name === "hobbies" && e.target.checked === false) {
      data.hobbies.pop(e.target.value);
      console.log(data.hobbies);
      setData({ ...data, [e.target.name]: [...data.hobbies] });
      setChecked(false);
    } else setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setSubmittedData([...submittedData, data]);
    console.log(data);
  };

  return (
    <div className="App">
      <div className="FormData">
        <form onSubmit={submitHandler}>
          <h1>Student Registration Form</h1>

          <div>
            Name:
            <input type="text" name="username" onChange={changeHandler} />
          </div>

          <div>
            DOB:
            <input type="date" name="dob" onChange={changeHandler} />
          </div>

          <div>
            Gender:
            <span>
              Male
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={changeHandler}
              />
            </span>
            <span>
              Female
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={changeHandler}
              />
            </span>
          </div>

          <div>
            Email:
            <input type="email" name="email" onChange={changeHandler} />
          </div>

          <div>
            Address:
            <input type="text" name="address" onChange={changeHandler} />
          </div>

          <div>
            School:
            <input type="text" name="school" onChange={changeHandler} />
          </div>

          <div>
            Department:
            <select name="department" onChange={changeHandler}>
              <option>Select Options</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>Civil</option>
              <option>MECH</option>
            </select>
          </div>

          <div>
            Course:
            <input type="text" name="course" onChange={changeHandler} />
          </div>

          <div>
            Hobbies:
            <span>
              <input
                type="checkbox"
                id="checkbox1"
                value="Sports"
                name="hobbies"
                onChange={changeHandler}
              />
              Sports
              <input
                type="checkbox"
                id="checkbox2"
                value="Arts"
                name="hobbies"
                onChange={changeHandler}
              />
              Arts
              <input
                type="checkbox"
                id="checkbox3"
                value="Service"
                name="hobbies"
                onChange={changeHandler}
              />
              Service
            </span>
          </div>

          <div>
            Mobile Number:
            <input type="number" name="mobilenumber" onChange={changeHandler} />
          </div>
          <input type="submit" value="posted value" />
        </form>
      </div>
      <h1>Student Details</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Address</th>
            <th>School</th>
            <th>Department</th>
            <th>Course</th>
            <th>Hobbies</th>
            <th>Mobile Number</th>
          </tr>
        </thead>

        <tbody>
          {submittedData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.dob}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
                <td>{data.school}</td>
                <td>{data.department}</td>
                <td>{data.course}</td>
                <td>{data.hobbies}</td>
                <td>{data.mobilenumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
