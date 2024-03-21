import { MdAudiotrack } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io"
import { FaUserAlt } from "react-icons/fa";



const Navbar = () => {

    // const location = useLocation


    const linksContent = [
        {
            id: 1,
            icon: <FaHome />,
            linkAddress: "/",
        },
        {
            id: 2,
            icon: <FaSearch />,
            linkAddress: "/search",
        },
        {
            id: 3,
            icon: <FaBookmark />,
            linkAddress: "/playlist",
        },
        {
            id: 4,
            icon: <FaMusic />,
            linkAddress: "/top-music",
        },
        {
            id: 5,
            icon: <FaHistory />,
            linkAddress: "/history",
        },
    ];

    return (
        <section className=" w-full h-20  bg-black">
            <div className="flex justify-around bg-black text-white max-w-[90%] h-20  mx-auto items-center  font-sans">
                <Link className="" to="/">
                    <h1
                        className="flex items-center font-mono font-bold shadow-xl py-3 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text"
                    >
                        <MdAudiotrack className=" text-xl text-purple-500 " />
                        melody
                    </h1>
                </Link>

                <ul className="flex gap-10 max-w-[80%] capitalize">
                    {linksContent.map((item) => (
                        <li
                            className="flex items-center gap-1 hover:bg-slate-300 hover:text-black py-2 px-3  "
                            key={item.id}

                        >
                            <NavLink to={item.linkAddress} className="flex items-center gap-2 w-full h-full">
                                {item.icon}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center gap-9">
                    <li className="bg-white hover:bg-gradient-to-t from-indigo-400 to-pink-400 text-black py-2 px-3 rounded-md">
                        <button>
                            <Link to='/login' className="py-4 px-2">Login</Link>
                        </button>
                    </li> <li className="bg-white hover:bg-gradient-to-t from-indigo-400  to-pink-400 text-black py-2 px-3 rounded-md">
                        <button>
                            <Link to='/register' className="py-4">Register</Link>
                        </button>
                    </li>
                    <li className="bg-white hover:bg-gradient-to-t from-indigo-400  to-pink-400 text-black py-2 px-3 rounded-md">
                        <button>
                            <Link to='/register' className="py-4"><FaUserAlt /></Link>
                        </button>
                    </li>
                    <li className="text-white text-[30px] ml-14">
                        <Link to='/settings'>
                            <IoIosSettings />
                        </Link>

                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;

