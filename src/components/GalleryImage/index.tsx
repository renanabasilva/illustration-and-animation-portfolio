import styles from "./GalleryImage.module.css";

interface ImageProps {
  imagePath: string;
  imageAlt: string;
}

const GalleryImage = ({ imagePath, imageAlt }: ImageProps) => {
  return (
    <div className={styles.galleryItem}>
      <img src={imagePath} alt={imageAlt} />
    </div>
  );
};

export default GalleryImage;
