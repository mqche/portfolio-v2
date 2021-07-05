import React from 'react';
import './CardList.css';
import CardItem from './CardItem';

export default function CardList() {
    return (
        <div className='cards'>
            <div className="intro">
                <p>What ideas are brewing in the recesses of your mind? Is it an online business you dream of at night? Are you an artist in search of a creative home base? Let's talk and start you on your next adventure.</p>
                <br></br>
                <p>Proficiencies: </p>
                <i class="fab fa-js"> JavaScript  </i> <i class="fab fa-html5"> HTML5  </i> <i class="fab fa-css3-alt"> CSS  </i> <i class="fab fa-react"> React</i> <i class="fab fa-node-js"> Node</i>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <div>
                        </div>
                        <li>
                            <h3>* * * Featured Project * * *</h3>
                            <CardItem
                                src={require('../images/img-4.jpg').default}
                                text='A reservation app for restaurants to create, edit, and update reservations'
                                label='Restaurant Reservation'
                                path='https://github.com/mqche/restaurant-reservation-app-final'
                            />
                        </li>
                        <li>
                            <h3>* * * Upcoming Project * * *</h3>
                            <CardItem
                                src={require('../images/img-4.jpg').default}
                                text='A productivity app using the renowned Pomodoro Timer technique'
                                label='Pomodoro Timer'
                                path='/'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};