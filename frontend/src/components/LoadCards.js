import React, { useEffect } from 'react'
import { altCardFeatures } from "./JsonAPIs"
import AltCard from "./Cards/AltCard"
import Loader from "./Loaders/SimpleLoader"

const LoadCards = ({ loading, cards, error, href }) => {

  return (
    <>
      <h2>Our Cards</h2>
      <p className="top__paragraph">
        At Tiplog, we are a step ahead in providing you the best card services. Buy cards from our pool of cards today.</p>

      <div className="card__container">
        {loading ?
          <Loader /> :
          error ?
            "Error" :
            cards && cards.map((feature, index) => (
              <AltCard
                key={feature._id}
                id={feature._id}
                src={feature.upload.image}
                title={feature.name}
                desc={feature.description}
                anchor={altCardFeatures[index] &&
                  altCardFeatures[index].anchor}
                color={
                  altCardFeatures[index] &&
                  altCardFeatures[index].color}
                variants={
                  altCardFeatures[index] &&
                  altCardFeatures[index].variants}
                href={href}
              />
            ))
        }
      </div>
    </>
  )
}

export default LoadCards
