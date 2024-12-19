import React, { useEffect } from "react";
import "./index.css";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1712388429936-2abc7144083f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desTitle: "Manali",
    location: "Himachal Pradesh",
    fees: "$300",
    description:
      "Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district",
  },
  {
    id: 2,
    imgSrc:
      "https://media.istockphoto.com/id/587800228/photo/phu-tubberk.jpg?s=612x612&w=0&k=20&c=HeQY4Y0J1-a806eX8QrtXzxz0tIRzgs36Kx8TdbgZ0k=",
    desTitle: "Ooty",
    location: "TamilNadu",
    fees: "$200",
    description:
      "Udhagamandalam, popularly known as Ooty is a hill station that will surely mesmerise you with its beguiling beauty. A chain of misty hills spread across a lush green carpet – with plenty to see, enjoy and experience.",
  },
  {
    id: 3,
    imgSrc:
      "https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=66SpftUPpEa6YmhgcV_yJAIKEgGaLpYk43y8yc3v-OI=",
    desTitle: "Srinagar ",
    location: "Jammu and Kashmir",
    fees: "$400",
    description:
      "Srinagar is a destination full of rich heritage and cultural blend. Pari Mahal, Hari Parbat Fort, Chashma Shahi, Shalimar Garden, Jamia Masjid, Hazratbal Mosque, Indira Gandhi Memorial Tulip Garden, Nigeen Lake, Dachigam National Park, Botanical Garden, Harwan are some of the best places to visit in Srinagar",
  },
  {
    id: 4,
    imgSrc:
      "https://media.istockphoto.com/id/2148666567/photo/dwarika-temple-of-lord-krishna.webp?a=1&b=1&s=612x612&w=0&k=20&c=spv3SCbqdrU1EruGhFV9Lxnuf2p0_EyfKPOy292UkjM=",
    desTitle: "Dwarika",
    location: " Gujarat",
    fees: "$200",
    description:
      "Dwarka, a sacred location, is associated with Lord Krishna. This city is a prominent pilgrimage destination that draws devotees from all over the world. It is one of the most important pilgrimage sites in India. Dwarka, which is adjacent to the Arabian Sea, has lovely beaches.",
  },
  {
    id: 5,
    imgSrc:
      "https://media.istockphoto.com/id/827570564/photo/silhouette-of-mountain-with-star-in-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=om7W71Yo8pCW6dvZ00JMZj6NyJNCDeTrUapcDDzTs-A=",
    desTitle: "Spiti Velly",
    location: "Himachal Pradesh",
    fees: "$300",
    description:
      "Spiti is often referred to as Little Tibet because its terrain, vegetation and climate are very similar to that of Tibet. It is perched at a height of 2,745 m above sea level and is surrounded by Lahaul, Ladakh, Kinnaur and Kullu.",
  },
  {
    id: 6,
    imgSrc:
      "https://media.istockphoto.com/id/1029765384/photo/the-shree-jagannath-temple-at-puri-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=nHQsfm6R1_DZf5NIN_5xIPdpIy2v0KL4jbndamsayhE=",
    desTitle: "Puri",
    location: "Odisha",
    fees: "$200",
    description:
      "Puri is famous for the world famous Shri Jagannath Temple & Longest Golden Beach. It is one of the Dhamas (Holiest of the holy place) out of four Dhamas i.e. Puri, Dwarika, Badrinath & Rameswar, in India.",
  },
  {
    id: 7,
    imgSrc:
      "https://images.unsplash.com/photo-1640101474726-02c3d68a7a74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbmd0b2t8ZW58MHx8MHx8fDA%3D",
    desTitle: "Gangtok",
    location: "Sikkim",
    fees: "$250",
    description:
      "Capital of Sikkim, Gangtok is a hill resort and one of the most popular places in north-east India. It is known for its scenic beauty and striking views of Mount Kanchenjunga, the third highest peak in the world.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="sectionTitle">
        <h3 data-aos="fade-right" data-aos-duration="5500" className="title">
          MOST VISITED DESTINATIONS
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, desTitle, location, fees, description }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="desTitle">{desTitle}</h4>
                <span className="location flex">
                  <FaMagnifyingGlassLocation className="icon" />
                </span>
                <span className="name">{location}</span>
                <div className="fees flex">
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  details <FaClipboardCheck className="icon" />{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
