let query = _ => document.querySelector(_);


query('.items').addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    query('.not-found').style.display = 'none';
    let select = e.target.getAttribute('data-select');
    query(".active").classList.remove('active');
    e.target.classList.add('active');
    [...document.querySelectorAll('.picture')].forEach(img => {
      let item_name = img.getAttribute('data-name');
      if (select == item_name || select == 'all') {
        img.classList.add('show-image');
        img.classList.remove('hide-image');
      } else {
        img.classList.remove('show-image');
        img.classList.add('hide-image');
      }
    });
  }
});

function doOverlay(overflow, display, where) {
  query('body').style.overflowY = overflow;
  query(where).style.display = display;
}


function search() {
  let value = query('.search-input').value.toLowerCase().trim();
  query('.search-input').value = '';
  let found = false;
  if (value != '') {
    [...document.querySelectorAll('.picture')].forEach(img => {
      let item_name = img.getAttribute('data-name');
      if (value == item_name || item_name.includes(value)) {
        img.classList.add('show-image');
        img.classList.remove('hide-image');
        found = true;
      } else {
        img.classList.remove('show-image');
        img.classList.add('hide-image');
      }
    });
    doOverlay('auto', 'none', '.search-overlay');
    found ? query('.not-found').style.display = 'none' : query('.not-found').style.display = 'block';
  }
}

query('.gallery').addEventListener('click', (event) => {
  if (event.target.src == undefined) return;
  query('.select-overlay .pic').style.backgroundImage = `url(${event.target.src})`;
  doOverlay('hidden', 'flex', '.select-overlay');
});

query('#search').addEventListener('click', () => doOverlay('hidden', 'flex', '.search-overlay'));
query('.search-overlay .close').addEventListener('click', () => doOverlay('auto', 'none', '.search-overlay'));
query('.select-overlay .close').addEventListener('click', () => doOverlay('auto', 'none', '.select-overlay'));
query('body').addEventListener('keydown', (event) => (event.keyCode == 27) ? doOverlay('auto', 'none', '.search-overlay') : null);
query(".search-button").addEventListener('click', () => search());
query('.search-overlay').addEventListener('keydown', (event) => event.keyCode == 13 ? search() : null);


