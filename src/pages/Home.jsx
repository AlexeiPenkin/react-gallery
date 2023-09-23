import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Photo from '../components/Photo';
import './Home.scss';

function Home() {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/streets")
            .then(response => {
                setGallery(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    return (
        <section className="home">
            <div className="container">
                <div className="photos">
                    {gallery.map(item => {
                        return (
                            <Photo 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Home;