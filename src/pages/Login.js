import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen flex bg-white justify-center items-center  ">
                <form className="w-full md:w-1/3 rounded-3xl bg-gray-400 items-center">
                    <div className="flex font-bold justify-center mt-6">
                        <h1 className="text-3xl text-center text-white mb-4">
                            Sign In
                        </h1>
                    </div>
                    <div className="px-12 pb-10">
                        <div className="w-full mb-2">
                            <div className="py-2">
                                <label
                                    className="text-lg text-white"
                                    for="Email"
                                >
                                    Email:
                                </label>
                            </div>
                            <div class="flex justify-center">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                                />
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="py-2">
                                <label
                                    className="text-lg text-white"
                                    for="Password"
                                >
                                    Password:
                                </label>
                            </div>
                            <div className="flex justify-center relative">
                                <input
                                    type={!show ? "password" : "text"}
                                    placeholder="Password"
                                    class="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                                />
                                <span
                                    className="absolute top-0 right-0 bg-gray-600 bg-opacity-20 p-[11px]"
                                    onClick={() => setShow(!show)}
                                >
                                    {!show ? (
                                        <AiOutlineEye className="text-black text-xl" />
                                    ) : (
                                        <AiOutlineEyeInvisible className="text-black text-xl" />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="py-4">
                            <a
                                onClick={() => { navigate("/") }}
                                type="submit"
                                className="border-[1px] text-center cursor-pointer p-2 w-full rounded border-white text-lg text-white hover:bg-white
                                    hover:text-black"
                            >
                                Sign In
                            </a>
                        </div>
                        <div className="py-4 text-center">
                            Go to Admin site?&nbsp;
                            <a
                                onClick={() => { navigate("/admin") }}
                                type="submit"
                                className="text-white cursor-pointer"
                            >
                                Admin
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};