import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer( {contex} ){
    const { loading, sortedRooms, rooms } = contex;

    if(loading){
        return <Loading />
    }

    return(
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer)



// *****************
// SECOND METHOD
// *****************

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import loading from './Loading'

// const RoomContainer = (props) => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return <loading />
//                     }
//                     return(
//                         <div>
//                             hello from room container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }

// export default RoomContainer
