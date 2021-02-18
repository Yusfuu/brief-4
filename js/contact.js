let query = str => document.querySelector(str);

query("#submit").addEventListener('click', () => {

  let data = {
    username: query('#username').value,
    email: query('#email').value,
    subject: query('#subject').value,
    message: query('#message').value,
  };

  if (data.username == '' || data.email == '' || data.subject == '' || data.message == '') {
    alert('Pleas fill all');
    return;
  }
  query('body > div.modal').style.display = "initial";

  for (const i in data) {
    let p = document.createElement('p');
    let h = document.createElement('h3');
    h.innerText = i;
    query('body > div.modal > div').appendChild(h);
    p.innerText = data[i];
    query('body > div.modal > div').appendChild(p);
  }
});
query("body > div.modal > div > a").addEventListener('click', () => {
  query('body > div.modal').style.display = "none";
});