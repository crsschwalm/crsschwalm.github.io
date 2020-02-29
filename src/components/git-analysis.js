import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Code Reviews', 'Commits', 'Pull Requests', 'Projects'],
    datasets: [
        {
            label: 'Last 12 months',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 8]
        }
    ]
};

export const GitAnalysis = () => (
    <Radar data={data} />
)