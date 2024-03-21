import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        RegisterUser();
    }
    const RegisterUser = async () => {

        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                name, email, password
            });

            let res = await response.data;
            console.log(res);

        } catch (error) {
            console.log("Error", error);
        }

    }


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

                    <form className="  " onSubmit={handleSubmit}>

                        <label htmlFor="name  " className="block">name</label>
                        <input type="text" name="name" placeholder="  enter your name " className="border  outline-none border-slate-800 w-80 px-5 py-3" required
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />


                        <label htmlFor="email  " className="block mt-3">email</label>
                        <input type="email" name="email" placeholder="  enter your email " className="border  outline-none border-slate-800 w-80 px-5 py-3 " required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password  " className="block mt-3">password</label>
                        <input type="password" name="password" placeholder="  enter your password " className="border outline-none border-slate-800 w-80 px-5 py-3" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="bg-black text-white block mt-3 px-4 py-2 w-1/2 "> sign up</button>
                    </form>


                    <h2 className="text-center py-3">OR</h2>

                    <button className="flex items-center gap-4 border border-black px-4 py-2 w-[80%] justify-center" onClick={RegisterUser}> <span><FcGoogle /></span> continue with google</button>

                </div>
            </main>

        </>
    )
}

export default Register