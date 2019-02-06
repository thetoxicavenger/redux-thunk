import React from 'react'

function SampleHOC(Comp) {
    class NewComp extends React.Component {
        render() {
            console.log('something random.')
            return <Comp />
        }
    }
    return NewComp
}

export default SampleHOC