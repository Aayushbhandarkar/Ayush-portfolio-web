import React from 'react'
import Card from '../Card/Card'
import "./Project.css"
import va from "../../assets/va.png"
import Linkdin from "../../assets/linkdin.png"
import NotesApp from "../../assets/notesApp.png"
import CodeReviewer from "../../assets/codeReviewer.png"   // <-- Add your new project image

// icons
import { FaGithub, FaGlobe, FaVideo } from "react-icons/fa"

function Project() {
    return (
        <div id="projects">
            <h1 id="para">1+ YEARS EXPERIENCED IN PROJECTS </h1>
            <div className="slider">

                {/* AI Powered Code Reviewer & Bug Finder */}
                <div className="project-card">
                    <Card title="🤖 AI POWERED CODE REVIEWER & BUG FINDER" image={CodeReviewer} />
                    <div className="project-links">
                        <div className="link-item">
                            <a href="https://github.com/Aayushbhandarkar/Ai-powered-code-review.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} />
                            </a>
                            <span>Repo</span>
                        </div>
                        <div className="link-item">
                            <a href="https://ai-powered-code-review-udq1.onrender.com" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={28} />
                            </a>
                            <span>Website</span>
                        </div>
                        <div className="link-item">
                            <a href="https://drive.google.com/file/d/1g7MQck0-lFd2N_FlkwVJ6emI8it-I7fh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <FaVideo size={28} />
                            </a>
                            <span>Demo Video</span>
                        </div>
                    </div>
                </div>

                {/* AI Virtual Assistant */}
                <div className="project-card">
                    <Card title="AI VIRTUAL ASSISTANT WITH CHATBOT" image={va} />
                    <div className="project-links">
                        <div className="link-item">
                            <a href="https://github.com/Aayushbhandarkar/AI-virtual-Assistant.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} />
                            </a>
                            <span>Repo</span>
                        </div>
                        <div className="link-item">
                            <a href="https://ai-virtual-assistant-l6fy.onrender.com" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={28} />
                            </a>
                            <span>Website</span>
                        </div>
                    </div>
                </div>

                {/* LinkedIn Clone */}
                <div className="project-card">
                    <Card title="LINKDIN FULL STACK CLONE" image={Linkdin} />
                    <div className="project-links">
                        <div className="link-item">
                            <a href="https://github.com/Aayushbhandarkar/LinkedIn_mega.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} />
                            </a>
                            <span>Repo</span>
                        </div>
                        <div className="link-item">
                            <a href="https://drive.google.com/file/d/1T4V1Kilg5Ur6tG_BQ0s7Qg6Pz624rwAa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <FaVideo size={28} />
                            </a>
                            <span>Demo Video</span>
                        </div>
                    </div>
                </div>

                {/* Notes App */}
                <div className="project-card">
                    <Card title="📝 NOTES APP" image={NotesApp} />
                    <div className="project-links">
                        <div className="link-item">
                            <a href="https://github.com/Aayushbhandarkar/Notes-App.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} />
                            </a>
                            <span>Repo</span>
                        </div>
                        <div className="link-item">
                            <a href="https://notes-app-frontend-wy4p.onrender.com" target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={28} />
                            </a>
                            <span>Website</span>
                        </div>
                        <div className="link-item">
                            <a href="https://drive.google.com/file/d/1kb3haOpEp_ZlmW5t3Ja4BziyRT18Vy71/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <FaVideo size={28} />
                            </a>
                            <span>Demo Video</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project
