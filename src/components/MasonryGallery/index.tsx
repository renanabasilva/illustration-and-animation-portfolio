import styles from "./MasonryGallery.module.css";
import GalleryImage from "../GalleryImage";

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
  return (
    <div className={styles.masonryGallery}>
      {homeGallery.map((galleryImg) => {
        return (
          <GalleryImage
            key={galleryImg.path}
            imagePath={galleryImg.path}
            imageAlt={galleryImg.alt}
          />
        );
      })}
    </div>
  );
};

export default MasonryGallery;
