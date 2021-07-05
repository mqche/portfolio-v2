import React from 'react';
import './Footer.css';
import { Button } from './Button'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            placeholder
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>Minh Che © 2021</small>
                    <div class='social-icons'>
                        <a class='social-icon-link email' target='about_blank' href="mailto:mche135@gmail.com" rel="noreferrer"> <i class="fas fa-envelope"></i></a>
                        <a class='social-icon-link github' target='about_blank' href="https://github.com/mqche" rel="noreferrer"><i class='fab fa-github' /></a>
                        <a class='social-icon-link linkedin' target='about_blank' href="https://www.linkedin.com/in/minh-che/" rel="noreferrer"><i class='fab fa-linkedin' /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}