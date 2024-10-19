import React from 'react'
import pat_01 from '../Assets/pat_01.png'
import pat_02 from '../Assets/pat_02.png'
import pat_03 from '../Assets/pat_03.png'
import Arrow from '../Assets/Chevron_Right_MD.png';

export const PetKnowlage = () => {

    const articles = [
        {
            image: pat_01,
            title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
            description:
                "The Pomeranian, also known as the Pomeranian (Pom dog), is always at the top of the cutest pets...",
        },
        {
            image: pat_02,
            title: "Dog Diet You Need To Know",
            description:
                "Dividing a dog’s diet may seem simple, but there are some rules you should know so that your dog...",
        },
        {
            image: pat_03,
            title:
                "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
            description:
                "Dog bites are common during development. However, no one wants to see their furniture or...",
        },
    ];

    return (
        <section className="py-12 px-12">
            <div className="container mx-auto px-4">
                
                <div className="mb-6 flex justify-between ">
                    <div>
                        <h2 className="text-lg text-gray-500">You already know?</h2>
                        <h1 className="text-3xl font-bold text-blue-900">
                            Useful Pet Knowledge
                        </h1>
                    </div>
                    <div className="flex items-center border border-darkBlue  rounded-full mt-4">
                        <button className="flex items-center text-darkBlue px-3 py-3 border-darkBlue">
                            View More
                        </button>
                        <img src={Arrow} alt="Play Icon" className="w-8 h-8 ml-3 pe-3 me-2" />
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />

                            <div className="p-6">
                                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                                    Pet knowledge
                                </span>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-700 mb-4">{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

