// test.js
(function() {
  const DemoWidget = () => {
    const div = document.createElement('div');
    div.style.padding = '20px';
    div.style.border = '1px solid #ccc';
    div.style.borderRadius = '8px';
    div.style.textAlign = 'center';

    const h3 = document.createElement('h3');
    h3.innerText = 'Demo Widget';
    div.appendChild(h3);

    const p = document.createElement('p');
    p.innerText = 'This is a dynamically loaded widget!';
    div.appendChild(p);

    // Append to the body or a container element of your choice
    document.body.appendChild(div);
  };

  // Call the function to render the widget
  DemoWidget();
})();
