"use client";

import useStore from "@/store/useStore";
import { useUserStore } from "@/store/user";

export default function Home() {
    const userStore = useStore(useUserStore, (state) => state);
    return (
        <main>
            {userStore && userStore.user.isLoggedIn ? <p>logged In</p> : <p>not logged In</p>}
            <button
                onClick={() => {
                    userStore?.setUser({
                        name: "test",
                        email: "",
                        token: "",
                        isLoggedIn: true,
                    });
                }}
            >
                login
            </button>
        </main>
    );
}
