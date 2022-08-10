// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
// import styles from "@styles/components/Layout.module.scss"; // Styles
import React from 'react';
import { MouseEventHandler } from "react";



interface Links {
    name: String,
    path: String
}

type NavProps = {
    onClick?: MouseEventHandler;
    hidden: boolean;
    links: Array<Links>
};

export function Header(props: NavProps) {
    // Collect current path for active links
    const { pathname } = useRouter();
    // const { connectWallet, isConnected, disconnectWallet, displayName } =
    //     useWalletContext();

    const { onClick } = props;

    // All links

    return (
        <div className="w-full flex justify-between py-2 bg-grey px-4 bg-opacity-90">
            {/* Main logo */}
            <div >
                <Link href="/">
                    <a><h2>ZK Forest</h2></a>
                </Link>
            </div>

            {/* Navigation */}
            <div className="self-center hidden sm:block">
                <ul className="flex space-x-8">
                    {props.links.map(({ name, path }, i) => {
                        // For each link, render link
                        return (
                            <li className="self-center text-xl" key={i}>
                                <Link href={path as string}>
                                    <a
                                        className={
                                            pathname === path
                                                ? // Active class if pathname matches current path
                                                "bg-gray-900 px-4 py-2 rounded"
                                                : undefined + "bg-gray-900 px-4 py-2 rounded"
                                        }
                                    >
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </div>
         
            <div className="self-center hidden sm:block">
                <ul className="flex space-x-4 mr-auto">
                    <li className="bg-gray-700 px-4 py-1 rounded  ml-auto">
                        <button className={['cursor-pointer  font-body'].join(' ')} onClick={() => { window.open('https://zkga.me') }} >
                            into Dark Forest

                        </button>
                    </li>
                </ul>
            </div>
        </div>

    );
}