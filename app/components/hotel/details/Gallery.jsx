import Image from "next/image";

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery];
  newGallery.shift();
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={gallery[0]}
          placeholder="blur"
          blurDataURL={gallery[0]}
          width={500}
          height={400}
          className="h-[400px]"
          alt=""
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {newGallery.map((item, index) => (
            <Image
              key={index}
              src={item}
              placeholder="blur"
              blurDataURL={item}
              width={500}
              height={400}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
