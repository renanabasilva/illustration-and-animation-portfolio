import { useEffect } from "react";
import styles from "./ImageModal.module.css";

interface ModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ModalProps> = ({
  src,
  alt,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={styles.modalImage} />
        <button className={styles.modalClose} onClick={onClose}>
          x
        </button>
        <button className={styles.modalPrev} onClick={onPrev}></button>
        <button className={styles.modalNext} onClick={onNext}></button>
      </div>
    </div>
  );
};

export default ImageModal;
