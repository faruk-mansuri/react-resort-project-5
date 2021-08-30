import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'

// get all unique value

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]
}
const RoomsFilter = (props) => {
    const context = useContext(RoomContext);
    const { 
        rooms,
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        maxSize,
        minSize,
        breakfast,
        pets
    } = context;

    let types = getUnique(rooms, 'type');
    types = ['all', ...types]
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })
    
    return (
        <section className="filter-container">
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        id='type'
                        name="type" 
                        value={type} 
                        className='form-control'
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end of select type */}

                {/* guest type */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                        id='capacity'
                        name="capacity" 
                        value={capacity} 
                        className='form-control'
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end of guest type */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price"> rrom price ${price}</label>
                    <input 
                        type="range"
                        name='price'
                        min={minPrice}
                        max={maxPrice}
                        id='price'
                        value={price}
                        onChange={handleChange}
                        className='form-control' 
                    />
                </div>
                {/* end of room price */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input 
                            type="number" 
                            name='minSize' 
                            id='size' 
                            value={minSize} 
                            onChange={handleChange}
                            className='size-input'
                        />
                        <input 
                            type="number" 
                            name='maxSize' 
                            id='size' 
                            value={maxSize} 
                            onChange={handleChange}
                            className='size-input'
                        />
                    </div>
                </div>
                {/* end of size */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name='breakfast' 
                            id='breakfast'
                            checked={breakfast} 
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name='pets' 
                            id='pets'
                            checked={pets} 
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomsFilter
