
import React, { useState, useEffect } from "react";

function IndexPage() {
    const [newsTrip, setnewsTrip] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const fetchnews = await fetch('https://newsapi.org/v2/top-headlines?apiKey=ec32aeafdb5a4d2eb4087e4822970d5d&q=trip');
                const data = await fetchnews.json();

                setnewsTrip(data.articles)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg text-primary mb-2 block">
                                vayage
                            </span>
                            <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
                                Our Recent News
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        {newsTrip.map((items) => (
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={items.title} >
                                <div className="max-w-[370px] mx-auto mb-10">
                                    <div className="rounded overflow-hidden mb-8">
                                        <img
                                            src={items.urlToImage}
                                            alt={items.title}
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <span
                                            className="bg-primary rounded text-center py-1 px-4 text-xs inline-block leading-loose font-semibold text-white mb-5">
                                            {items.publishedAt}
                                        </span>
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="
                    font-semibold
                    text-xl
                    sm:text-2xl
                    lg:text-xl
                    xl:text-2xl
                    mb-4
                    inline-block
                    text-dark
                    hover:text-primary
                    "
                                            >
                                               {items.title}
                                            </a>
                                        </h3>
                                        <p className="text-base text-body-color">
                                            {items.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center ">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-danger  dark:text-gray-400">Load more posts...</button>
                </div>
            </section>
            
        </>
    );
}

export default IndexPage;
