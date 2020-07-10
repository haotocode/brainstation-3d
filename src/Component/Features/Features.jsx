import React from 'react';
import '../Features/Features.scss'

export default function Features() {
    return (
        <div className="features">
            <div className="features__hero-container">
                <h1 className="features__hero-title">Hero text here</h1>
            </div>
            <div className="features__mvp-container">
                <p className="features__section-text">MVP</p>
            </div>
            <div className="features__future-container">
                <p className="features__section-text">Future expansion</p>
            </div>
        </div>
    )
}
