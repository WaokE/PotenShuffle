type ChipProps = {
    label: string;
    onClick?: () => void;
    bgColor: string;
    textColor: string;
    borderColor: string;
    frontIcon?: React.ReactNode;
    backIcon?: React.ReactNode;
};

const Chip: React.FC<ChipProps> = ({
    label,
    onClick,
    bgColor,
    textColor,
    borderColor,
    frontIcon,
    backIcon,
}) => {
    return (
        <div
            className={`flex justify-center items-center border rounded-full px-4 py-2 select-none cursor-pointer`}
            style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}
            onClick={onClick}
        >
            {frontIcon && <span className="mr-2">{frontIcon}</span>}
            <p className="text-sm font-[700]">{label}</p>
            {backIcon && <span className="ml-2">{backIcon}</span>}
        </div>
    );
};

export default Chip;
