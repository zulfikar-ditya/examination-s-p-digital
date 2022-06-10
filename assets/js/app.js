const PIZZA_DATA = [
	{
		id: 0,
		name: "pizza 1",
		price: 8,
		image: "./assets/images/pexels-edward-eyer-1049620.jpg",
	},
	{
		id: 1,
		name: "pizza 2",
		price: 10,
		image: "./assets/images/pexels-engin-akyurt-2619970.jpg",
	},
	{
		id: 2,
		name: "pizza 3",
		price: 12,
		image: "./assets/images/pexels-pablo-macedo-845811.jpg",
	},
];

const PIZZA_SIZE = [
	{
		type: "Small",
		price: 1,
	},
	{
		type: "Medium",
		price: 1,
	},
	{
		type: "Large",
		price: 1,
	},
];

const PIZZA_TOPPINGS = [
	{
		id: 0,
		name: "Avocado",
		price: 1,
	},
	{
		id: 1,
		name: "Lobster",
		price: 1,
	},
	{
		id: 2,
		name: "Bacon",
		price: 3,
	},
	{
		id: 3,
		name: "Brocoli",
		price: 1,
	},
	{
		id: 4,
		name: "Oyster",
		price: 2,
	},
	{
		id: 5,
		name: "Duck",
		price: 3,
	},
	{
		id: 6,
		name: "Onions",
		price: 1,
	},
	{
		id: 7,
		name: "Salmon",
		price: 2,
	},
	{
		id: 8,
		name: "Ham",
		price: 3,
	},
	{
		id: 9,
		name: "Zicchini",
		price: 1,
	},
	{
		id: 10,
		name: "Tuna",
		price: 2,
	},
	{
		id: 11,
		name: "Sausage",
		price: 3,
	},
];

const PIZZA_TOPPING_LIST = [
	{
		id: 1,
		pizza_id: 0,
		pizza_topping_id: 0,
	},
	{
		id: 1,
		pizza_id: 0,
		pizza_topping_id: 3,
	},
	{
		id: 1,
		pizza_id: 0,
		pizza_topping_id: 6,
	},
	{
		id: 1,
		pizza_id: 0,
		pizza_topping_id: 9,
	},
	{
		id: 1,
		pizza_id: 0,
		pizza_topping_id: 10,
	},
	{
		id: 1,
		pizza_id: 0,
		pizza_topping_id: 8,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 3,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 6,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 9,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 1,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 4,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 7,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 2,
	},
	{
		id: 1,
		pizza_id: 1,
		pizza_topping_id: 8,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 3,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 6,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 9,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 10,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 2,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 5,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 8,
	},
	{
		id: 1,
		pizza_id: 2,
		pizza_topping_id: 11,
	},
];

const container_price_pizza = document.getElementById("container-pizza-price");
const container_size_pizza = document.getElementById("container-pizza-size");
const container_topping_pizza = document.getElementById(
	"container-pizza-topping",
);

let PIZZA_CHOOSEN_ID;

const display_pizza_data = () => {
	// * pizza data
	const pizza_data = document.getElementById("pizza-data");
	let pizza_list = "";
	PIZZA_DATA.map((data, key) => {
		let html = `<div class="col-4 rounded-sm-1">
                        <img src="${data.image}" alt="">
                        <div class="bg-light shadow p-md-2">
                            <div class="pizza_info">
                                <h3>${data.name}</h3>
                                <h5>$ ${data.price}</h5>
                            </div>
                            <input type="radio" name="pizza-type" value="${data.id}" id="pizza-type" onchange="handlePizzaChoose(this)">
                        </div>
                    </div>`;
		pizza_list += html;
	});
	pizza_data.innerHTML = pizza_list;
};

const display_pizza_size = () => {
	// * pizza size
	const pizza_size = document.getElementById("pizza-size");
	let pizza_size_list = "";
	PIZZA_SIZE.map((data, key) => {
		let html = `<div class="col-4">
                        <input type="radio" name="pizza-size" value="${data.price}" id="pizza-size" onchange="handlePizzaSize(this)">
                        <label for="pizza-size" class="capitalize">${data.type}</label>
                    </div>`;
		pizza_size_list += html;
	});
	pizza_size.innerHTML = pizza_size_list;
};

const display_pizza_topping = (pizza_id) => {
	// * pizza toppings
	const pizza_topping = document.getElementById("pizza-topping");
	let pizza_topping_list = "";
	PIZZA_TOPPING_LIST.map((e) => {
		if (e.pizza_id == pizza_id) {
			const pizza_topping = PIZZA_TOPPINGS[e.pizza_topping_id];
			let html = `<div class="col-4">
                            <input type="checkbox" name="topping" value="${pizza_topping.price}" id="topping" onchange="handlePizzaTopping(this)">
                            <label for="topping">${pizza_topping.name}</label>
                        </div>`;
			pizza_topping_list += html;
		}
	});
	pizza_topping.innerHTML = pizza_topping_list;
};

const init = () => {
	display_pizza_data();
};
init();

const update_price = (price) => {
	const total_price = document.getElementById("total-price");
	total_price.textContent = price;
};

const update_price_with_method = (price, method) => {
	if (method == "plus") {
		const total_price = document.getElementById("total-price");
		total_price.textContent = parseInt(total_price.textContent) + price;
	} else {
		const total_price = document.getElementById("total-price");
		total_price.textContent = parseInt(total_price.textContent) - price;
	}
};

const reset_topping = () => {
	const toppings = Array(document.getElementById("topping"));
	toppings.forEach((topping) => {
		if (topping.checked) !topping.checked;
	});
};

const handlePizzaChoose = (e) => {
	// display html
	container_price_pizza.classList.remove("hidden");
	container_size_pizza.classList.remove("hidden");
	display_pizza_size();

	// update data price
	update_price(PIZZA_DATA[e.value].price);
	PIZZA_CHOOSEN_ID = e.value;
	display_pizza_topping(PIZZA_CHOOSEN_ID);
	reset_topping();
};

const handlePizzaSize = (e) => {
	// display html
	container_topping_pizza.classList.remove("hidden");
	display_pizza_topping(PIZZA_CHOOSEN_ID);

	// update pric
	update_price_with_method(parseInt(e.value), "plus");
};

const handlePizzaTopping = (e) => {
	if (e.checked) {
		update_price_with_method(parseInt(e.value), "plus");
	} else {
		update_price_with_method(parseInt(e.value), "min");
	}
};
