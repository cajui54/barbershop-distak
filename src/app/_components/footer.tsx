import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';

const Footer = () => {
    return (
        <footer className="flex h-32 w-full items-center justify-center border border-neutral-700">
            <div className="mx-auto flex w-[60%] items-center justify-center gap-x-2 sm:w-[400px]">
                <Image
                    src={'/logo-destak.ico'}
                    alt="Barbearia Destak"
                    width={90}
                    height={90}
                />
                <div className="">
                    <p className="text-[9px] text-neutral-300 italic">
                        Mais Informações:
                    </p>
                    <div className="flex gap-x-2">
                        <Link
                            href=""
                            className="flex flex-col items-center justify-center"
                        >
                            <FaWhatsapp className="rounded-sm bg-emerald-600 p-1 text-2xl text-neutral-200 hover:scale-105" />
                            <p className="text-center text-[8px] text-neutral-300">
                                Whats
                            </p>
                        </Link>
                        <Link
                            href=""
                            className="flex flex-col items-center justify-center"
                        >
                            <FaInstagram className="rounded-sm bg-pink-500 p-1 text-2xl text-neutral-200 hover:scale-105" />
                            <p className="text-center text-[7px] text-neutral-300">
                                Instagram
                            </p>
                        </Link>
                        <Link
                            href=""
                            className="flex flex-col items-center justify-center"
                        >
                            <CiFacebook className="rounded-sm bg-blue-500 p-1 text-2xl text-neutral-200 hover:scale-105" />
                            <p className="text-center text-[7px] text-neutral-300">
                                Facebook
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
