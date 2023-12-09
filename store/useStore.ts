// SSR 하이드레이션 방지를 위해 사용하는 커스텀 훅
import { useState, useEffect } from "react";

const useStore = <T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => F
) => {
    const result = store(callback) as F;
    const [data, setData] = useState<F>();

    useEffect(() => {
        setData(result);
    }, [result]);

    return data;
};

export default useStore;
