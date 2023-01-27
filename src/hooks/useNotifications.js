import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useNotifications = (ref) => {
  const dismiss = () => toast.dismiss(ref.current);
  const dismissAll = () => toast.dismiss();

  const notify = (message) => {
    ref.current = toast(message, {
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      className: "toast-success-container",
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addRemoveNotification = (flag, message) => {
    if (flag) {
      notify(message);
      return;
    }
    dismiss();
  };

  return { dismiss, dismissAll, addRemoveNotification };
};
