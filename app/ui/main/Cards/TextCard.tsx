type textCardProps = {
    text: string;
};

const TextCard: React.FC<textCardProps> = ({ text }) => {
    return (
        <div className="flex flex-col p-4 gap-4 w-full h-1/2-screen border shadow-lg rounded-lg overflow-auto">
            <p>{text}</p>
        </div>
    );
};

export default TextCard;
