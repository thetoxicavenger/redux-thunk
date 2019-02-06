import React from 'react'
import SampleHOC from './SampleHOC'

const ParamComponent = () => <div>Random</div>
const Param2 = () => <span>Ok!</span>
const WithHOC = SampleHOC(ParamComponent)
const WithHOC2 = SampleHOC(Param2)

export default function SampleComponent({ sample, sampleAction }) {
  const handleClick = () => sampleAction(true)
  return (
    <div>
      <div>Sample value: {String(sample)}</div>
      <div>
          <button onClick={handleClick}>Change Sample Value!</button>
      </div>
      <WithHOC />
      <WithHOC2 />
    </div>
  )
}
