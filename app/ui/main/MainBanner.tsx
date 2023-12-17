import { useRouter } from "next/navigation";

export default function MainBanner() {
    const router = useRouter();

    return (
        <div
            className="flex flex-col gap-4 h-[600px] rounded-lg p-16 justify-between"
            style={{
                backgroundImage: "url('/Frame.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={() => {
                router.push("/main/chatbot");
            }}
        ></div>
    );
}
