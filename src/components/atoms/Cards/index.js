import React from 'react'
import cards from './cards.json'

import "./styles.scss"

const Cards = () => {
    return <div className="cards-list-content">
        {cards.map((card, index) => {
            return (
                <section key={index} className={card.submenu?.length > 3 ? "cards-list-item large" : "cards-list-item"}>
                    <article>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>

                        {card.submenu && <ol>
                            {card.submenu.map((submenu, index) => {
                                return <li key={index}>
                                    {submenu.title}
                                </li>
                            })}
                        </ol>}
                    </article>
                </section>
            )
        })}
    </div>
}

export default Cards