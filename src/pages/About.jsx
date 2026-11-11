
function About() {
  return (
    <div className="page-container about-page">

      <section className="about-header">
        <h1>About UniHub</h1>
        <p>
          Making university life easier, more organized, and more productive.
        </p>
      </section>

      <section className="about-intro">
        <h2>What is UniHub?</h2>

        <p>
          UniHub is a student platform designed to help university students
          organize their academic life in one place. University students
          often have many responsibilities, including courses, class
          schedules, assignments, and deadlines.
        </p>

        <p>
          Our platform provides simple and useful tools that allow students
          to manage their courses, organize their weekly schedules,
          keep track of their tasks, and stay updated with their academic
          responsibilities.
        </p>

        <p>
          With UniHub, students can save time, stay organized, and focus
          more on achieving their academic goals.
        </p>
      </section>

      <section className="about-mission">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make academic organization easier by providing
            students with a simple and accessible platform to manage their
            university responsibilities.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to create a better university experience where students
            can manage their academic activities efficiently and stay
            organized throughout their studies.
          </p>
        </div>
      </section>

      <section className="about-features">
        <h2>What Can You Do With UniHub?</h2>

        <div className="about-features-grid">

          <div className="about-feature-card">
            <h3>Course Management</h3>
            <p>
              Add and manage your university courses in one organized place.
            </p>
          </div>

          <div className="about-feature-card">
            <h3>Weekly Schedule</h3>
            <p>
              Organize your classes by day, time, and classroom.
            </p>
          </div>

          <div className="about-feature-card">
            <h3>Task Management</h3>
            <p>
              Keep track of assignments, projects, and important tasks.
            </p>
          </div>

          <div className="about-feature-card">
            <h3>Better Organization</h3>
            <p>
              Manage your academic responsibilities from one convenient
              platform.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
