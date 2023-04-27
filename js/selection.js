let show_dish = Cookies.get(`selection`);
let your_dish = JSON.parse(show_dish);
let message = document.getElementsByClassName('message');
let display = document.querySelector('.display');

if (!your_dish) {
  // use message[0] to access the first element of the message array
  message[0].outerHTML = `<h1 class="error_message">You have not selected a dish!</h1>`;
} else {
  display.insertAdjacentHTML('afterend', `<div>
     <img src="${your_dish.image_url}" alt="">
      <p>${your_dish.description}</p>
      <h3>${your_dish.name}</h3>
   
    </div>`);
}









// if (your_dish !== undefined) {
//   let name = your_dish.name;
//   let image_url = your_dish.image_url;
//   let description = your_dish.description;
//   // do something with name, image_url, description
// } else {
//   let error_message = document.getElementsByClassName('error_message')[0];
//   error_message.innerHTML = 'Please click on the Home button and select a dish.';
// }