import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <p>Check out my Services</p>
            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 xl:w-[70%] w-[70%] md:w-[90%]  my-6 z-[-1]'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;