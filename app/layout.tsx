import type { Metadata } from "next";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

export const metadata: Metadata = {
    title: "PotenShuffle",
    description: "Shuffle your potential",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                {children}
                <ToastContainer />
            </body>
        </html>
    );
}
