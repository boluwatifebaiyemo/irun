import Head from "next/head";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { FaMapPin } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const MerriReg400 = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

export default function ContactUs() {
    return (
        <>
            <Head>
                <title> Contact Us | Irun</title>
            </Head>
            <main className=" flex flex-col gap-6 px-4 md:px-16 lg:px-32 py-8 md:py-16 h-full">
                <h1 className={`${MerriReg400.className} text-5xl text-center`}>Contact Us</h1>
                {/* top section */}
                <div className="flex flex-col gap-4">
                    <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center border border-gray-300 rounded-md shadow-md">
                        <FaMapPin className="text-5xl" />
                        <p>1st Floor Pronent,Plot B53 Gado Nasko Road, Kubwa, Abuja ,Nigeria</p>

                    </blockquote>
                    <div className="grid md:grid-cols-2 gap-4">
                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center border border-gray-300 rounded-md shadow-md">
                            <IoMdMailOpen className="text-5xl" />
                            <Link href='mailto:sales@irun.com'>sales@irun.com</Link>
                        </blockquote>

                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center border border-gray-300 rounded-md shadow-md">
                            <IoMdMailOpen className="text-5xl" />
                            <Link href='tel:07098456734'>07098456734</Link>
                        </blockquote>
                    </div>
                </div>
                {/* {lower division}  */}
                <div className="flex flex-col gap-4">
                    <h2 className={`${MerriReg400.className} text-3xl text-center`}>Engage With Us Across Our Platforms</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center border border-gray-300 rounded-md shadow-lg">
                            <FaInstagram className="text-[#d63484] text-4xl" />
                            <Link href='http://instagram.com/early_code_tech' className=''>@early_code_tech</Link>
                        </blockquote>
                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center border border-gray-300 rounded-md shadow-lg">
                            <FaFacebook className="text-[#235074] text-4xl" />
                            <Link href='http://facebook.com/earlycodetech' className=''>@early_code_tech</Link>
                        </blockquote>
                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center border border-gray-300 rounded-md shadow-lg">
                            <FaXTwitter className="text-[#1c1c1c] text-4xl" />
                            <Link href='http://twitter.com/earlycodetech' className=''>@early_code_tech</Link>
                        </blockquote>
                    </div>
                </div>
            </main>
        </>
    )
}