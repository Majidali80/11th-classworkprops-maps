import React from 'react';
import ChildComponent from './ChildComponent';

const carName = () => {
  
    const cardetails = [
        { carName: "Toyota Corolla", carPrice: "PKR 59.7 - 75.5 lacs", carImage: "/to.jpg", carReview: "*****626 Reviews" },
        { carName: "Suzuki Alto", carPrice: "PKR 23.3 - 30.5 lacs", carImage: "/su.png", carReview: "*****202 Reviews" },
        { carName: "Honda City", carPrice: "PKR 46.5 - 58.5 lacs", carImage: "/ho.jpg", carReview: "*****457 Reviews" },
        
    ];
        
    return (
        <div className="flex flex-wrap my-4 text-black sm:my-2 md:my-4">
            {cardetails.map((car, index) => (
                <ChildComponent
                    key={index}
                    Pic={car.carImage} 
                    Make={car.carName}
                    Price={car.carPrice}
                    Review={car.carReview}
                />
            ))}
        </div>
    );
}

export default carName;
