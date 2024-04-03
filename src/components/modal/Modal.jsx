import { useEffect } from "react";
import Button from "../Button/Button";
import s from "./Modal.module.css";
const Modal = ({ children, title = "Default modal", closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      //   console.log(e.key);
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const intervalID = setInterval(() => {
      //   console.log(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutId = setTimeout(() => {
      console.log("Hello"), 3000;
    });

    // clean up function
    return () => {
      console.log("modal close");
      clearInterval(intervalID);
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleKeyDown);
      console.log("Time is stopped");
    };
  }, [closeModal]);

  const handlebackdropClick = (e) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.wrapper} onClick={handlebackdropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <Button onClick={closeModal} className={s.closeBtn}>
          ×
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
