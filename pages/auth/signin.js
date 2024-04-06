import { useEffect } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import { Merriweather } from "next/font/google";
import { useSession } from "next-auth/react";


const MerriReg900 = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '900'
});


export default function SignIn() {

    const { data: session } = useSession();

    const router = useRouter();

    // useEffect(() => {
    //     session ? router.push('/admin/create-product') : null;
    // },[session]);

    console.log(session?.user);

    return (
        <>
            <Head>
                <title> Sign In | Irun</title>
            </Head>
            <main className="h-screen flex justify-center items-center bg-slate-100 px-2 md:px-0 py-4 md:py-0 ">
                <div className="h-2/3 w-full md:w-[320px] bg-slate-50 border flex flex-col items-center gap-6 border-slate-200 rounded-md  py-3 md:py-6 px-2 md:px-4">
                    <h2 className={`${MerriReg900.className} text-2xl text-slate-800  text-center`}>Get Started or Continue With an Option</h2>

                    <Button
                        variant="contained"
                        className="w-full py-3 bg-slate-800 hover:bg-slate-600 flex flex-row justify-around"
                        onClick={() => signIn('google')}>Continue with <FcGoogle className="text-3xl" /></Button>
                    <Button
                        variant="contained"
                        className="w-full py-3 bg-slate-800 hover:bg-slate-600 flex flex-row justify-around"
                        onClick={() => signIn('github')}>Continue with <FaGithub className="text-3xl" /></Button>
                        
                    {/* <Button
                        variant="contained"
                        className="w-full py-3 bg-slate-800 hover:bg-slate-600 flex flex-row justify-around"
                        onClick={() => signOut()}>Sign Out<FaSignOutAlt className="text-3xl"/></Button> */}
                </div>
            </main>
        </>
    )
}