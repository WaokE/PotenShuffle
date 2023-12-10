import TopNavigationBar from "../ui/main/TopNavigationBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4 items-center min-h-screen w-screen">
            <TopNavigationBar />
            <div className="flex-grow flex justify-center h-full w-full">{children}</div>
        </div>
    );
}
