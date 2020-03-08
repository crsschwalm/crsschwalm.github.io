import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import moment from 'moment'
import { fetchContributions } from '../services/github-api';
import '../assets/scss/contributions.scss'



const chartData = ({ labels, data }) => ({
    labels,
    datasets: [{
        data,
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
});

const now = () => moment().format()
const then = (timeframe) => moment().subtract(1, timeframe).format()

const timeOptions = {
    year: { id: "year", time: 'years', label: "Year", },
    month: { id: "month", time: 'months', label: "Month", },
    week: { id: "week", time: 'weeks', label: "Week", }
}

export const GitContributions = () => {
    const [gitData, setGitData] = useState({})
    const [timeframe, setTimeframe] = useState(timeOptions.year);

    useEffect(() => {
        fetchContributions({ from: then(timeframe.time), to: now() })
            .then(setGitData)
            .catch(console.warn)
    }, [timeframe])

    const data = chartData({
        labels: ['Code Reviews', 'Commits', 'Pull Requests'],
        data: [
            gitData.reviews,
            gitData.commits,
            gitData.pullRequests,
        ]
    })

    return (
        <div className="contributions">
            <h3>My {timeframe.label} in review</h3>

            <div className="group">
                <ul className="options">
                    {Object.entries(timeOptions).map(([, { id, label }]) =>
                        <li
                            key={id}
                            className={timeframe.id === id ? 'active' : 'inactive'}
                            onClick={() => setTimeframe(timeOptions[id])}>
                            <h2>{label}</h2>
                        </li>)
                    }
                </ul>
                <div className="chart">
                    <h4>{gitData.projectsCommittedTo} projects</h4>
                    <Doughnut data={data} height={300} options={{ legend: { labels: { fontColor: "#ffffff" } } }} />
                </div>
            </div>
        </div >)
}