import { useCardModalStore } from "@/store/cardModalStore";

type ChipProps = {
    label: string;
    onClick: () => void;
    bgColor: string;
    textColor: string;
    borderColor: string;
};

const Chip: React.FC<ChipProps> = ({ label, onClick, bgColor, textColor, borderColor }) => {
    return (
        <div
            className={`flex justify-center items-center border rounded-full px-4 py-2 select-none cursor-pointer`}
            style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}
            onClick={onClick}
        >
            <p className="text-sm font-[700]">{label}</p>
        </div>
    );
};

export default Chip;
