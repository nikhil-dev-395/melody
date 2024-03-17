import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>

            <h1 className="text-2xl pt-6 mx-5 text-indigo-600">Sign up to melody</h1>

            <main className="grid grid-cols-2 max-w-[70%] h-full pb-9  mx-auto ">


                {/* left part */}
                <div className="w-full text-center ">

                    <img src="/img/image.jpg" alt="" className="w-1/2 rounded-[50%] shadow-2xl mx-auto" />

                    <h2 className="py-3 mt-5">you have already account ? <Link to="/login" className="text-blue-500">Sign in</Link> </h2>

                    <h2 className="text-xl">lets login  account to listen melody </h2>
                </div>
                {/* right */}
                <div className="  w-full h-full py-2 px-14">

                    <form className="  ">

                        <label htmlFor="name  " className="block">name</label>
                        <input type="text" name="name" placeholder="  enter your name " className="border  outline-none border-slate-800 w-80 px-5 py-3" required />


                        <label htmlFor="email  " className="block mt-3">email</label>
                        <input type="text" name="email" placeholder="  enter your email " className="border  outline-none border-slate-800 w-80 px-5 py-3 " required />

                        <label htmlFor="password  " className="block mt-3">password</label>
                        <input type="text" name="password" placeholder="  enter your password " className="border outline-none border-slate-800 w-80 px-5 py-3" required />

                        <button className="bg-black text-white block mt-3 px-4 py-2 w-1/2 "> sign up</button>
                    </form>


                    <h2 className="text-center py-3">OR</h2>

                    <button className="flex items-center gap-4 border border-black px-4 py-2 w-[80%] justify-center"> <span><FcGoogle /></span> continue with google</button>

                </div>
            </main>

        </>
    )
}

export default Register