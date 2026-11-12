
import { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("uniplanTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, title: "Web Project", done: false },
          { id: 2, title: "Computer Architecture Midterm", done: false },
          { id: 3, title: "Mobile Project", done: false }
        ];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("uniplanTasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();

    if (newTask.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      done: false
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function completeTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="page-container">
      <h1>My Tasks</h1>
      <p>Keep track of your assignments and academic tasks.</p>

      <h2>Add New Task</h2>

      <form className="task-form" onSubmit={addTask}>
        <label>Task Name</label>

        <input
          type="text"
          placeholder="Enter your task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <h2>My Task List</h2>

      <div className="tasks-list">
        {tasks.map(task => (
          <div className="task-card" key={task.id}>
            <span className={task.done ? "completed" : ""}>
              {task.title}
            </span>

            <button onClick={() => completeTask(task.id)}>
              {task.done ? "Completed" : "Mark as Done"}
            </button>

            <button
              className="remove-task"
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {tasks.length === 0 && (
          <p>No tasks yet. Add your first task!</p>
        )}
      </div>
    </div>
  );
}

export default Tasks;