import Chip from "../Chip";

import { useFilterStore } from "@/store/filterStore";

export default function Filter() {
    const { isModalOpen, toggleIsModalOpen, selectedFilter, toggleSelectedFilter } =
        useFilterStore();
    return (
        <div className="flex gap-2">
            {selectedFilter.map((item, index) => {
                return (
                    <Chip
                        key={index}
                        label={item}
                        onClick={() => {
                            toggleSelectedFilter(item);
                        }}
                        bgColor={"#F6EFFF"}
                        textColor={"#7A34F2"}
                        borderColor={"#7A34F2"}
                        backIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.64145 4.21185C4.96688 3.88641 5.49452 3.88641 5.81996 4.21185L10.2307 8.6226L14.6414 4.21185C14.9669 3.88641 15.4945 3.88641 15.82 4.21185C16.1454 4.53729 16.1454 5.06493 15.82 5.39036L11.4092 9.80111L15.82 14.2119C16.1454 14.5373 16.1454 15.0649 15.82 15.3904C15.4945 15.7158 14.9669 15.7158 14.6414 15.3904L10.2307 10.9796L5.81996 15.3904C5.49452 15.7158 4.96688 15.7158 4.64145 15.3904C4.31601 15.0649 4.31601 14.5373 4.64145 14.2119L9.05219 9.80111L4.64145 5.39036C4.31601 5.06493 4.31601 4.53729 4.64145 4.21185Z"
                                    fill="#7A34F2"
                                />
                            </svg>
                        }
                    />
                );
            })}
            <div className="ml-auto">
                <Chip
                    label="필터"
                    onClick={() => {
                        toggleIsModalOpen();
                    }}
                    bgColor={isModalOpen ? "#F6EFFF" : "#FFFFFF"}
                    textColor={isModalOpen ? "#7A34F2" : "#121213"}
                    borderColor={isModalOpen ? "#7A34F2" : "#E0E0E0"}
                    frontIcon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.910726 2.14959C1.04727 1.85529 1.34222 1.66699 1.66666 1.66699H18.3333C18.6578 1.66699 18.9527 1.85529 19.0893 2.14959C19.2258 2.4439 19.1791 2.7907 18.9696 3.03843L12.5 10.6888V17.5003C12.5 17.7891 12.3504 18.0574 12.1048 18.2092C11.8591 18.361 11.5523 18.3748 11.294 18.2457L7.96065 16.579C7.67833 16.4379 7.49999 16.1493 7.49999 15.8337V10.6888L1.03035 3.03843C0.820851 2.7907 0.774177 2.4439 0.910726 2.14959ZM3.46274 3.33366L8.96963 9.84556C9.09685 9.99599 9.16666 10.1866 9.16666 10.3837V15.3186L10.8333 16.152V10.3837C10.8333 10.1866 10.9031 9.99599 11.0303 9.84556L16.5372 3.33366H3.46274Z"
                                fill="#121213"
                            />
                        </svg>
                    }
                />
            </div>
        </div>
    );
}
