let dish = [
  {
    name: 'Steak',
    image_url: '/images/jose-ignacio-pompe-XY-V_o-ykuk-unsplash.jpg',
    description: 'Juicy and tender steak grilled to perfection, served with your choice of side dish and sauce'
  },
  {
    name: 'Vegan Salad Bowl',
    image_url: '/images/Vegan salad bowl.jpeg',
    description: 'Fresh and crisp salad made with a variety of seasonal vegetables, tossed with a delicious vegan dressing and topped with crunchy nuts or seeds.',
  },
  {
    name: 'Cheesecake',
    image_url: '/images/Cheese-cake.jpeg',
    description: 'Indulge in our creamy and rich cheesecake, made with the finest ingredients and baked to perfection on a buttery graham cracker crust. Served plain or with your choice of fruit topping',
  }
];


function handleSelectedDish(details) {
  for (let i = 0; i < dish.length; i++) {

    let selected_dish = details.target.getAttribute('dish');
    if (selected_dish === dish[i][`name`]) {
      let selected_dish_details = JSON.stringify(dish[i])
      Cookies.set('selection', selected_dish_details);
    }
  }}

  







  // let dishObj = {
  //   name: dish[i].name,
  //   image_url: dish[i].image_url,
  //   description: dish[i].description
  // };


let select_dish = document.querySelectorAll('.selection');
for (let i = 0; i < select_dish.length; i++) {
  select_dish[i].addEventListener('click', handleSelectedDish);
}


