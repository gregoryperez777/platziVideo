import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss'

const API = 'http://127.0.0.1:9000/initialState'

const App = () => {

    const initialState = useInitialState(API);

    return (
        <div className="App">
            <Header />
            <Search />

            {initialState.mylist.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel>
                    {
                        initialState.mylists.map((item) => <CarouselItem key={item.id} {...item} />)
                    }
                    </Carousel>
                </Categories>
            } 

            {initialState.trends.length > 0 &&  
                <Categories title="Tendencias">
                    <Carousel>
                        {
                            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
                        }
                        <CarouselItem />
                    </Carousel>
                </Categories>
            } 

            {initialState.originals.length > 0 && 
                <Categories title="Originales de Platzi Videos">
                    <Carousel>
                        {
                            initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
                        }
                    </Carousel>
                </Categories>
            }
            <Footer />
        </div>
    );
}

export default App;
