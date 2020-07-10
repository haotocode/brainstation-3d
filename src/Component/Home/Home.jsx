import React from 'react';
import '../Home/Home.scss';



const Home = () => {
    return (
        <section className="home">
            <div className="home__hero-container">
                <div className="home__hero-text-container">
                    <div className="home__hero-text-container2">
                        <p className="home__hero-text">hi there!</p>
                        <p className="home__hero-text">Online Education Environment</p>
                    </div>
                </div>
            </div>
            <div className="home__hero-summary-container">
                <p className="home__hero-summary">This section is a brief overview of our educational platform and why we are passionate about this technology.</p>
            </div>
        </section>
    )
}

export default Home;