import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        };
        this.tick = this.tick.bind(this);
        this.interval = 0;
    }

    tick() {
        this.setState( {time: new Date() })
    }

    componentDidMount() {
        this.interval = window.setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }
    

    render() {
        const { time } = this.state;
        return (
            <div >
                <h1>Clock</h1>
                <div className="general-frame clock">
                    <p><span>Time:</span> <span>{time.toLocaleTimeString()}</span></p>
                    <p><span>Date:</span> <span>{time.toLocaleDateString()}</span></p>
                </div>
            </div>
        )
    }
}

export default Clock