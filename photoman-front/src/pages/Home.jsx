import React from 'react'
import Hero from '../Hero/Hero'
import Introduction from '../Introduction/Introduction';
import TopProjects from '../TopProjects/TopProjects';
import Contacts from '../Contacts/Contacts';

function Home(){
    return(
        <>
            <Hero/>
            <Introduction/>
            <Contacts/>
            <TopProjects/>
        </>
    )
}
export default Home;