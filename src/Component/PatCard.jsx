import React, { useEffect, useState } from 'react';
import Arrow from '../Assets/Chevron_Right_MD.png';

export const PatCard = () => {
    const [pets, setPets] = useState([]);

    // API function for fetching the data
    const FeachPets = async () => {
        try {
            const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
            if (response.ok) {
                const data = await response.json();
                setPets(data);
            } else {
                alert("An error occurred while fetching data");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("An error occurred while fetching data");
        }
    };

    // Fetching pets from the API
    useEffect(() => {
        FeachPets();
    }, []);

    return (
        <div className="container mx-auto pt-7 px-12">

            {/* header content */}
            <div className="mb-6 flex justify-between ">
                <div>
                    <p>Whats new?</p>
                    <h2 className="text-3xl font-bold text-orange-200">Take a look at some of our pets</h2>
                </div>
                <div className="flex items-center border border-darkBlue  rounded-full mt-4">
                    <button className="flex items-center text-darkBlue px-3 py-3 border-darkBlue">
                        View More
                    </button>
                    <img src={Arrow} alt="Play Icon" className="w-8 h-8 ml-3 pe-3 me-2" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pets.length > 0 ? (
                    pets.map((pet, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Card Head with Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={pet.image}
                                    alt={pet.breed}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            {/* Card Body with Details */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{pet.id} - {pet.breed}</h3>
                                <div className='flex gap-3'>
                                    <p className='text-NeutralColor'>
                                        Gene: <span className="font-bold">{pet.gender}</span>
                                    </p> <h1>.</h1>
                                    <p className='text-NeutralColor'>
                                        Age: <span className="font-bold">{pet.age}</span>
                                    </p>
                                </div>
                                <p className="text-sm-black font-semibold mt-1">{pet.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading pets...</p>
                )}
            </div>
        </div>
    );
};
