import type {Metadata} from "next";
import "./globals.css";
import {ReactNode, Suspense} from "react";
import {Outfit} from "next/font/google";
import "@theme-toggles/react/css/Classic.css"
import {ContentLoader} from "@website/components/ContentLoader";

const outfit = Outfit({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Rohit Khanduri's personal website",
    description: "My presence on the internet where I showcase my work and thoughts.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" data-theme="">
        <body className={`overflow-x-hidden ${outfit.className}`} id="body">
        <Suspense fallback={<ContentLoader/>}>
            {children}
        </Suspense>
        </body>
        </html>
    );
}
