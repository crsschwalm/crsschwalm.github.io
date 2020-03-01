import React from 'react';
import { GitAnalysis, LinesOfCode } from '../components'
import coffeeMac from '../assets/images/coffee-mac.jpg'

export const Code = ({ className, id }) => (
    <div id={id}>
        <div className={`${className} hero`}>
            <h1 style={{ textAlign: 'center', width: '100%', padding: '2rem 0' }}>My Stats 📈</h1>
            <section style={{ paddingTop: '2rem', alignItems: 'center' }}>
                <GitAnalysis />
            </section>
            <section>
                <div style={{ width: '45%' }}>
                    <LinesOfCode />
                </div>
                <img style={{
                    width: '45%',
                    borderRadius: '0 3rem',
                    border: '1px solid black',
                    margin: '0'
                }} className="image" src={coffeeMac} alt="Coffee + Mac" />
            </section>
        </div>
    </div>)