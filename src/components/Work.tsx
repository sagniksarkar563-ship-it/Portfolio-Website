import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "AI Tomato Quality Classifier",
    category: "Deep Learning / Computer Vision",
    tools: "Python, Deep Learning, CNN, Google Colab",
    image: "/images/tomato_ai_project.jpg",
  },
  {
    title: "Live Camera Detection System",
    category: "Real-Time AI & Computer Vision",
    tools: "Python, Live Camera Stream, OpenCV, Inference",
    image: "/images/live_camera_ai.jpg",
  },
  {
    title: "Neural Model Pipeline & Training",
    category: "Machine Learning & Analytics",
    tools: "Python, Google Colab, Data Augmentation, Loss Curves",
    image: "/images/neural_model_colab.jpg",
  },
  {
    title: "Relational DBMS Architecture",
    category: "Database & Backend Systems",
    tools: "MySQL, Relational Schema, SQL Queries, Normalization",
    image: "/images/mysql_db_project.jpg",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const container = document.querySelector(".work-container");
      if (!container || !box[0].parentElement) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
