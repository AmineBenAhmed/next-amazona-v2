import Image from 'next/image';
import './styles.css'

const Images = ({images, name}: {images: string[], name: string}) => {
  return (
    <div>
      <div className="w-full carousel rounded-box mt-20 ml-6 carousel-container">
      {
        images.map((image, index) => (
          <div
            key={index * Math.random()}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
              <Image
              src={image}
              alt={name}
              width={640}
              height={640}
              sizes='100vw'
              className="w-full rounded-[1.2svw] "
              style={{
                width: '100%',
                height: '100%'
              }}
            />
            <div
              className="absolute flex justify-between 
              transform-translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href={`#slide-${
                index === 0 ? images.length - 1 : index - 1
              }`}
              className="btn btn-circle"
              >
               {'<'}
              </a>
              <a href={`#slide-${
                index === images.length - 1 ? 0 : index + 1
              }`}
              className="btn btn-circle"
              >
               {'>'}
              </a>

            </div>
            
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Images;