import { useEffect, useRef, useState } from "react";
import Styles from '../../CSS_Modules/About/index.module.css';

export default function TechCard({ title, image, items, listClassName  }) {
  const [flipped, setFlipped] = useState(false);
  const listRef = useRef(null);
const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  useEffect(() => {
    if (!flipped || !listRef.current) return;

    let scrollPos = 0;
    const intervalId = setInterval(() => {
      scrollPos += 1;
      listRef.current.scrollTop = scrollPos;
      if (
        listRef.current.scrollTop + listRef.current.clientHeight >=
        listRef.current.scrollHeight
      ) {
        scrollPos = 0;
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [flipped]);

  return (
    <div className={Styles.cardContainer} onClick={() => setFlipped(!flipped)}>
      <div className={`${Styles.card} ${flipped ? Styles.flipped : ""}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
          <div className={Styles.tapHint}>Tap to flip</div>
          <h3 className={Styles.h3}>{title}</h3>
          <img src={image} alt={title} className={Styles.img} />
        </div>
        <div className={`${Styles.cardBack} ${Styles.cardFace}`}>
            {isMobile && (
  <div className={Styles.scrollTip}>
    Tap again to auto-scroll ⬇️
  </div>
)}

          <ul
            ref={listRef}
             className={`${Styles.ul} ${listClassName}`}
            style={{ maxHeight: "200px", overflow: "hidden", margin: 0, padding: 0 }}
          >
            {items.map((item, i) => (
              <li key={i} className={Styles.aboutLi}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
