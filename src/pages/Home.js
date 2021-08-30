import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

const Home = (props) => {
    return (
        <>
            <Hero hero='defaultHero'>
                <Banner 
                    title='luxurious rooms' 
                    subtitle='deluxe rooms starting at 1500'
                >
                    <Link to='/' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>

            <Services />
            <FeaturedRoom />

        </>
    )
}

export default Home
