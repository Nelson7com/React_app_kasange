

import "./Gallery.css";
import pic1 from "../assets/kasangezi.jpg";
import pic2 from "../assets/form four.jpg";
import pic3 from "../assets/form four.jpg";
import pic4 from "../assets/form two.jpg";
import pic5 from "../assets/form one.jpg";
import pic6 from "../assets/kasangezi.jpg";
import pic7 from "../assets/form one.jpg";
import pic8 from "../assets/form two.jpg";

const cards = [
  { img: pic1, title: "Michezo", text: "Wanafunzi hufanya mazoezi ya mpira wa miguu kila wiki ili kujenga afya na ushirikiano." },
  { img: pic2, title: "Maktaba", text: "Maktaba yetu ina vitabu vingi vya kiada na ziada kwa ajili ya kujisomea." },
  { img: pic3, title: "Mpira wa Kikapu", text: "Timu ya shule hushiriki mashindano ya mpira wa kikapu ngazi ya wilaya na mkoa." },
  { img: pic4, title: "Maabara", text: "Wanafunzi hujifunza masomo ya sayansi kwa vitendo ndani ya maabara za kisasa." },
  { img: pic5, title: "Darasani", text: "Madarasa safi yenye walimu wenye uzoefu na vifaa vya kisasa vya kufundishia." },
  { img: pic6, title: "Mabweni", text: "Tunawahamasisha wanafunzi kujenga tabia ya kusoma vitabu mbalimbali." },
  { img: pic7, title: "Kidato cha Kwanza", text: "Wanafunzi wapya hupokelewa na kuandaliwa vizuri kuanza safari yao ya sekondari." },
  { img: pic8, title: "Kidato cha Pili", text: "Wanafunzi huendelea kujifunza na kujiandaa kwa mitihani ya kitaifa." },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery_title">Maisha ya Shule</h2>

      <div className="gallery_grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card_img">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card_body">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;