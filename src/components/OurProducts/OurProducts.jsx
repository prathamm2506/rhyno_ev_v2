import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img2 from "../../assets/webp/Product2.webp";
import Img1 from "../../assets/webp/Product1.webp";
import Img3 from "../../assets/webp/product3.webp";
import rightArrow from "../../assets/right-arrow.svg";
import leftArrow from "../../assets/left-arrow.svg";
import './OurProducts.css';

const OurProducts = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const showSlider = (type) => {
        if (isAnimating) return;
        setIsAnimating(true);

        carouselRef.current.style.pointerEvents = 'none';

        carouselRef.current.classList.remove('next', 'prev');
        let items = listRef.current.children;
        if (type === 'next') {
            listRef.current.appendChild(items[0]);
            carouselRef.current.classList.add('next');
        } else {
            listRef.current.prepend(items[items.length - 1]);
            carouselRef.current.classList.add('prev');
        }

        setTimeout(() => {
            setIsAnimating(false);
            carouselRef.current.style.pointerEvents = 'auto';
        }, 2000);
    }

    const handleMouseMove = (e) => {
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const halfWidth = carouselRect.width * 0.37;
    
        // if (e.clientX > carouselRect.left + halfWidth) {
        //     console.log(`Setting cursor to right arrow: url(${rightArrow}) 16 16, auto`);
        //     carouselRef.current.style.cursor = `url(${rightArrow}) 16 16, auto`;
        // } else {
        //     console.log(`Setting cursor to left arrow: url(${leftArrow}) 16 16, auto`);
        //     carouselRef.current.style.cursor = `url(${leftArrow}) 16 16, auto`;
        // }
    }
    

    const handleClick = (e) => {
        if (isDetailOpen) return;

        const carouselRect = carouselRef.current.getBoundingClientRect();
        const halfWidth = carouselRect.width * 0.37;

        if (e.clientX > carouselRect.left + halfWidth) {
            showSlider('next');
        } else {
            showSlider('prev');
        }
    }

    const handleSeeMoreClick = () => {
        carouselRef.current.classList.remove('next', 'prev');
        carouselRef.current.classList.add('showDetail');
        setIsDetailOpen(true);
    }

    const handleBackClick = () => {
        carouselRef.current.classList.remove('showDetail');
        setTimeout(() => {
            setIsDetailOpen(false);
        }, 2000);
    }

    const navigate = useNavigate();
    const handleCheckout = (to) => {
      navigate(to);
      window.scrollTo(0, 0);
    };

    useEffect(() => {
        const seeMoreButtons = carouselRef.current.querySelectorAll('.seeMore');
        seeMoreButtons.forEach(button => {
            button.onclick = handleSeeMoreClick;
        });
    }, []);

    return (
        <div
            className="carousel"
            ref={carouselRef}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            <div className="list" ref={listRef}>
                {products.map((product, index) => (
                    <div className="item" key={index}>
                        <img src={product.image} alt={product.topic} />
                        <div className="introduce">
                            <div className="title">OUR PRODUCT</div>
                            <div className="topic">{product.topic}</div>
                            <div className="des">{product.description}</div>
                            <button className="seeMore">
                                SEE MORE &#8599;
                            </button>
                        </div>
                        <div className="detail">
                            <div className="title">{product.detailTitle}</div>
                            <div className="des">{product.detailDescription}</div>
                            <div className="specifications">
                                {product.specifications.map((spec, index) => (
                                    <div key={index}>
                                        <p>{spec.name}</p>
                                        <p>{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="checkout">
                                <button onClick={() => {handleCheckout(product.nevigatTo)}} >CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="back" onClick={handleBackClick}>
                    See All &#8599;
                </button>
            </div>
        </div>
    );
};

const products = [
    {
        image: `${Img1}`,
        topic: 'SE03',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
        detailTitle: 'SE03',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
            { name: 'Title1', value: 'value1' },
            { name: 'Title2', value: 'value2' },
            { name: 'Title3', value: 'value3' },
            { name: 'Title4', value: 'value4' },
            { name: 'Title5', value: 'value5' },
        ],
        nevigatTo: '/SE03',
    },
    {
        image: `${Img2}`,
        topic: 'SE03 MAX',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
        detailTitle: 'SE03 MAX',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
            { name: 'Title1', value: 'value1' },
            { name: 'Title2', value: 'value2' },
            { name: 'Title3', value: 'value3' },
            { name: 'Title4', value: 'value4' },
            { name: 'Title5', value: 'value5' },
        ],
        nevigatTo: '/SE03MAX',
    },
    {
        image: `${Img3}`,
        topic: 'SE03 LITE',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
        detailTitle: 'SE03 LITE',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
            { name: 'Title1', value: 'value1' },
            { name: 'Title2', value: 'value2' },
            { name: 'Title3', value: 'value3' },
            { name: 'Title4', value: 'value4' },
            { name: 'Title5', value: 'value5' },
        ],
        nevigatTo: '/SE03LITE',
    },
    {
        image: `${Img1}`,
        topic: 'SE03',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
        detailTitle: 'SE03',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
            { name: 'Title1', value: 'value1' },
            { name: 'Title2', value: 'value2' },
            { name: 'Title3', value: 'value3' },
            { name: 'Title4', value: 'value4' },
            { name: 'Title5', value: 'value5' },
        ],
        nevigatTo: '/SE03',
    },
    {
        image: `${Img2}`,
        topic: 'SE03 MAX',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
        detailTitle: 'SE03 MAX',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
            { name: 'Title1', value: 'value1' },
            { name: 'Title2', value: 'value2' },
            { name: 'Title3', value: 'value3' },
            { name: 'Title4', value: 'value4' },
            { name: 'Title5', value: 'value5' },
        ],
        nevigatTo: '/SE03MAX',
    },
    {
        image: `${Img3}`,
        topic: 'SE03 LITE',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
        detailTitle: 'SE03 LITE',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
            { name: 'Title1', value: 'value1' },
            { name: 'Title2', value: 'value2' },
            { name: 'Title3', value: 'value3' },
            { name: 'Title4', value: 'value4' },
            { name: 'Title5', value: 'value5' },
        ],
        nevigatTo: '/SE03LITE',
    },
];

export default OurProducts;
