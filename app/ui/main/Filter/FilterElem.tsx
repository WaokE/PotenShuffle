import React from "react";

type FilterElemProps = {
    text: string;
};

const FilterElem: React.FC<FilterElemProps> = ({ text }) => {
    return (
        <div className="flex justify-center rounded-[20px] p-1 w-fit border border-gray-300 font-[700]">
            {text}
        </div>
    );
};

export default FilterElem;
