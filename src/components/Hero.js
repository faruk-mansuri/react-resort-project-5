import React from 'react'

function Hero( {children, hero} ) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

export default Hero

Hero.defaultProps = {
    hero: 'defaultHero'
};
