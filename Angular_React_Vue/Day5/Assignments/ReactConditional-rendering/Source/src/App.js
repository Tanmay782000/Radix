import React, { useState } from 'react';
export default function EmpData() {
  const [eid, seteid] = useState('');
  const [ename, setename] = useState('');
  const [eaddr, seteaddr] = useState('');
  const [gender, setgender] = useState('');
  const [doj, setdoj] = useState('');
  const [hobbies, sethobbies] = useState('');
  const [values] = useState([]);
  const [listitems, setlistitems] = useState();
  const [currentmonth, setcurrmonth] = useState();
  const [empmonth, setempmonth] = useState();

  function assign() {
    let datas = { eid, ename, eaddr, gender, doj, hobbies };
    values.push(datas);
    console.log(datas);
    console.log(values);

    values.sort((a, b) => (a.ename < b.ename ? -1 : 1));

    let list =
      values &&
      values.map((obj) => (
        <tr>
          <td>{obj.eid}</td>
          <td>{obj.ename}</td>
          <td>{obj.eaddr}</td>
          <td>{obj.gender}</td>
          <td>{obj.doj}</td>
          <td>{obj.hobbies}</td>
        </tr>
      ));
    setlistitems(list);
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    setcurrmonth(month);
    var e = doj.slice(6, 7);
    setempmonth(e);
  }

  return (
    <div>
      <form className="frm">
        <strong>Employee ID: </strong>
        <input
          type="text"
          name="eid"
          className="form-control"
          onChange={(e) => seteid(e.target.value)}
        />
        <br />
        <strong>Employee Name :</strong>
        <input
          type="text"
          name="ename"
          className="form-control"
          onChange={(e) => setename(e.target.value)}
        />
        <br />
        <strong>Address :</strong>
        <input
          type="text"
          name="eaddr"
          className="form-control"
          onChange={(e) => seteaddr(e.target.value)}
        />
        <br />
        <strong>Gender : </strong>
        <input
          name="gender"
          type="radio"
          value="male"
          className="form-check-input"
          onChange={(e) => setgender(e.target.value)}
        />
        Male
        <input
          name="gender"
          type="radio"
          value="female"
          className="form-check-input"
          onChange={(e) => setgender(e.target.value)}
        />
        Female <br />
        <br />
        <strong>DOJ :</strong>
        <input
          type="date"
          name="doj"
          className="form-control"
          onChange={(e) => setdoj(e.target.value)}
        />
        <br />
        <strong>Hobbies :</strong>
        <input
          type="text"
          name="hobbies"
          className="form-control"
          onChange={(e) => sethobbies(e.target.value)}
        />
        <br />
        <input
          type="button"
          onClick={assign}
          value="Submit"
          className="btn btn-primary"
        />
      </form>
      <table className="table pt-5">
        <caption>LIST OF EMPLOYEE</caption>
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>EmployeeNAME</th>
            <th>ADDRESS</th>
            <th>GENDER</th>
            <th>DOJ</th>
            <th>HOBBIES</th>
          </tr>
        </thead>
        {currentmonth === empmonth ? (
          <tbody className="green">{listitems}</tbody>
        ) : (
          <tbody className="red">{listitems}</tbody>
        )}
      </table>
    </div>
  );
}
