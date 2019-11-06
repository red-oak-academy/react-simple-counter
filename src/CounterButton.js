import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CounterButton extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increaseCountCallback: PropTypes.func.isRequired
    }

    render() {
        return (
            <input
                type="button"
                onClick={this.props.increaseCountCallback}
                value={`Du hast ${this.props.count} mal geklickt!`}
            />
        )
    }
}

export default CounterButton