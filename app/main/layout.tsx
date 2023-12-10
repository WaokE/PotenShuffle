import TopNavigationBar from "../ui/main/TopNavigationBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-8 items-center min-h-screen w-screen">
            <TopNavigationBar />
            {children}
        </div>
    );
}
