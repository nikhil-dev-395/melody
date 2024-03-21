import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    axios.defaults.withCredentials = true;
    let handleSubmit = (event) => {
        event.preventDefault();
    }

    function signIN() {
        console.log(email, password);

        axios.post("http://localhost:3000/api/v1/user/signin", {
            email, password
        }).then(data => {
            console.log(data)
            if (data.statusText == "OK") {
                navigate("/")
            }

        }).catch(err => { console.log(err) })


    }


    return (
        <>

            <h1 className="text-2xl pt-6 mx-5 text-indigo-600">Sign in to melody</h1>

            <main className="grid grid-cols-2 max-w-[70%] h-auto  mx-auto py-14">


                {/* left part */}
                <div className="w-full text-center ">

                    <img src="/img/image.jpg" alt="" className="w-1/2 rounded-[50%] shadow-2xl mx-auto" />

                    <h2 className="py-3 mt-5">dont have already account ? <Link to="/register" className="text-blue-500">Sign Up</Link> </h2>

                    <h2 className="text-xl">lets create account to listen melody </h2>
                </div>
                {/* right */}
                <div className="  w-full h-full py-2 px-14">

                    <form className="  " onSubmit={handleSubmit}>

                        <label htmlFor="email  " className="block">email</label>
                        <input type="email" name="email" placeholder="  enter your email " className="border  outline-none border-slate-800 w-80 px-5 py-3" required
                            onChange={e => setEmail(e.target.value)}
                        />

                        <label htmlFor="password  " className="block mt-5">password</label>
                        <input type="password" name="password" placeholder="  enter your password " className="border outline-none border-slate-800 w-80 px-5 py-3" required
                            onChange={e => setPassword(e.target.value)}

                        />

                        <button className="bg-black text-white block mt-5 px-4 py-2 w-1/2 "
                            onClick={signIN}
                        > sign in</button>
                    </form>


                    <h2 className="text-center py-3">OR</h2>

                    <button className="flex items-center gap-4 border border-black px-4 py-2 w-[80%] justify-center"> <span><FcGoogle /></span> continue with google</button>

                </div>
            </main>

        </>
    )
}

export default Login