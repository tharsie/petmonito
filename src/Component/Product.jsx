import React, { useEffect, useState } from 'react'
import Arrow from '../Assets/Chevron_Right_MD.png'
import gift from '../Assets/Gift.png'

export const Product = () => {
    const [products,SetProducts] = useState([]);

    // API function for fetching the data
    const FeachProdects = async () => {
        try {
            const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
            if (response.ok) {
                const data = await response.json();
                SetProducts(data);
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
        FeachProdects();
    }, []);

    console.log(products)

    return (
        <div className="container mx-auto pt-7 px-12">

            {/* header content */}
            <div className="mb-6 flex justify-between ">
                <div>
                    <p>Hard to choose right products for your pets?</p>
                    <h2 className="text-2xl font-bold text-PrimaryDarBlue">Our Products</h2>
                </div>
                <div className="flex items-center border border-darkBlue  rounded-full mt-4">
                    <button className="flex items-center text-darkBlue px-3 py-3 border-darkBlue">
                        View More
                    </button>
                    <img src={Arrow} alt="Play Icon" className="w-8 h-8 ml-3 pe-3 me-2" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Card Head with Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt=''
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            {/* Card Body with Details */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <div className='flex gap-3'>
                                    <p className='text-NeutralColor'>product: <span className='font-bold'>{product.product}</span></p>
                                    <p className='text-NeutralColor'>Size: <span className='font-bold'>{product.size}</span></p>
                                </div>
                               
                                <p className="text-sm-black font-semibold mt-1">Price: <span>{product.price}</span></p>
                            </div>

                            <div className='bg-MonYellow mx-5 mb-5 flex gap-2  p-1 rounded-lg text-PrimaryDarBlue font-bold'>
                                <img src={gift} alt="" />
                                <h1>.</h1>
                                <p >{product.description}</p>
                            </div>
                        </div>

                       


                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading pets...</p>
                )}
            </div>
        </div>
    );
}
