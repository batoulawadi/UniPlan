
import { useState } from "react";

function Schedule() {
  const [courses] = useState([
    { id: 1, name: "Web Programming" },
    { id: 2, name: "Data Structures" },
    { id: 3, name: "Database" }
  ]);

  const [classes, setClasses] = useState([
    {
      id: 1,
      course: "Web Programming",
      day: "Monday",
      start: "09:00",
      end: "10:30",
      room: "Lab 1"
    },
    {
      id: 2,
      course: "Data Structures",
      day: "Tuesday",
      start: "10:00",
      end: "11:30",
      room: "Room 204"
    }
  ]);

  const [course, setCourse] = useState("");
  const [classDay, setClassDay] = useState("Monday");
  const [classStart, setClassStart] = useState("");
  const [classEnd, setClassEnd] = useState("");
  const [room, setRoom] = useState("");

  function addClass(e) {
    e.preventDefault();

    if (!course || !classStart || !classEnd || !room) {
      alert("Please fill in all fields");
      return;
    }

    const newClass = {
      id: Date.now(),
      course: course,
      day: classDay,
      start: classStart,
      end: classEnd,
      room: room
    };

    setClasses([...classes, newClass]);

    setCourse("");
    setClassDay("Monday");
    setClassStart("");
    setClassEnd("");
    setRoom("");
  }

  function removeClass(id) {
    setClasses(classes.filter(item => item.id !== id));
  }

  return (
    <div className="page-container">

      <h1>My Schedule</h1>
      <p>Organize your weekly university classes.</p>

      <h2>Add Class to Schedule</h2>

      <form className="schedule-form" onSubmit={addClass}>

        <label>Select Course</label>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>

          {courses.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <label>Select Day</label>

        <select
          value={classDay}
          onChange={(e) => setClassDay(e.target.value)}
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
     
     
        </select>

        <label>Start Time</label>

        <input
          type="time"
          value={classStart}
          onChange={(e) => setClassStart(e.target.value)}
        />

        <label>End Time</label>

        <input
          type="time"
          value={classEnd}
          onChange={(e) => setClassEnd(e.target.value)}
        />

        <label>Room</label>

        <input
          type="text"
          placeholder="Enter Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <button type="submit">Add to Schedule</button>

      </form>

      <h2>Weekly Schedule</h2>

      <table className="schedule-table">

        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Course</th>
            <th>Room</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((item) => (
            <tr key={item.id}>
              <td>{item.day}</td>
              <td>{item.start} - {item.end}</td>
              <td>{item.course}</td>
              <td>{item.room}</td>
              <td>
                <button onClick={() => removeClass(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Schedule;
