let data = { motorcycle: { price: 10, gear: "manuelle", engine: ["electrique", "essence"] }, citadin: { price: 12, gear: "manuelle", engine: ["electrique", "hybirde", "essence", "diesel"] }, compact: { price: 14, gear: "manuelle", engine: ["hybirde", "essence", "diesel"] }, utilitaire: { price: 16, gear: "manuelle", engine: ["diesel"] }, chantier: { price: 900, gear: "manuelle", engine: ["essence", "diesel"] }, berline: { price: 20, gear: "automatique", engine: ["hybirde", "essence", "diesel"] }, camion: { price: 250, gear: "automatique", engine: ["diesel"] } }, tarif = { electrique: 0.05, hybirde: 0.09, essence: 0.14, diesel: 0.21 };

let query = str => document.querySelector(str);
let type, engine, gear, days, price;
query('#type').addEventListener('change', (event) => {
  type = event.target.value;
  price = data[type].price;
  if (type != '') {
    while (query('#engine').options.length > 1) query('#engine').options.remove(1);

    data[type].engine.forEach(element => {
      let option = document.createElement('option');
      option.setAttribute('value', element);
      option.innerText = element;
      query('#engine').appendChild(option);
    });
    query('#gear').options[1].innerText = data[type].gear;
  }
});


query('button').addEventListener('click', () => {
  price = data[type].price;
  type = query('#type').value;
  engine = query('#engine').value;
  gear = query('#gear').value;
  days = query('#days').value;
  if (type == '' || engine == '' || gear == '' || days == '') {
    alert('Pleas fill all');
    return;
  }

  if (data[type].gear == 'automatique') {
    tarif[engine] = tarif[engine] + 0.19;
  }
  price = ((price * tarif[engine]) + price) * days;

  query('p.price > span').innerText = price;

});