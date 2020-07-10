import React from 'react';
import '../About/About.scss'

export default function About() {
    return (
        <section className="about">
            <div className="about__hero-container">
                <h1 className="about__hero-title">About Upgrade Arena</h1>
            </div>
            <div className="about__why-container">
                <p className="about__section-text">
                    why is educational technology important? This section is more than a summary of why we think education is important, particularly regarding ed tech.  Based on our recent experiences with online learning here at BrainStation, we feel strongly about an integrated platform that track student progress.
                </p>
            </div>
            <div className="about__mission-container">
                <p className="about__section-text">
                    Missions section - Virtual learning experience. We are not building a platform, we are building an immersive experience not only for classrooms but for the student's career in learning.
                </p>
            </div>
            <div className="about__fact-figures-container">
                <p className="about__section-text">
                    fact and figures
                </p>
            </div>
        </section>
    )
}
