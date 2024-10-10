import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const options = {
    items: 3,
    loop: true,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        },
    },
};


const SlideItems = [
    {
        title: 'Modern Apartment With Pool',
        image: '../images/bg-4.jpg',
        rating: '1',


    },
    {
        title: 'Adobe Property Advisors',
        image: '../images/bg-3.jpg',
        rating: '2',
    },

    {
        title: 'Adobe Property Advisors',
        image: '../images/bg-4.jpg',
        rating: '3',

    },

    {
        title: 'Adobe Property Advisors',
        image: '../images/bg-4.jpg',
        rating: '4',

    },

    {
        title: 'Adobe Property Advisors',
        image: '../images/bg-4.jpg'
       

    }

];

const Homebanner = () => {
    return (
        <div className='main-slides-with-featured-area'>

            <OwlCarousel className="owl-theme" {...options}>

                {SlideItems.map((slide1, index) => (

                    <div key={index}>

                        <div className="slides-item-box item-five">
                            <div className="container">
                                <div className="slides-content-box">
                                    <div className="top-content">
                                        <ul className="tag-list">
                                            <li class="featured"><a>Featured</a></li>
                                            <li class="rent"><a>Rent</a></li>
                                        </ul>

                                        <div className="price">$5,500</div>
                                        <span>64 1st Avenue, High Street, NZ 1002</span>
                                        <h3>
                                            {slide1.title}
                                        </h3>
                                        <p>Apartment <span>(78 sq.m)</span></p>

                                        <ul className="featured-list">
                                            <li><i class="bx bx-bed"></i> 4 Bedrooms</li>
                                            <li><i class="bx bxs-bath"></i> 2 Baths</li>
                                            <li><i class="bx bx-car"></i> Free Parking</li>
                                        </ul>
                                    </div>

                                    <div className="bottom-content">
                                        <ul className="rating-list">


                                            {slide1.rating === '1' ? (
                                                <div className='home-slide-img'>star 1</div>
                                            ) : slide1.rating === '2' ? (
                                                <div className='home-slide-img'>star 2</div>
                                            ) : slide1.rating === '3' ? (
                                                <div className='home-slide-img'>star 3</div>
                                            )  : slide1.rating === '4' ? (
                                                <div className='home-slide-img'>star 4</div>
                                            ) : slide1.rating === '5' ? (
                                                <div className='home-slide-img'>star 5</div>
                                            ) :  (
                                                <div className='home-slide-img'>No rating</div>
                                            )}





                                            <li><i class="bx bxs-star"></i></li>
                                            <li><i class="bx bxs-star"></i></li>
                                            <li><i class="bx bxs-star"></i></li>
                                            <li><i class="bx bxs-star"></i></li>
                                            <li class="color-gray"><i class="bx bxs-star"></i></li>
                                            <li>Average</li>

                                        </ul>

                                        <div className="slides-btn">
                                            <a class="default-btn">KNOW DETAILS <span></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {slide1.image ? (
                            <div className='home-slide-img'><img src={slide1.image} alt="img" /></div>
                        ) : (
                            <div className='home-slide-img'><h1>no image</h1></div>
                        )}

                        {/* loop over the pets */}

                    </div>
                ))}

            </OwlCarousel>

  
        </div>

    );

};

export default Homebanner;
