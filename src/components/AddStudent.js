import React, { useEffect, useState } from "react";

function AddStudent() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [student, setStudent] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { nom, prenom };
    console.log(student);
    setNom("");
    setPrenom("");
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("new student added");
    });

    // fetch("http://localhost:8080/student/getall")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setStudent(data);
    //   });
  };
  useEffect(() => {
    fetch("http://localhost:8080/student/getall")
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      });
  });
  return (
    <div>
      <form action="">
        <h1>add student</h1>
        <label htmlFor="nom">nom:</label>
        <input
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          type="text"
          id="nom"
          placeholder="nom"
        />
        <br />
        <label htmlFor="prenom">prenom:</label>
        <input
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          type="text"
          id="prenom"
          placeholder="prenom"
        />
        <button onClick={handleClick}>save</button>
      </form>

      <h1>list students</h1>
      {student.map((one) => {
        return (
          <div key={one.id}>
            <h1>
              {one.nom} {one.prenom}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default AddStudent;
