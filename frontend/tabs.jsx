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
        const activeIdx = this.state.index;
        const headers = this.props.panes.map((pane, idx) => {
            const title = pane.title;
            const cssClass = idx === activeIdx ? 'active' : '';
            return (
                <li
                    key={idx}
                    className={cssClass}
                    onClick={() => this.handleClick(idx)}>
                {title}
                </li>
            )
        });

        return (
            <div>
                <h1>Tabs</h1>
                <div className="tabContainer">
                    <ul className="tabHeader">
                        {headers}
                    </ul>
                    <div className="tabBody">
                        {this.props.panes[activeIdx].content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;