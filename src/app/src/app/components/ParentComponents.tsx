import React from 'react';
import ChildComponent from './ChildComponent';

const carName = () => {
  
    const cardetails = [
        { carName: "Toyota Corolla", carPrice: "PKR 59.7 - 75.5 lacs", carImage: "/images/to.jpg", carReview: "★★★☆☆626 Reviews" },
        { carName: "Suzuki Alto", carPrice: "PKR 23.3 - 30.5 lacs", carImage: "/Images/su.png", carReview: "★★★☆☆202 Reviews" },
        { carName: "Honda City", carPrice: "PKR 46.5 - 58.5 lacs", carImage: "/Images/ho.jpg", carReview: "★★★☆☆457 Reviews" },
        
    ];
        
    return (
        <div className="flex py-5 px-14 gap-4 flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-nowrap lg:w-full">
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
