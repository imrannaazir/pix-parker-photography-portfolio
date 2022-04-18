import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams()

    return (
        <div>
            this is checkout page
            <p>{serviceId}</p>

        </div>
    );
};

export default Checkout;