const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


const restaurants = [
  {
    id: 1,
    name: "Pizza Hut",
    location: "New York",
    cuisines: ["Pizzas"],
    costForTwo: "₹350 for two",
    avgRating: 4.3,
    ratingCount: "1.6K+",
    resImageID:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/4b0d9642-50f8-4cae-8bd5-afb13933af80_10894.jpg",
    deliveryTime: 30,
    menu: [
      {
        id: 1,
        name: "Veggie Supreme - Personal",
        price: 379,
        imageId: "z0c4xpovma1qtmu4tlls",
        description:
          "A supreme combination of Black Olives, Green Capsicum, Mushroom, Onion, spicy Red Paprika & juicy Sweet Corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per-254Kcal/100g)",
        isVeg: 1,
        rating: "2.5",
        ratingCount: "62 ratings",
      },
      {
        id: 2,
        name: "Murg Malai Chicken - Personal",
        price: 279,
        imageId: "t1stinhga3alitdpr6yt",
        description:
          "Amazingly flavourful Chicken Malai Tikka, Herbed Onion & Green Capsicum, spicy Red Paprika with flavourful pan sauce and 100% mozzarella cheese. (PAN Per-269Kcal/100g)",
        isVeg: 0,
        rating: "3.5",
        ratingCount: "92 ratings",
      },
      {
        id: 3,
        name: "Mazedar Makhni Paneer - Personal",
        price: 179,
        imageId: "bf62afee565475fb92a204206321a41c",
        description:
          "A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle (PAN Per-288Kcal/100g)",
        isVeg: 1,
        rating: "3.8",
        ratingCount: "52 ratings",
      },
      {
        id: 4,
        name: "Mexican Fiesta - Personal",
        price: 189,
        imageId: "0c4c12819d98a35144e3f08451ae64f3",
        description:
          "Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella Cheese with a signature spice sprinkle & our flavourful pan sauce. (PAN Per-266Kcal/100g)",
        isVeg: 1,
        rating: "3.1",
        ratingCount: "102 ratings",
      },
      {
        id: 5,
        name: "Masala Keema Garlic Bread",
        price: 189,
        imageId: "bf62afee565475fb92a204206321a41c",
        description:
          "Serves 1 | Hut's signature Garlic Bread topped with chicken keema masala, onion and green chilli & a flavourful dressing.A must try! (442 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        isVeg: 0,
        rating: "4.1",
        ratingCount: "25 ratings",
      },
      {
        id: 6,
        name: "Classic Mushroom Pasta",
        price: 189,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/11/14/4a5b52dd-fa17-4fc9-90d4-efd0bce5fd89_ecbfdac7-d6a0-4912-99c0-7ecc147d3539.jpg",
        description:
          "Serves 1 | Fusilli pasta baked in classic mushroom sauce (230 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        isVeg: 1,
        rating: "3.1",
        ratingCount: "95 ratings",
      },
      {
        id: 7,
        name: "Penne McN Cheese Pasta",
        price: 189,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/11/14/46ffee9e-c54c-4404-b34d-52efb388b361_2f6dc8c9-f1b6-4417-a121-04700ea13ad4.jpg",
        description:
          "Serves 1 | Penne Pasta baked in classic jalapeno sauce along with green capsicum, onion and red capsicum topped with 100% mozzarella cheese (227 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        isVeg: 0,
        rating: "4.1",
        ratingCount: "85 ratings",
      },
      {
        id: 8,
        name: "Pepsi Zero Sugar 300ml",
        price: 59,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/3/19/b9b2a29e-bc85-48ac-b27b-0e00036fcb8f_6f1d9787-4527-4f62-a568-6975a1525344.png",
        description:
          "Serves 1 | Pepsi Zero Sugar Can 300ml. Contains Caffeine (0 Kcal/100ml)",
        isVeg: 1,
        rating: "4.1",
        ratingCount: "85 ratings",
      },
      {
        id: 9,
        name: "Sunfeast Dark Fantasy Chocolate Shake 300ml",
        price: 95,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/7/ab734e36-8258-438e-a6aa-9a6a99b25073_4611a11c-0b12-473b-99f5-e3ab23c3f22f.jpg",
        description:
          "Treat yourself with a divine shake, made with a blend of milk and real Belgian chocolate. (109 Kcal/100 ml). Contains Milk, Nut. May Contain Soy.",
        isVeg: 1,
        rating: "3.1",
        ratingCount: "55 ratings",
      },
      {
        id: 10,
        name: "Cheezy Cheese Veg",
        price: 245,
        imageId: "bb4e4f27e81fc6c6714d4ce9cbc2ffe8",
        description:
          "Thin & Crispy crust, loaded with Crunchy Onion, Green Capsicum, Red Bell Pepper, Juicy Sweet Corn, 100% mozzarella cheese, flavorful sauce, folded over and baked then brushed with herbed butter and sprinkled with cheezy seasoning. (296 Kcal/100g).Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        isVeg: 1,
        rating: "3.8",
        ratingCount: "85 ratings",
      },
    ],
  },

  {
    id: 2,
    name: "Goila Butter Chicken",
    location: "New York",
    cuisines: ["North Indian","Biryani","Kebabs","Desserts"],
    costForTwo: "₹600 for two",
    avgRating: 4.3,
    ratingCount: "1.5K+",
    resImageID:
      "5e19832da032dd69547565e27104706f",
    deliveryTime: 29,
    menu: [
        {
          id: 1,
          name: "Goila Chicken Kebab",
          price: 379,
          imageId: "b126bb10be6b7e157d54e5da85071fdb",
          description:
            "[4 pcs] Goila's version of Galouti kebab with finely ground Chicken keema seasoned with a bouquet of herbs and spices, laced with the mild smokiness of ghee, It's also known as kebabs for nawabs. Served with chutney and onion.",
          isVeg: 0,
          rating: "4.5",
          ratingCount: "82 ratings",
        },
        {
          id: 2,
          name: "Dhaba Style Chili Chicken",
          price: 359,
          imageId: "6d09d95cdfd2687e6aafafab8851160e",
          description:
            "[8 pcs] Fried Chicken with some vegies tossed in our Desi inhouse sauce. Slightly tangy & spicy a mouth watering starter to start your Meal",
          isVeg: 0,
          rating: "3.9",
          ratingCount: "92 ratings",
        },
        {
          id: 3,
          name: "Chicken Kalimirch",
          price: 399,
          imageId: "c1bb4f1012b10901fd1870cad577ff3e",
          description:
            "[8 pcs] Soft, juicy chicken tikka that melts in your mouth. Tender pieces of boneless chicken in our peppery malai marinade.",
          isVeg: 0,
          rating: "4.1",
          ratingCount: "92 ratings",
        },
        {
          id: 4,
          name: "Goila Butter Chicken",
          price: 589,
          imageId: "l2uwqfqoxay2fxa4myce",
          description:
            "[Serves 2] MasterChef Goila's version Of The Classic Butter Chicken, Reviving The Authentic Flavours and Giving It A New Smoky Twist. Creamy and comforting",
          isVeg: 0,
          rating: "4.1",
          ratingCount: "102 ratings",
        },
        {
          id: 5,
          name: "Desi Egg Curry [500ml]",
          price: 289,
          imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/5/d2d509b7-55d6-4733-8ab4-eee96f35cf71_b2f04679-0cc1-4707-bcf1-983eafb742cc.jpg",
          description:
            "[4 Full eggs] Indulge in the rich homestyle gravy and aromatic flavors of our Desi Egg Curry, a classic Indian dish simmered in a luscious blend of our in-house gravy and spices.",
          isVeg: 0,
          rating: "4.1",
          ratingCount: "29 ratings",
        },
        {
          id: 6,
          name: "Chicken Tikka Masala",
          price: 489,
          imageId: "21b6f7adb7328a8828aa3910ff605af4",
          description:
            "[500 ml][Serves 2] Boneless Chicken tossed in a blend of butter gravy and onion tomato masala. It's got a bit of spice, tang and a hint of sweetness.",
          isVeg: 0,
          rating: "4.1",
          ratingCount: "85 ratings",
        },
        {
          id: 7,
          name: "Party Starter Non Veg [Serves 10]",
          price: 2299,
          imageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/25/4893a26f-18ab-41db-9dd9-12245baa269e_464e580f-1138-4ad2-a8c0-1fd4f410de59.png",
          description:
            "Serves 10 | Classic combination of all the starters for your party",
          isVeg: 0,
          rating: "4.1",
          ratingCount: "80 ratings",
        },
        {
          id: 8,
          name: "Butter Chicken Biryani",
          price: 459,
          imageId: "qzq2734wagxspa67kqmv",
          description:
            "Goila Butter Chicken Layered With Saffron Scented Rice Topped With Fried Onions And Cashews",
          isVeg: 0,
          rating: "4.1",
          ratingCount: "85 ratings",
        },
        {
          id: 9,
          name: "Butter Paneer Biryani",
          price: 355,
          imageId: "05def16df2855a402e5eba41ec697417",
          description:
            "Goila Butter Paneer Layered With Saffron Scented Rice Topped With Fried Onions And Cashews.",
          isVeg: 1,
          rating: "4.1",
          ratingCount: "55 ratings",
        },
        {
          id: 10,
          name: "Gajar Ka Halwa",
          price: 245,
          imageId: "31ecfddcd67c9d463cc099b92f703e96",
          description:
            "[175 gm]\nA classic Indian dessert crafted with grated carrots, simmered in ghee, infused with cardamom, and garnished with nuts for a divine treat.",
          isVeg: 1,
          rating: "3.8",
          ratingCount: "85 ratings",
        },
      ],
  },

  {
    id: 3,
    name: "Moti Mahal",
    location: "Ghatkopar",
    cuisine: "Indian",
    menu: [
      { id: 1, name: "Thali", price: 8 },
      { id: 2, name: "Butter Chicken", price: 7 },
      { id: 3, name: "Butter Chicken", price: 7 },
      { id: 4, name: "Butter Chicken", price: 7 },
      { id: 5, name: "Butter Chicken", price: 7 },
      { id: 6, name: "Butter Chicken", price: 7 },
    ],
  },
];


app.get("/restaurants", (req, res) => {
  const restaurantList = restaurants.map(({ id, name, location, cuisine }) => ({
    id,
    name,
    location,
    cuisine,
  }));
  res.json(restaurantList);
});


app.get("/restaurants/:id/menu", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }

  res.json(restaurant.menu);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
