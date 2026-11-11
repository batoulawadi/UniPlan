import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="welcome-section">
        <h1>Welcome!</h1>

        <p>
          Your academics, organized in one place.
          Manage your courses, schedule, and tasks easily.
        </p>
      </section>

      <section className="quick-access">

        <h2>Quick Access</h2>

        <p>
          Easily access your academic information and manage your university life.
        </p>

        <div className="home-buttons">

          <Link to="/courses" className="home-btn">
            View Courses
          </Link>

          <Link to="/schedule" className="home-btn">
            View Schedule
          </Link>

          <Link to="/tasks" className="home-btn">
            View Tasks
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;