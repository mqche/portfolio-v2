import React from 'react';
import { Link } from 'react-router-dom';

export default function CardItem(props) {
    return (
        <>
        
            <li className='cards__item'>              
                <a className='cards__item__link' href={props.path} target="about_blank">
                <h3>{props.proj}</h3>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Project Image' className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>

                </a>
            </li>
        </>
    );
}