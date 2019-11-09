import React from 'react';

class Nav extends React.Component {
    render() {
        const { toggleNote, showNote } = this.props;

        return (
            <div className="nav-container">
                <div className="nav-logo">Scribbles</div>
                <div className="nav-button" onClick={() => toggleNote()} >
                    { showNote ? 'Cancel' : '+ Jot' }
                </div>
            </div>
        );
    }
}

export default Nav;