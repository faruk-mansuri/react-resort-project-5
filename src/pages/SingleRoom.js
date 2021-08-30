import React, { Component } from 'react'
import defaultbcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }

    static contextType = RoomContext;

    componentDidMount(){

    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        
        
        if(!room){
            return (
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to='/' className='btn-primary'>back to hoom</Link>
                </div>
            )
        }
        
        const {
            name, 
            description, 
            capacity, 
            size, 
            price, 
            extras, 
            breakfast, 
            pets, 
            images 
        } = room;
        
        const [mainImg, ...defaultImg] = images;
        
        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`} >
                        <Link to='/' className='btn-primary'>back to room</Link>
                    </Banner>
                </StyledHero >

                <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((img, index) => {
                                return(
                                    <img key={index} src={img} alt={name} />
                                )
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : {price} </h6>
                            <h6>sixe : {size} SQFT </h6>
                            <h6>max capacity : {
                                capacity > 1 ? `${capacity} people` : `1 person`}
                            </h6>
                            <h6>pets : { pets ? `pets allowed` : 
                                'no pets allowed'} 
                            </h6>
                            <h6> {breakfast && `free breakfast` } </h6>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>extras</h6>
                    <ul className="extras">
                        {
                            extras.map((item, index) => {
                                return (
                                    <li key={index}> {item} </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom

