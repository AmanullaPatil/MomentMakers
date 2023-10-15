import React from 'react'

const Hero = () => {
    const user = localStorage.getItem('token')
    return (
        <>

            <section id="hero">

                <div className="hero-content" data-aos="fade-up">
                    <h2 style={{ fontSize: "45px" }}>Organize <span>your next event </span><br />With us...</h2>
                    <div>
                        {!user ?
                            <a href="/signup" className="btn-get-started scrollto">Register Today</a> :
                            <a href="/services" className="btn-get-started scrollto">Find Organizers</a>
                        }

                    </div>
                </div>

                <div className="hero-slider swiper">
                    <div className="swiper-wrapper">
                    </div>
                </div>

            </section>

        </>
    )
}

export default Hero