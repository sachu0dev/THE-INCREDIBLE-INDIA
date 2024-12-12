"use client";
import Image from "next/image";
import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const mainContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: mainContainer.current,
      top: "-=100px",
      end: document.body.offsetHeight,
      pin: true,
    });
  }, []);

  const places = [
    {
      title: "Taj Mahal, Agra",
      description:
        "A symbol of love and an architectural marvel, the Taj Mahal is one of the Seven Wonders of the World, made entirely of white marble and adorned with intricate carvings.",
      src: "/images/tajmahal.jpg",
    },
    {
      title: "Jaipur and Udaipur, Rajasthan",
      description:
        "Known as the Pink City, Jaipur is famous for its royal palaces, forts like Amer and Nahargarh, and vibrant bazaars. Udaipur, the City of Lakes, enchants with its shimmering lakes, grand palaces, and romantic ambiance.",
      src: "/images/city.jpg",
    },
    {
      title: "Kerala Backwaters",
      description:
        "The serene backwaters of Kerala offer a tranquil escape. Cruising through lush green landscapes on a traditional houseboat provides a glimpse of Kerala's natural beauty and rich culture.",
      src: "/images/backwaters.jpg",
    },
    {
      title: "Leh-Ladakh, Jammu & Kashmir",
      description:
        "A haven for adventurers and nature lovers, Leh-Ladakh boasts rugged mountains, crystal-clear lakes like Pangong and Tso Moriri, and breathtaking monasteries nestled in the Himalayas.",
      src: "/images/ladakh.jpg",
    },
    {
      title: "Varanasi, Uttar Pradesh",
      description:
        "One of the oldest cities in the world, Varanasi is known for its spiritual significance and ghats along the Ganges River, where pilgrims come to bathe and seek spiritual enlightenment.",
      src: "/images/varanasi.png",
    },
    {
      title: "Ranthambore National Park, Rajasthan",
      description:
        "A wildlife enthusiast's paradise, Ranthambore is famous for its population of tigers, as well as its rich biodiversity and the ancient Ranthambore Fort.",
      src: "/images/ranthambore.png",
    },
    {
      title: "Goa Beaches",
      description:
        "Famous for its stunning coastline, Goa is a tropical paradise with golden sandy beaches, vibrant nightlife, and a blend of Portuguese and Indian cultures.",
      src: "/images/goa.png",
    },
    {
      title: "Andaman and Nicobar Islands",
      description:
        "These islands offer crystal-clear waters, coral reefs, and pristine beaches, making them a perfect destination for water sports, relaxation, and adventure.",
      src: "/images/andaman.png",
    },
    {
      title: "Mysore, Karnataka",
      description:
        "Mysore, the City of Palaces, is known for its royal heritage, including the magnificent Mysore Palace, vibrant festivals like Dussehra, and the peaceful Chamundi Hill.",
      src: "/images/mysore.png",
    },
    {
      title: "Darjeeling, West Bengal",
      description:
        "Darjeeling, often called the 'Queen of the Hills,' offers breathtaking views of the Himalayas, lush tea gardens, and a charming colonial ambiance with the famous Darjeeling Himalayan Railway.",
      src: "/images/darjeeling.png",
    },
  ];

  return (
    <div className="projects flex flex-col mt-[25vh] text-white p-[10%]">
      <div className="projectDescription flex h-[700px] gap-[5%] w-full justify-between sticky">
        <div
          ref={mainContainer}
          className="imageContainer relative h-full w-[40%]"
        >
          <Image
            className="object-cover"
            src={places[selectedProject].src}
            fill={true}
            alt="images"
          />
          <p className="absolute bottom-0 left-0 text-[1.3vw] font-bold bg-black opacity-50 p-2">
            {places[selectedProject].description}
          </p>
        </div>
        <div className="column w-[20%] text-[1.3vw]">
          <p>
            India is a land of diversity, offering travelers a rich blend of
            history, culture, and natural beauty. The Taj Mahal in Agra, a
            symbol of eternal love, stands as one of the country’s most famous
            landmarks. In Rajasthan, Jaipur's stunning palaces and forts reflect
            the grandeur of its royal past, while Kerala's tranquil backwaters
            offer a serene escape into nature.
          </p>
        </div>
        <div className="column w-[20%] text-[1vw]  h-full flex justify-end items-end">
          <p className="">
            For adventure seekers, the rugged landscapes of Leh-Ladakh provide
            breathtaking views of snow-capped mountains and crystal-clear lakes.
            Whether it’s the vibrant cities or peaceful rural retreats, India’s
            diverse destinations offer something for every traveler, making it
            an unforgettable journey.
          </p>
        </div>
      </div>
      <div className="mt-[200px] flex flex-col">
        {places.map((place, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => setSelectedProject(index)}
              className="flex justify-end items-end border-t-[1px] border-white font-bold text-[4vw] pt-[40px] pb-[20px] last:border-b-[1px] cursor-pointer"
            >
              <p>{place.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
