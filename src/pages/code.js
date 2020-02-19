import React from 'react';
import { GitAnalysis, LinesOfCode } from '../components'
import coffeeMac from '../assets/images/coffee-mac.jpg'

export const Code = ({ className = 'code' }) => (
    <div className={className}>
        <div className={`${className} hero`}>
            <section style={{ paddingTop: '2rem', alignItems: 'center' }}>
                <div style={{ width: '45%' }}>
                    <GitAnalysis />
                </div>
                <img style={{
                    width: '45%',
                    borderRadius: '0 3rem',
                    border: '1px solid',
                    margin: '0'
                }} className="image" src={coffeeMac} alt="Carson Schwalm" />
            </section>
        </div>
        <section>
            <LinesOfCode />
        </section>

    </div>)