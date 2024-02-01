import { useState } from "react";
import classnames from "classnames";

const galleryImg = [
  {
    label: "ALL",
    img: {
      src: [
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-1.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-2.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-3.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-4.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-5.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-6.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-7.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-8.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-9.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-10.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-11.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-12.jpg",
      ],
    },
  },
  {
    label: "HOTEL & GROUND",
    img: {
      src: [
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-1.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-2.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-3.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-4.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-5.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-6.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-7.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-8.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-9.jpg",
      ],
    },
  },
  {
    label: "ROOM/SUITE",
    img: {
      src: [
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-1.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-6.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-7.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-8.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-9.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-10.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-11.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-12.jpg",
      ],
    },
  },
  {
    label: "BATHROOM",
    img: {
      src: [
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-1.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-2.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-3.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-4.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-9.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-10.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-11.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-12.jpg",
      ],
    },
  },
  {
    label: "DINING",
    img: {
      src: [
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-1.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-2.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-3.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-4.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-5.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-6.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-7.jpg",
        "https://landing.engotheme.com/html/lotus/demo/images/gallery/img-8.jpg",
      ],
    },
  },
];

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(0);

  const handleTabClick = (index) => {
    setActiveImg(index);
  };

  return (
    <section className="section-gallery">
      <div className="my-10">
        <div className="container">
          <h2 className="text-center mb-10 text-4xl font-bold">Gallery</h2>
          <div className="mb-5">
            <ul className="flex justify-center">
              {galleryImg.map((tab, index) => (
                <li key={index} className="mr-2">
                  <button
                    className={classnames(
                      "bg-white rounded-t-lg font-medium py-2 px-4 inline-flex items-center",
                      {
                        "border-l border-t border-r border-gray-200":
                          index === activeImg,
                        "text-gray-500 hover:text-gray-700":
                          index !== activeImg,
                        "font-bold": index === activeImg,
                      }
                    )}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-6 mb-10">
            {galleryImg[activeImg].img.src.map((src, index) => (
              <div key={index} className="col-span-1 overflow-hidden">
                <img
                  className="transition duration-300 ease-in-out hover:scale-110"
                  src={src}
                  alt={`${galleryImg[activeImg].label} ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              className="border-2 border-black px-3 py-2 hover:border-[#e1bd85] hover:bg-[#e1bd85] hover:text-white "
              href="#"
            >
              BROWSE OUR GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
