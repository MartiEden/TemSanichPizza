import React from 'react'
import Image from "../assets/img/thanks-min.png"
import { Link } from 'react-router-dom';

const ThankYouPage = () => {

    return (
        <div className="thankyou-page">
            <img className="thankyou-page__img" src={Image} alt="thank you image" />

            <Link to="/" className="thankyou-page__button button button--black">
            <span>To the Main Page</span>
          </Link>
        </div>
    )
}

export default ThankYouPage