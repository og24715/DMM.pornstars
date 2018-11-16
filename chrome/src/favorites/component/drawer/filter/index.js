import React from 'react';
import { Slider } from 'antd';

export default ({ filter }) => (
  <div>
    age:
    <Slider range min={18} max={40} defaultValue={[18, 20]} value={filter.age} />
    bust:
    <Slider range min={40} max={150} defaultValue={[90, 110]} value={filter.bust} />
    west:
    <Slider range min={40} max={100} defaultValue={[50, 70]} value={filter.west}/>
    hip:
    <Slider range min={40} max={150} defaultValue={[80, 110]} value={filter.hip}/>
  </div>
);
