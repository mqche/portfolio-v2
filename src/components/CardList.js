import React from 'react';
import './CardList.css';
import CardItem from './CardItem';

export default function CardList() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
           


                        <li className="intro">
                            <div className="container">
                                <div className="box">


                                    <div className="role">
                                        <div className="block"></div>
                                        <p>What's brewing in the recesses of your mind?</p>
                                        <div className="block block-2"></div>
                                        <p className="intro-line-2">Do you daydream about running an online business?</p>
                                        <div className="block block-3"></div>
                                        <p className="intro-line-3">Are you an artist in search of a creative home base?</p>
                                        <div className="block block-4"></div>
                                        <p className="intro-line-4">Let's talk and start you on your next adventure!</p>
                                        <div className="block block-5"></div>
                                        <div className="proficiencies">
                                            <p className="intro-line-5"><u>Proficiencies</u></p>
                                            <p>
                                                <i class="fab fa-js"> JavaScript  </i> <i class="fab fa-html5"> HTML5  </i> <i class="fab fa-css3-alt"> CSS  </i> <i class="fab fa-react"> React</i> <i class="fab fa-node-js"> Node</i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>



                        {/* <li className="intro">
                            <br></br>
                            <p>What ideas are brewing in the recesses of your mind?</p>
                            <p>Do you dream of running an online business during your coffee breaks?</p>
                            <p>Are you an artist in search of a creative home base?</p>
                            <p>Let's talk and start you on your next adventure!</p>

                            <p>Proficiencies: </p>
                            <i class="fab fa-js"> JavaScript  </i> <i class="fab fa-html5"> HTML5  </i> <i class="fab fa-css3-alt"> CSS  </i> <i class="fab fa-react"> React</i> <i class="fab fa-node-js"> Node</i>
                        </li> */}

                        <li>
                            <h3>featured</h3>
                            <CardItem
                                src={require('../images/img-4.jpg').default}
                                text='A reservation app for restaurants to create, edit, and update reservations'
                                label='Restaurant Reservation Manager'
                                path='https://github.com/mqche/restaurant-reservation-app-final'
                            />
                        </li>
                        <li>
                            <h3>upcoming</h3>
                            <CardItem
                                src={require('../images/img-4.jpg').default}
                                text='A reservation app for restaurants to create, edit, and update reservations'
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