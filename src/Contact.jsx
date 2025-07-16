import React from 'react'

import call from './images/call.png'
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { app } from './Fire';
import { v4 as uuidv4 } from 'uuid';

export default function Contact() {

    const db = getDatabase(app);
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const Google = () => {
       
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    console.log("Google login successful:", user);
                })
                .catch((error) => {
                    console.error("Google login error:", error);
                });
        
    };

    React.useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    const user = result.user;
                    console.log("Redirect login user:", user);
                }
            })
            .catch((error) => {
                console.error("Redirect login failed:", error);
            });
    }, []);







    const userData = (e) => {
        e.preventDefault();

        const userObj = {
            name: e.target.ufirst_name.value,
            lastname: e.target.ulast_name.value,
            email: e.target.umail.value,
            phone: e.target.uphone.value,
            company: e.target.ucompany.value,
        };

        const Uid = uuidv4(); // Generate a unique ID for the user

        console.log(Uid);

        set(ref(db, 'portolio-data/' + Uid), userObj)

        alert("Data Submitted Successfully");

    };


    return (
        <section
            className="text-white py-5 px-4 rounded-4xl lg:m-20 sm:mb-10 service-sec sm:px-6 lg:px-20 shadow-2xl/100 bg-gradient-to-r from-[#13547a] to-[#537895]"
            id="contact">

            <h1 className="text-white text-center text-4xl sm:text-5xl service-head md:text-6xl lg:text-7xl my-10">
                Connect <span className="text-green-600 font-bold">With</span> Me..
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 rounded-xl">


                <form className="max-w-md mx-auto my-10 p-4" onSubmit={userData}>
                    {/* <!-- Email --> */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="umail" id="email" autocomplete="email"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                            placeholder=" " required />
                        <label for="email"
                            className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                            Email address</label>
                    </div>

                    {/* <!-- First & Last Name --> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="ufirst_name" id="first_name" autocomplete="given-name"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="first_name"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="ulast_name" id="last_name" autocomplete="family-name"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="last_name"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                Last name</label>
                        </div>
                    </div>

                    {/* <!-- Phone & Company --> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="uphone" id="phone" autocomplete="tel"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="phone"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="ucompany" id="company" autocomplete="organization"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="company"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                Company (Ex. Google)</label>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-10">
                        {/* <!-- Submit --> */}
                        <button type="submit"
                            className="w-full sm:w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 cursor-pointer focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>

                        <button type="button" 
                            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2" onClick={Google}>
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd"
                                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>

                </form>

                <div className="flex justify-center items-center">
                    <img src={call} width="400" alt="Contact Image"
                        className="max-w-full h-auto rounded-xl shadow-2xl/100 " />
                </div>

            </div>
        </section>
    )
}
