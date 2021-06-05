import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(key) {
        this.setState( { index: key});
    }
     
    render() {
        return (
            <div>
                <h1>Tabs</h1>
                <div className="tabContainer">
                    <ul className="tabHeader">
                        {this.props.panes.map((pane, idx) => (
                        <li key={idx} onClick={() => this.handleClick(idx)}>
                            {pane.title}
                        </li>))}
                    </ul>
                    <div className="tabBody">
                        {this.props.panes[this.state.index].content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;