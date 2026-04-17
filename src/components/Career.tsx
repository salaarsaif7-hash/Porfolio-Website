import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Freelance Collaboration</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Joined a friend who was working in freelancing as a Frontend Developer. 
              Collaborated on multiple projects together, gaining hands-on experience 
              in building modern web interfaces and delivering client projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Sheryan's Cohort 1</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Joined Sheryan's Cohort 1 and leveled up to Full Stack Development. 
              Learned and built almost everything from there — from frontend to backend. 
              Also completed a 6-month internship at Mountech, where I applied my 
              skills in a real-world professional environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & DevOps Engineer</h4>
                <h5>Freelance & Startup</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>   Currently expanding into DevOps Engineering alongside Full Stack Development. 
              About to launch freelancing services and actively working on my own startup 
              idea — building it from the ground up. InshAllah, it will be live soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;