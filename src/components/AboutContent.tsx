"use client"
import Image from 'next/image'
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";

export const AboutContent = () => {
    return (
        <div className="flex md:flex-row lg:flex-row flex-col h-full m-20">
            <div className="flex flex-col md:w-1/2 lg:w-1/2 w-full">
                <h1 className="text-4xl font-bold my-5">I’m Rohit Khanduri. I live in Frankfurt am Main, where I design the future.</h1>
                <div className="mt-6 space-y-7 text-base">
                    <p>I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after
                        my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
                    <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our
                        yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough
                        that with just a bit of momentum I’d be able to get to orbit.</p>
                    <p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix
                        my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to
                        transmit a photo back down to our family computer from space.</p>
                    <p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at
                        home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
                </div>
            </div>
            <div className="flex flex-col ml-auto sm:mt-6">
                <div className="ml-auto">
                    <Link href="/">
                        <Image src="/avatar.png" alt="Spencer Sharp" className="mask mask-squircle object-cover" height={400} width={400}/>
                    </Link>
                </div>
                <div className="mt-6">
                    <div className="flex flex-col mt-6">
                        <Link className="my-2 flex flex-row" href="https://github.com/rohit1901" target="_blank">
                            <FaGithub className="w-6 h-6"/>
                            <span className="ml-2">Github</span>
                        </Link>
                        <Link className="my-2 flex flex-row" href="#">
                            <FaLinkedin className="w-6 h-6"/>
                            <span className="ml-2">Linkedin</span>
                        </Link>
                        <Link className="my-2 flex flex-row" href="#">
                            <FaTwitter className="w-6 h-6"/>
                            <span className="ml-2">Twitter</span>
                        </Link>
                        <Link className="my-2 flex flex-row" href="#">
                            <FaInstagram className="w-6 h-6"/>
                            <span className="ml-2">Instagram</span>
                        </Link>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="flex">
                    <FaEnvelope className="w-5 h-5"/>
                    <Link href="mailto:rohit.khanduri@proton.me" className="ml-3">rohit.khanduri@proton.me</Link>
                </div>
            </div>
        </div>
    )
}