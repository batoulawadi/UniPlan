import { useState, useEffect } from "react";

function Schedule() {
  const [courses] = useState([
    { id: 1, name: "Web Programming" },
    { id: 2, name: "Data Structures" },
    { id: 3, name: "Database" }
  ]);

  const [classes, setClasses] = useState(() => {
    const savedClasses = localStorage.getItem("uniplanSchedule");

    return savedClasses
      ? JSON.parse(savedClasses)
      : [
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
        ];
  });

  const [course, setCourse] = useState("");
  const [classDay, setClassDay] = useState("Monday");
  const [classStart, setClassStart] = useState("");
  const [classEnd, setClassEnd] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    localStorage.setItem("uniplanSchedule", JSON.stringify(classes));
  }, [classes]);

  function addClass(e) {
    e.preventDefault();

    if (!course || !classStart || !classEnd || !room.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (classEnd <= classStart) {
      alert("End time must be after start time");
      return;
    }

    const newClass = {
      id: Date.now(),
      course,
      day: classDay,
      start: classStart,
      end: classEnd,
      room: room.trim()
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
      <p>Organize your university classes and weekly timetable.</p>

      <form className="schedule-form" onSubmit={addClass}>
        <label>Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          {courses.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <label>Day</label>
        <select
          value={classDay}
          onChange={(e) => setClassDay(e.target.value)}
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
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
          placeholder="Enter room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <button type="submit">Add Class</button>
      </form>

      <h2>Weekly Schedule</h2>

      <div className="schedule-table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Day</th>
              <th>Start</th>
              <th>End</th>
              <th>Room</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {classes.map(item => (
              <tr key={item.id}>
                <td>{item.course}</td>
                <td>{item.day}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.room}</td>
                <td>
                  <button onClick={() => removeClass(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}

            {classes.length === 0 && (
              <tr>
                <td colSpan="6">No classes added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;