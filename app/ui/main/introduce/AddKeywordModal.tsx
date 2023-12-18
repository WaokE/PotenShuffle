"use client";

import { useAddKeywordStore } from "@/store/addKeywordstore";
import { useIntroduceFormStore } from "@/store/introduceFormStore";

import { showErrorToast } from "@/app/lib/toast";

const AddKeywordModal = () => {
    const { toggleModal, setUserKeywordInput, userKeywordInput } = useAddKeywordStore();
    const { toggleKeyword } = useIntroduceFormStore();

    const handleUserKeywordInput = () => {
        if (!userKeywordInput) {
            showErrorToast("키워드를 입력해주세요.");
            return;
        }
        toggleKeyword(userKeywordInput);
        toggleModal();
    };

    return (
        <div
            id="modalBackdrop"
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
            onClick={toggleModal}
        >
            <div
                className="flex flex-col items-center gap-4 bg-white w-auto rounded-lg shadow-lg p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="font-[700]">원하는 키워드를 추가하세요!</p>
                <div className="flex gap-4">
                    <input
                        className="border"
                        onChange={(e) => setUserKeywordInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleUserKeywordInput();
                            }
                        }}
                    />
                    <span
                        className="bg-purple-500 rounded-full px-3 py-1 text-white select-none cursor-pointer"
                        onClick={handleUserKeywordInput}
                    >
                        +
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AddKeywordModal;
