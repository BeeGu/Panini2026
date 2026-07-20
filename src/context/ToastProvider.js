import { useState, useRef } from "react";
import ToastContext from "./ToastContext";
import Toast from "../components/common/Toast";

export default function ToastProvider({ children }) {

    const [toast, setToast] = useState(null);

    const timer = useRef(null);

    function show({

        message,
        type = "success",
        duration = 2500,

    }) {

        clearTimeout(timer.current);

        setToast({
            message,
            type,
        });

        timer.current = setTimeout(() => {

            setToast(null);

        }, duration);

    }

    return (

        <ToastContext.Provider
            value={{ show }}
        >

            {children}

            <Toast
                visible={!!toast}
                message={toast?.message}
                type={toast?.type}
            />

        </ToastContext.Provider>

    );

}