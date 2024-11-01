import styles from "./GalleryImage.module.css";

interface ImageProps {
  imagePath: string;
  imageAlt: string;
  openModal: () => void;
}

const GalleryImage = ({ imagePath, imageAlt, openModal }: ImageProps) => {
  return (
    <div className={styles.galleryItem} onClick={openModal}>
      <img src={imagePath} alt={imageAlt} />
    </div>
  );
};

export default GalleryImage;
