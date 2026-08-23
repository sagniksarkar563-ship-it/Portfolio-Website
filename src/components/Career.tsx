import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA - AI & ML</h4>
                <h5>Jain (Deemed-to-be) University, Bangalore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Bachelor of Computer Applications with specialization in Artificial Intelligence and Machine Learning (Aug 2024 - May 2027). Currently holding 7.8 SGPA (3rd Semester), focused on deep learning, computer vision, DSA, and DBMS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Intern</h4>
                <h5>Wells Fargo</h5>
              </div>
              <h3>Jul 2026</h3>
            </div>
            <p>
              Internship focused on applied machine learning and AI development. Worked on real-world projects involving deep learning, computer vision, and data pipelines. (Update this description with your actual work.)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>IBM, Packt & Jain Group</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Certified in Introduction to Software Engineering [IBM], Project Management Best Practices using Agile and Scrum [Packt], and Java Fundamentals, OOPs & Inheritance [Jain Group].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
