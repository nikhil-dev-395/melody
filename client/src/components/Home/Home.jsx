import { FaMusic } from "react-icons/fa"
import { Link } from "react-router-dom";
import { IoIosMusicalNote } from "react-icons/io";
import Slider from "../Slider/Slider";

const image = "https://images.unsplash.com/photo-1709566805289-881acfe97bbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8";



const Home = () => {



    const sampleData = [
        {
            toPlaylist: "aj",
            toSinger: "/singer/id",
            image: image,
            singersName: ["nikil", "arjun"],
            playlist: 'new relesae'

        },
        {
            toSinger: "/singer/id",
            image: image,
            singersName: ["a", "arjun"],
            playlist: 'new relesae'
        },
        {
            toSinger: "/singer/id",
            image: image,
            singersName: ["nikil", "arjun"],
            playlist: 'new relesae'

        },
        {
            toSinger: "/singer/id",
            image: image,
            singersName: ["a", "arjun"],
            playlist: 'new relesae'
        },
        {
            toSinger: "/singer/id",
            image: image,
            singersName: ["nikil", "arjun"],
            playlist: 'new relesae'

        },
        {
            toSinger: "/singer/id",
            image: image,
            singersName: ["a", "arjun"],
            playlist: 'new relesae'
        },
    ];
    const box = ({ toSinger, singersName, image, playlist, toPlaylist }, index) => {

        return (
            <Link to={toPlaylist} key={index}>
                <li className="max-w-56 max-h-72 bg-black rounded-md p-3 hover:cursor-pointer group relative shadow-indigo-300 shadow-2xl mx-[22px] my-6 text-white  
                hover:scale-110 duration-300
                " >
                    <img
                        src={image}
                        alt="image"
                        className="h-[180px] w-[180px] mx-auto rounded-[15%] p-2 object-cover group-hover:blur-[0.5px] group-hover:brightness-75"
                    />
                    <h3>{playlist}</h3>
                    <Link to={toSinger} className="max-w-40 max-h-32 text-[11px]   text-slate-50">
                        {singersName.join(", ")}
                    </Link>
                </li>
            </Link>
        );
    };

    return (

        <>

            <section>

                <main className="w-full h-full ">
                    <audio src="/public/audio/memories.mp3"></audio>

                    <h1 className="text-center text-[30px] capitalize py-7 flex items-center justify-center gap-7"> <span><FaMusic /></span> Listen to music without disturbance <span><FaMusic /></span></h1>
                    <hr className="bg-black py-[1px] w-[90%] mx-auto" />

                    <h2 className="text-xl mx-10 my-5 text-indigo-700">new releases ...</h2>
                    <ul className="flex flex-wrap px-24 gap-5">

                        {
                            sampleData.map((data, index) => (box(data, index)))
                        }

                    </ul>

                    <hr className="bg-indigo-400 py-1" />
                    <h2 className="w-1/2 mx-auto py-9 px-5 text-center text-3xl">
                        <span>
                            <IoIosMusicalNote />
                        </span>

                        Please welcome to the stage, a mesmerizing talent whose voice will captivate your soul, the incredible singer!

                        <span>
                            <IoIosMusicalNote />
                        </span>


                    </h2>
                    <Slider />

                    <h2 className="text-2xl text-center flex items-center justify-center gap-9 py-6 ">
                        <span>
                            <FaMusic />

                        </span>
                        Discover limitless melodies, create your own rhythm. Your musical journey starts here
                        <span>
                            <FaMusic />

                        </span>
                    </h2>

                </main>

            </section>
        </>
    )
}

export default Home