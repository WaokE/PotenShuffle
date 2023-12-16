import { toast } from "react-toastify";

export const showToast = (message: string) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
    });
};
