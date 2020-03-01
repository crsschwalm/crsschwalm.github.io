import React, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import moment from 'moment'
import { fetchContributions } from '../services/github-api';
import '../assets/css/contributions.css'

const style = {
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
}

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

    const radarData = {
        ...style,
        labels: ['Code Reviews', 'Commits', 'Pull Requests', 'Projects'],
        datasets: [
            {
                label: `My ${timeframe.label} in review`,
                data: [
                    gitData.reviews,
                    gitData.commits,
                    gitData.pullRequests,
                    gitData.projectsCommittedTo
                ]
            }
        ]
    }

    return (
        <div className="contributions">
            <Radar data={radarData} />
            <div className="options">
                {Object.entries(timeOptions).map(([, { id, label }]) =>
                    <span
                        key={id}
                        className={timeframe.id === id ? 'active' : 'inactive'}
                        onClick={() => setTimeframe(timeOptions[id])}>
                        {label}
                    </span>)
                }
            </div>
        </div >)
}