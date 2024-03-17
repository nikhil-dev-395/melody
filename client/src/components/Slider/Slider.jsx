
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

let image1 = "https://images.unsplash.com/photo-1710269389244-00268547a457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"

let image3 = "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
function Slider() {
    const images = [image1, image1, image3]; // Replace with your image URLs
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    setTimeout(() => {
        nextSlide()
    }, 1000);
    return (


        <>

            <div className="w-full h-auto  py-14 relative">
                <div className="w-80 h-96 y-5 px-8 bg-black text-white shadow-slate-700 shadow-2xl mx-auto ">
                    <button onClick={prevSlide} className='bg-black text-white py-3 px-10 absolute top-52 left-28'><FaArrowLeft /></button>
                    <Link to="/singer/id" className='mt-3'>singer name</Link>
                    <img src={images[currentSlide]} alt="" className=' w-72 h-1/2 rounded-lg border-2 border-white mt-7' />
                    <button onClick={nextSlide} className='bg-black text-white py-3 px-10 absolute top-52 right-28'><FaArrowRight /></button>

                    <div className="flex justify-between py-7">
                        <button className='text-2xl px-4 py-2 mx-4'><FaRegCommentAlt /><span className='text-[8px]'>2020</span></button>
                        <button className='text-2xl px-4 py-2'><AiFillLike /> <span className='text-[8px]'>2020</span> </button>
                        <button className='text-2xl px-4 py-2'><AiFillDislike /><span className='text-[8px]'>2020</span></button>

                    </div>
                </div>


            </div>

        </>
    );
}

export default Slider;
