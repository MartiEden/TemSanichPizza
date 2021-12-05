import React from 'react'
import Image from "../assets/img/thanks-min.png"
import { Link } from 'react-router-dom';

const ThankYouPage = ({onBackToMain}) => {

    return (
        <div className="thankyou-page hidden">
            <div className="thankyou-page__background"/>
            <img className="thankyou-page__img" src={Image} alt="" />

            <Link to="/" onClick={onBackToMain} className="thankyou-page__button button button--black">
            <span>To the Main Page</span>
          </Link>
        </div>
    )
}

export default ThankYouPage