import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Image1 from "../../../images/cards/cards1.jpg";
import Image2 from "../../../images/cards/cards2.jpg";
import Image3 from "../../../images/cards/cards3.jpg";
import Image4 from "../../../images/cards/cards4.jpg";
import Image5 from "../../../images/cards/cards5.jpg";
import Image6 from "../../../images/cards/cards6.jpg";
import Image7 from "../../../images/cards/cards7.jpg";
import Image8 from "../../../images/cards/cards8.jpg";
import Image9 from "../../../images/cards/cards9.jpg";
import Image10 from "../../../images/cards/cards10.png";
import Image11 from "../../../images/cards/cards11.jpg";
import Image12 from "../../../images/cards/cards12.jpg";

function MoviesCardList() {
  return (
    < section className="cards page__container">
      <ul className="cards__list">
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image1} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image2} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image3} isSaved={true} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image4} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image5} isSaved={true} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image6} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image7} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image8} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image9} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image10} isSaved={true} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image11} isSaved={false} />
        <MoviesCard name={"33 слова о дизайне"} duration={"1ч 47м"} link={Image12} isSaved={false} />
      </ul>
      <button type="button" className="cards__button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;