import React from "react";
import "./PokemonCard.styles.scss";

const Pokemoncard = (props) => {
    const {data} = props;
    return (
    <div className="card">
      <div className="target">
        <img
          src="https://card-poke-simple.netlify.app/images/bg-pattern-card.svg"
          className="target__head"
        />
        <div className="target__body">
          <img
            className="target__body__img"
            src={data.image}
          />
          <h1>
            {data.name} <span className="target__body__span">{`${data.stats[0].base_stat}${data.stats[0].name}`}</span>
          </h1>
          <p className="target__body__text">{data.exp}</p>
        </div>
        <div className="target__footer">
          <div className="target__footer__social">
              <h3>{data.stats[1].base_stat}</h3>
              <p>{data.stats[1].name}</p>
          </div>
          <div className="target__footer__social">
              <h3>{data.stats[3].base_stat}</h3>
              <p>{data.stats[3].name}</p>
          </div>
          <div className="target__footer__social">
              <h3>{data.stats[2].base_stat}</h3>
              <p>{data.stats[2].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokemoncard;
