const good_food = [
	{
		name: "Food1",
		description: "Description of Food 1",
		image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
	},
	{
		name: "Food2",
		description: "Description of Food 2",
		image_url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
	},
	{
		name: "Food3",
		description: "Description of Food 3",
		image_url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	}
];

let good_foodElements = document.querySelectorAll(".good_food");

good_foodElements.forEach((good_foodElement, index) => {
	let good_food = good_food[index];

	good_foodElement.addEventListener("click", () => {
		document.cookie = `selection=${good_food.name}; path=/`;
		alert(`You have selected ${good_food.name}`);
	});
});
