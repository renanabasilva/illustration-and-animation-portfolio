import { useState } from "react";
import styles from "./MasonryGallery.module.css";
import GalleryImage from "../GalleryImage";
import ImageModal from "../ImageModal";

const homeGallery: Array<{
  path: string;
  alt: string;
}> = [
  {
    path: "/images/home-gallery/01.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/02.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/03.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/04.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/05.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/06.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/07.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/08.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/09.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/10.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/11.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/12.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/13.png",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/14.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/15.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/16.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/17.gif",
    alt: "landscape",
  },
  {
    path: "/images/home-gallery/18.gif",
    alt: "landscape",
  },
];

const MasonryGallery = () => {
  const [currentImageModal, setCurrentImageModal] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentImageModal(index);
  };

  const closeModal = () => {
    setCurrentImageModal(null);
  };

  const nextImage = () => {
    if (currentImageModal !== null){
      setCurrentImageModal((currentImageModal + 1) % homeGallery.length);
    }
  };

  const prevImage = () => {
    if (currentImageModal !== null){
      setCurrentImageModal((currentImageModal - 1 + homeGallery.length) % homeGallery.length);
    }
  };

  return (
    <div>
      <div className={styles.masonryGallery}>
        {homeGallery.map((galleryImg, index) => {
          return (
            <GalleryImage
              key={galleryImg.path}
              imagePath={galleryImg.path}
              imageAlt={galleryImg.alt}
              openModal={() => openModal(index)}
            />
          );
        })}
      </div>

      {currentImageModal !== null && (
        <ImageModal 
          src={homeGallery[currentImageModal].path}
          alt={homeGallery[currentImageModal].alt}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default MasonryGallery;
