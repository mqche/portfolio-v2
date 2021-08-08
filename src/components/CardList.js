import React from 'react';
import './CardList.css';
import CardItem from './CardItem';

export default function CardList() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <div>
                        </div>

                        <li className="intro">
                            <br></br>
                            <p>What ideas are brewing in the recesses of your mind?</p>
                            <p>Do you dream of running an online business during your coffee breaks?</p>
                            <p>Are you an artist in search of a creative home base?</p>
                            <p>Let's talk and start you on your next adventure!</p>
                    
                            <p>Proficiencies: </p>
                            <i class="fab fa-js"> JavaScript  </i> <i class="fab fa-html5"> HTML5  </i> <i class="fab fa-css3-alt"> CSS  </i> <i class="fab fa-react"> React</i> <i class="fab fa-node-js"> Node</i>
                        </li>

                        <li>
                            <h3>* * * featured_project * * *</h3>
                            <CardItem
                                src={require('../images/img-4.jpg').default}
                                text='A reservation app for restaurants to create, edit, and update reservations'
                                label='Restaurant Reservation Manager'
                                path='https://github.com/mqche/restaurant-reservation-app-final'
                            />
                        </li>
                        <li>
                            <h3>* * * upcoming_project * * *</h3>
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