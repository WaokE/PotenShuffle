"use client";

import React from "react";

const ButtonContainer = () => {
    return (
        <div className="flex gap-8 justify-center">
            <button
                className="border bg-[#FFFFFF] rounded-[15px] text-[#46148D] font-[700] px-8 py-4 w-auto"
                onClick={() => {}}
            >
                다시 작성하기
            </button>
            <button
                className="bg-[#7A34F2] rounded-[15px] text-white font-[700] px-8 py-4 w-auto"
                onClick={() => {}}
            >
                저장하기
            </button>
        </div>
    );
};

export default ButtonContainer;
