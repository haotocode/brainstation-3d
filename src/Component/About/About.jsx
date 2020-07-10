import React from 'react';
import '../About/About.scss'

export default function About() {
    return (
        <section className="about">
            <div className="about__hero-container">
                <h1 className="about__hero-title">Ed Tech for the Future</h1>
            </div>
            <div className="about__why-container">
                <p className="about__section-text">
                    why is educational technology important
                </p>
            </div>
            <div className="about__mission-container">
                <p className="about__section-text">
                    mission
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
