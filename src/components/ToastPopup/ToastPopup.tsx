// components/custom/ToastPopup/ToastPopup.tsx
import { useEffect, useState } from "react";

const messages = [
  "Random person has just purchased T-Stackz Rackz Basic Membership",
  "Random person has just purchased T-Stackz Rackz Plus+ Membership",
  "Random person has just purchased T-Stackz Rackz VIP Membership",
];

export default function ToastPopup() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showToast = () => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMsg);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 4000); // ৪ সেকেন্ড দেখাবে
    };

    showToast(); // প্রথম বার লোড হওয়ার সময়ও দেখাক

    const interval = setInterval(() => {
      showToast();
    }, 8000); // ৮ সেকেন্ড পরপর দেখাবে

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-5 left-5 z-50 transition-all duration-500 ease-in-out ${
        show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } bg-[#D72638] text-white px-4 py-3 rounded-lg shadow-lg w-[300px] flex items-center gap-3`}
    >
      <span>{message}</span>
    </div>
  );
}
