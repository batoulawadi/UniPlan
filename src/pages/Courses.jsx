import { useState, useEffect } from "react";

function Courses() {
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("uniplanCourses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : [
          { id: 1, name: "Advanced Web Programming", code: "CSCI426" },
          { id: 2, name: "Mobile Applications", code: "CSCI490" },
          { id: 3, name: "Database", code: "CSCI320" }
        ];
  });

  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    localStorage.setItem("uniplanCourses", JSON.stringify(courses));
  }, [courses]);

  function addCourse(e) {
    e.preventDefault();

    if (name.trim() === "" || code.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const newCourse = {
      id: Date.now(),
      name: name.trim(),
      code: code.trim()
    };

    setCourses([...courses, newCourse]);
    setName("");
    setCode("");
  }

  function removeCourse(id) {
    setCourses(courses.filter(course => course.id !== id));
  }

  return (
    <div className="page-container">
      <h1>My Courses</h1>
      <p>Manage your registered university courses.</p>

      <form className="course-form" onSubmit={addCourse}>
        <input
          type="text"
          placeholder="Course Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button type="submit">Add Course</button>
      </form>

      <div className="courses-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.code}</p>

            <button onClick={() => removeCourse(course.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;