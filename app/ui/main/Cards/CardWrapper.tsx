import Card from "./Card";

import { sampleUsersInfo } from "@/type/sampleData";
import { userInfo } from "@/type/type";

export default function CardWrapper() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {sampleUsersInfo.map((userInfo) => (
                <Card cardData={userInfo} />
            ))}
        </div>
    );
}
