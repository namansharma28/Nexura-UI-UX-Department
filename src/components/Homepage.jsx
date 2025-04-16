import { useState, useEffect, useRef } from "react";
import "../assets/Homepage.css";
import CustomScrollbar from "./CustomScrollbar";
import Contact from "./Contact";
import ProjectCard from "./ProjectCard";
import project1Video from "/projects/project1.mp4";
import Dropdown from "./Team";
import harry from "/projects/harry potter prototype.gif";
import food from "/projects/food_website.gif"
import School from "/projects/School Webpage.png";
import project2Video from "/projects/project2.mp4";
import project3Video from "/projects/project3.mp4";
import project4Video from "/projects/project4.mp4";

// Add this projects data array before the Homepage component
const projectsData = [
  {
    cardTitle: "Project 1",
    cardDescription: "lorem ipsum",
    title: "jhsdvahefj,wbefj.ewf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nesciunt accusantium repellendus nobis provident reprehenderit aliquam, soluta voluptatem magnam excepturi id, architecto incidunt sequi amet dicta veniam qui sit molestiae nihil minus neque cumque temporibus. Corporis dicta iure labore, provident ipsa est, impedit adipisci consequuntur perferendis quaerat dolore libero possimus.",
    videoSrc: project1Video,
  },
  {
    cardTitle: "Project 2",
    cardDescription: "lorem ipsum",
    title: "Nike",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem, quaerat magni dolorem repellat magnam aperiam exercitationem amet! Blanditiis molestias assumenda distinctio quia saepe libero possimus cumque explicabo ullam! Recusandae odio, quos laboriosam molestiae vero harum ipsam cupiditate quas tempora doloremque ad architecto quam saepe ducimus voluptatum adipisci nihil voluptas!",
    videoSrc: project2Video,
  },
  {
    cardTitle: "Project 3",
    cardDescription: "lorem ipsum",
    title: "Nike",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem, quaerat magni dolorem repellat magnam aperiam exercitationem amet! Blanditiis molestias assumenda distinctio quia saepe libero possimus cumque explicabo ullam! Recusandae odio, quos laboriosam molestiae vero harum ipsam cupiditate quas tempora doloremque ad architecto quam saepe ducimus voluptatum adipisci nihil voluptas!",
    videoSrc: project3Video,
  },
  {
    cardTitle: "Project 4",
    cardDescription: "lorem ipsum",
    title: "Nike",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem, quaerat magni dolorem repellat magnam aperiam exercitationem amet! Blanditiis molestias assumenda distinctio quia saepe libero possimus cumque explicabo ullam! Recusandae odio, quos laboriosam molestiae vero harum ipsam cupiditate quas tempora doloremque ad architecto quam saepe ducimus voluptatum adipisci nihil voluptas!",
    videoSrc: project4Video,
  },
  // Add more projects as needed
];

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const laptopContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll animation
  const handleScroll = () => {
    if (!laptopContainerRef.current) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const laptopElement = laptopContainerRef.current;
    const laptopRect = laptopElement.getBoundingClientRect();

    // Calculate how much of the laptop is visible in the viewport
    const visibleHeight =
      Math.min(windowHeight, laptopRect.bottom) - Math.max(0, laptopRect.top);

    // Calculate progress based on visibility and scroll position
    const maxScroll = windowHeight * 0.6; // Adjust this value to control zoom speed
    const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);

    setScrollProgress(progress);
    setIsFullyScrolled(progress >= 0.95);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle video loading
  useEffect(() => {
    const video = document.getElementById("laptop-video");
    if (video) {
      video.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  const laptopStyle = {
    transform: `
      perspective(2000px)
      rotateX(${15 - scrollProgress * 15}deg)
      scale(${0.8 + scrollProgress * 0.8})
      translateY(${scrollProgress * -20}vh)
    `,
    transition: "transform 0.3s ease-out",
  };

  const screenStyle = {
    transform: `translateY(${scrollProgress * -2}%)`,
    borderRadius: `${20 - scrollProgress * 20}px ${
      20 - scrollProgress * 20
    }px 0 0`,
    transition: "transform 0.3s ease-out, border-radius 0.3s ease-out",
  };

  const contentStyle = {
    opacity: isFullyScrolled ? 1 : 0,
    visibility: isFullyScrolled ? "visible" : "hidden",
    transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
    marginTop: "100vh",
  };

  const progressBarStyle = {
    width: `${Math.min(scrollProgress * 100, 100)}%`,
    transition: "width 0.1s ease-out",
  };

  const [progress, setProgress] = useState(0);
  const labels = [
    "Initializing Nexura.UI...",
    "Injecting creativity.fig...",
    "Redesigning innovation...",
    "Testing Design...",
    "Execution complete ✅"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset to 0% after reaching 100%
        } else {
          return prev + 25; // Increment by 25%
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const labelIndex = progress / 25; // For 0%, 25%, 50%, 75%, and 100%


  return (
    <div className="homepage">
      <CustomScrollbar />
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={progressBarStyle}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div
          className="laptop-container"
          ref={laptopContainerRef}
          style={laptopStyle}
        >
          <div className="laptop-frame">
            <div className="laptop-screen" style={screenStyle}>
              <div className="laptop-content">
                {/* Video Background */}
                <div className="video-background">
                  <video id="laptop-video" autoPlay muted loop playsInline>
                    <source
                      src={import.meta.env.BASE_URL + "laptop_bg.mov"}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay"></div>
                </div>

                <div className="laptop-header">
                  <div className="laptop-logo">
                    <span className="logo-dot"></span>
                    Nexura
                  </div>
                </div>
                <div className="laptop-body">
                  <div className="hero-content">
                    <h1>
                      <span>&lt; Nexura &gt;</span>
                      We make it pretty
                      <span>and Smart!!</span>
                    </h1>
                    <p>Blending beauty with usability.</p>
                    <div className="cta-buttons">
                      <button className="primary-btn">Learn More</button>
                    </div>
                  </div>
                  <div className="laptop-metrics">
                  <div className="analyzing-text">
        {labels[labelIndex]} {/* Dynamically show the correct label */}
        <span className="percentage"> {progress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            transition: progress === 0 ? "none" : "width 1s ease-in-out"
          }}
        ></div>
                    </div>
                    <div className="experience-boost">EXPERIENCE BOOST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className={`scroll-down-indicator ${
            scrollProgress > 0.1 ? "fade-out" : ""
          }`}
        >
          <div className="scroll-arrow"></div>
          <div className="scroll-text">Scroll to Fetch</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>WHY US?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Mentorship That Matters</h3>
            <p>
              Learn from experienced developers who guide you through every
              challenge.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Hands-On Experience</h3>
            <p>
              Build real-world projects, join hackathons, and go beyond just
              theory.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community & Collaboration</h3>
            <p>Connect, code, and create with like-minded tech enthusiasts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trust & Reliability</h3>
            <p>
              Whether for college projects or professional freelancing, we
              prioritize transparency, security, and quality in every project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>
            For GEEKS <span className="small">(Designers)</span>
          </h2>
          <p>
          At Nexura.UI, our UI/UX team is on a mission to make users fall in love at first click. We obsess over the little things—like pixel-perfect spacing, buttery-smooth buttons, and layouts that just feel right. If it looks clean and works like magic, you can bet we had something to do with it.


          </p>
          <p>
          But don’t let the pretty pixels fool you—we’re problem solvers at heart. We design with brains and style, crafting experiences that are as functional as they are fabulous. Whether it’s a sleek web app or a snappy mobile UI, we make sure every swipe, tap, and scroll feels like a high-five.
          </p>
        </div>
        <div className="about-image">
          <div className="placeholder-image"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="open-source" className="services">
        <h2>Our Niche</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Versatile Design Expertise
            </h3>
            <p>
            Covers a wide range of design solutions including websites, mobile apps, posters, and promotional banners.

            </p>
          </div>
          <div className="service-card">
            <h3>Bold Visual Storytelling
            </h3>
            <p>
            Focuses on impactful visuals with strong typography, dark themes, and modern design elements.
            </p>
          </div>
          <div className="service-card">
            <h3>Thematic Creativity
            </h3>
            <p>
            Incorporates unique design styles such as torn paper effects, futuristic layouts, and theme-based compositions.
            </p>
          </div>
          <div className="service-card">
            <h3>User-Centered Approach
            </h3>
            <p>
            Prioritizes usability and aesthetics to ensure designs are both engaging and intuitive.            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="projects" className="services">
        <h2>Our Brag-Worthy Projects</h2>
        <div className="services-container">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              cardTitle={project.cardTitle}
              cardDescription={project.cardDescription}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
            />
          ))}
        </div>
      </section>
      <section id="Team" className="services">
        <h2>Brains Behind the Design</h2>
        <Dropdown />
      </section>
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Nexura</h2>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#features">Projects</a>
                </li>
                <li>
                  <a href="#open-source">About Us</a>
                </li>
                <li>
                  <a href="#Team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick links</h3>
              <ul>
                <li>
                  <a href="#">Main Website</a>
                </li>
                <li>
                  <a href="#">Join Us</a>
                </li>
                <li>
                  <a href="#">Website Designing Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul className="social-links">
                <li>
                  <a href="https://github.com/NexuraRGPV">GitHub</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nexura_rgpv/">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nexura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
