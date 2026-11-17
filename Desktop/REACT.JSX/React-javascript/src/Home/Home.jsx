import { useState, useEffect } from "react";
import "./Home.css";

import img1 from "../assets/form one.jpg";
import img2 from "../assets/form two.jpg";
import img3 from "../assets/form four.jpg";
import img4 from "../assets/kasangezi.jpg";

const images = [img1, img2, img3, img4];

function Home() {
  const total = images.length;
  const [flipped, setFlipped] = useState(0);   // kurasa zilizokunjuliwa (0 hadi total)
  const [noAnim, setNoAnim] = useState(false); // kuzima animation wakati wa kurudi mwanzo

  // Kubadilika kila sekunde 3 (mbele tu)
  useEffect(() => {
    if (flipped >= total) return;
    const timer = setTimeout(() => setFlipped(flipped + 1), 3000);
    return () => clearTimeout(timer);
  }, [flipped, total]);

  // Kurasa zote zikikunjuliwa, rudi mwanzo bila animation
  useEffect(() => {
    if (flipped !== total) return;
    const timer = setTimeout(() => {
      setNoAnim(true);
      setFlipped(0);
      setTimeout(() => setNoAnim(false), 50);
    }, 1300);
    return () => clearTimeout(timer);
  }, [flipped, total]);

  const next = () => {
    if (flipped < total) setFlipped(flipped + 1);
  };

  const prev = () => {
    if (flipped > 0) {
      setFlipped(flipped - 1);
    } else {
      // tuko mwanzo: ruka mwisho kimya kimya kisha rudisha ukurasa mmoja
      setNoAnim(true);
      setFlipped(total);
      setTimeout(() => {
        setNoAnim(false);
        setFlipped(total - 1);
      }, 50);
    }
  };

  return (
    <div className={noAnim ? "book no_anim" : "book"}>
      {/* Picha ya kwanza chini ya kurasa zote (inafunuliwa ukurasa wa mwisho ukikunjuka) */}
      <div
        className="page base"
        style={{ backgroundImage: `url("${images[0]}")`, zIndex: 0 }}
      />

      {images.map((img, index) => {
        const isFlipped = index < flipped;
        return (
          <div
            key={index}
            className={isFlipped ? "page flipped" : "page"}
            style={{
              backgroundImage: `url("${img}")`,
              zIndex: isFlipped ? total + index : total - index,
            }}
          />
        );
      })}

      {/* Giza + title */}
      <div className="caption">
        <h1>Welcome to Kasange Secondary School</h1>
        
      </div>

      {/* Mishale */}
      <button className="arrow left" onClick={prev} aria-label="Nyuma">&#10094;</button>
      <button className="arrow right" onClick={next} aria-label="Mbele">&#10095;</button>
    </div>
  );
}

export default Home;