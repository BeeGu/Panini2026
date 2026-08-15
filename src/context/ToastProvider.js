import { useRef, useState } from "react";

import ToastContext from "./ToastContext";

import Toast from "../components/common/Toast";

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [toasts, setToasts] = useState([]);

  const timer = useRef(null);

  function hide() {
    clearTimeout(timer.current);
    setToast(null);
  }

  function show({ message, type = "success", duration = 2500 }) {
    const id = Date.now() + Math.random();

    setToasts((current) => [
      {
        id,
        message,
        type,
      },
      ...current, // cel mai nou primul
    ]);

    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, duration);
  }

  function success(message, duration) {
    show({
      message,
      type: "success",
      duration,
    });
  }

  function error(message, duration) {
    show({
      message,
      type: "error",
      duration,
    });
  }

  function warning(message, duration) {
    show({
      message,
      type: "warning",
      duration,
    });
  }

  function info(message, duration) {
    show({
      message,
      type: "info",
      duration,
    });
  }

  return (
    <ToastContext.Provider
      value={{
        show,
        hide,
        success,
        error,
        warning,
        info,
      }}
    >
      {children}

      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          visible
          message={toast.message}
          type={toast.type}
          index={index}
        />
      ))}
    </ToastContext.Provider>
  );
}
