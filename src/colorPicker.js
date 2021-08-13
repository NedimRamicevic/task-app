import React, {useState} from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState(colorNames[0])

 const divStyle = {backgroundColor: color};

 return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      {
          colorNames.map(colorName => (
              <button onClick ={() => setColor(colorName)} key= {colorName}>{colorName}</button>
          ))
      }
    </div>
  );
}