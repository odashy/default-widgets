// demo.js
const DemoWidget = () => {
  const div = document.createElement('div');
  div.style.padding = '20px';
  div.style.border = '1px solid #ccc';
  div.style.borderRadius = '8px';
  div.style.textAlign = 'center';

  const h3 = document.createElement('h3');
  h3.innerText = 'Demo Widget';

  const p = document.createElement('p');
  p.innerText = 'This is a dynamically loaded widget!';

  div.appendChild(h3);
  div.appendChild(p);

  return div;
};

export default DemoWidget;
