// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
const Register = () => {

    useEffect(() => {
        let auth = localStorage.getItem("User");
        if (auth) {
            navigate("/");
        }
    }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password);
        if (!name || !email || !password) {
            alert("please enter all fields")
        }

        axios.post("http://localhost:3000/user/register", { name, email, password }).then(res => {
            console.log(res);
            if (res) {
                localStorage.setItem("User", JSON.stringify(res.data.user));
                localStorage.setItem("Token", JSON.stringify(res.data.token));
            }
        }).catch(error => {

            console.log(error)
            if (error.response.status == 409) {
                return alert(" user already existed ...")


            }

        })


    }




    return (
        <>

            <h1 className="text-2xl pt-6 mx-5 text-indigo-600">Sign in to melody</h1>

            <main className="grid grid-cols-2 max-w-[70%] h-auto  mx-auto py-14">


                {/* left part */}
                <div className="w-full text-center ">

                    <img src="/img/image.jpg" alt="" className="w-1/2 rounded-[50%] shadow-2xl mx-auto" />

                    <h2 className="py-3 mt-5">  already have an account ? <Link to="/login" className="text-blue-500">Sign In</Link> </h2>

                    <h2 className="text-xl">lets create account to listen melody </h2>
                </div>
                {/* right */}
                <div className="  w-full h-full py-2 px-14">

                    <form className="  " onSubmit={handleSubmit}>
                        <label htmlFor="name  " className="block">name</label>
                        <input type="name" name="name" placeholder="  enter your name " className="border  outline-none border-slate-800 w-80 px-5 py-3" required
                            onChange={e => setName(e.target.value)}
                        />

                        <label htmlFor="email  " className="block">email</label>
                        <input type="email" name="email" placeholder="  enter your email " className="border  outline-none border-slate-800 w-80 px-5 py-3" required
                            onChange={e => setEmail(e.target.value)}
                        />

                        <label htmlFor="password  " className="block mt-5">password</label>
                        <input type="password" name="password" placeholder="  enter your password " className="border outline-none border-slate-800 w-80 px-5 py-3" required
                            onChange={e => setPassword(e.target.value)}

                        />

                        <button className="bg-black text-white block mt-5 px-4 py-2 w-1/2 "
                            type="submit"
                        > sign UP</button>
                    </form>


                    {/* <h2 className="text-center py-3">OR</h2> */}

                    {/* <button className="flex items-center gap-4 border border-black px-4 py-2 w-[80%] justify-center"> <span><FcGoogle /></span> continue with google</button> */}

                </div>
            </main>

        </>
    )
}

export default Register