import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = ( {title} ) => {
    const [services, setServices] = React.useState([
        {
            icon: <FaCocktail />,
            title: 'free cocktails',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita explicabo ducimus'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita explicabo ducimus'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free Shuttle',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita explicabo ducimus'
        },
        {
            icon: <FaBeer />,
            title: 'Strongest Beer',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita explicabo ducimus'
        }]
    )
    return (
        <section className='services'>
            <Title title='services' />
            <div className="services-center">
                {
                    services.map((service, index) => {
                        const { icon, title, info } = service
                        return(
                            <article key={index} className='service'>
                                <span>{icon}</span>
                                <h6>{title}</h6>
                                <p>{info}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
