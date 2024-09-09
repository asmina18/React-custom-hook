
import { useImage } from "../../hooks/useImage";

export const ImageGallery = () => {
  const images = useImage(); 
  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            style={{ width: '200px', height: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

