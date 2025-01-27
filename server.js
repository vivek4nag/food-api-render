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
        id: 101,
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
        id: 102,
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
        id: 103,
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
        id: 104,
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
        id: 105,
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
        id: 106,
        name: "Classic Mushroom Pasta",
        price: 189,
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/11/14/4a5b52dd-fa17-4fc9-90d4-efd0bce5fd89_ecbfdac7-d6a0-4912-99c0-7ecc147d3539.jpg",
        description:
          "Serves 1 | Fusilli pasta baked in classic mushroom sauce (230 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        isVeg: 1,
        rating: "3.1",
        ratingCount: "95 ratings",
      },
      {
        id: 107,
        name: "Penne McN Cheese Pasta",
        price: 189,
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/11/14/46ffee9e-c54c-4404-b34d-52efb388b361_2f6dc8c9-f1b6-4417-a121-04700ea13ad4.jpg",
        description:
          "Serves 1 | Penne Pasta baked in classic jalapeno sauce along with green capsicum, onion and red capsicum topped with 100% mozzarella cheese (227 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        isVeg: 0,
        rating: "4.1",
        ratingCount: "85 ratings",
      },
      {
        id: 108,
        name: "Pepsi Zero Sugar 300ml",
        price: 59,
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/19/b9b2a29e-bc85-48ac-b27b-0e00036fcb8f_6f1d9787-4527-4f62-a568-6975a1525344.png",
        description:
          "Serves 1 | Pepsi Zero Sugar Can 300ml. Contains Caffeine (0 Kcal/100ml)",
        isVeg: 1,
        rating: "4.1",
        ratingCount: "85 ratings",
      },
      {
        id: 109,
        name: "Sunfeast Dark Fantasy Chocolate Shake 300ml",
        price: 95,
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/10/7/ab734e36-8258-438e-a6aa-9a6a99b25073_4611a11c-0b12-473b-99f5-e3ab23c3f22f.jpg",
        description:
          "Treat yourself with a divine shake, made with a blend of milk and real Belgian chocolate. (109 Kcal/100 ml). Contains Milk, Nut. May Contain Soy.",
        isVeg: 1,
        rating: "3.1",
        ratingCount: "55 ratings",
      },
      {
        id: 110,
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
    cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
    costForTwo: "₹600 for two",
    avgRating: 4.3,
    ratingCount: "1.5K+",
    resImageID: "5e19832da032dd69547565e27104706f",
    deliveryTime: 29,
    menu: [
      {
        id: 201,
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
        id: 202,
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
        id: 203,
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
        id: 204,
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
        id: 205,
        name: "Desi Egg Curry [500ml]",
        price: 289,
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/5/d2d509b7-55d6-4733-8ab4-eee96f35cf71_b2f04679-0cc1-4707-bcf1-983eafb742cc.jpg",
        description:
          "[4 Full eggs] Indulge in the rich homestyle gravy and aromatic flavors of our Desi Egg Curry, a classic Indian dish simmered in a luscious blend of our in-house gravy and spices.",
        isVeg: 0,
        rating: "4.1",
        ratingCount: "29 ratings",
      },
      {
        id: 206,
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
        id: 207,
        name: "Party Starter Non Veg [Serves 10]",
        price: 2299,
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/10/25/4893a26f-18ab-41db-9dd9-12245baa269e_464e580f-1138-4ad2-a8c0-1fd4f410de59.png",
        description:
          "Serves 10 | Classic combination of all the starters for your party",
        isVeg: 0,
        rating: "4.1",
        ratingCount: "80 ratings",
      },
      {
        id: 208,
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
        id: 209,
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
        id: 210,
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
    name: "Subway",
    location: "Ghatkopar",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    costForTwo: "₹350 for two",
    avgRating: 4.1,
    ratingCount: "2.5K+",
    resImageID: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/c74ad295-64fb-4319-98dc-5b677136c50b_752839.JPG",
    deliveryTime: 20,
    menu: [
      {id: 301,
        name: "Classic Chicken Craver (10cm)",
        price: 169,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/9/6a4362f9-c02b-411c-b489-a62799019cf0_32b73a5a-8a23-481c-9237-89a48a9fa5b5.png",
        description:
          "A Middle Eastern-inspired chicken patty with a garlic sauce, topped with fresh lettuce, onion, and gherkins. Serving size - 111 g/241 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts",
        isVeg: 0,
        rating: "4.1",
        ratingCount: "102 ratings",
      },
      {id: 302,
        name: "Cheesy Paneer Tikka",
        price: 349,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/23/db150a3a-6f10-4781-accc-4913a6ffebba_ead68be3-70f9-4b43-9b9d-69b854117b74.png",
        description:
          "Double the paneer, with real mozz cheese. Indulge in hot cheesy paneer melt loaded with paneer, tangy tandoori sauce, fresh veggies and cheese slice. Serving size: 15cm - 299 g/678 kcal, 30cm - 598 g/1356 kcal.  Allergens - Contains cereals containing gluten, milk, soy.",
        isVeg: 1,
        rating: "4.2",
        ratingCount: "92 ratings",
      },
      {id: 303,
        name: "Potato Chilli Cheese",
        price: 299,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/8/9/476ccea0-9c5a-4c0d-a357-286ff6b90b50_8c43ba23-5a16-4ff9-9921-34ec2b3025e5.png",
        description:
          "Hot toasted sub loaded with 1.5x potato patty and real mozz cheese, topped with mint mayo, onions and capsicum and cheese slice. Serving size: 15cm - 238 g/518 kcal, 30cm - 476 g/1036 kcal. Allergens - Contains cereals containing gluten, milk, soy.",
        isVeg: 1,
        rating: "3.7",
        ratingCount: "52 ratings",
      },
      {id: 304,
        name: "Potato Chilli Cheese",
        price: 299,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/8/9/476ccea0-9c5a-4c0d-a357-286ff6b90b50_8c43ba23-5a16-4ff9-9921-34ec2b3025e5.png",
        description:
          "Hot toasted sub loaded with 1.5x potato patty and real mozz cheese, topped with mint mayo, onions and capsicum and cheese slice. Serving size: 15cm - 238 g/518 kcal, 30cm - 476 g/1036 kcal. Allergens - Contains cereals containing gluten, milk, soy.",
        isVeg: 1,
        rating: "3.7",
        ratingCount: "52 ratings",
      },
      {id: 305,
        name: "Aloo Patty Sandwich",
        price: 209,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/3/11/f31bdc74-69db-4496-8dfa-f22b6f68a921_82efe8de-0dd9-4cf1-b80e-fcac3ce617af.png_compressed",
        description:
          "Serves 1 | Aloo patty seasoned with special herbs and spices, paired with your choice of nutritious veggies, on a freshly baked bread. Serving size : 15 cm - 275 g / 459 kcal , 30 cm - 550 g / 918 kcal , Allergens - Contains wheat, rye, barley, oats, milk. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        isVeg: 1,
        rating: "3.8",
        ratingCount: "90 ratings",
      },
      {id: 306,
        name: "Peri Peri Chicken Salad",
        price: 319,
        imageId: "FOOD_CATALOG/IMAGES/CMS/…4-a839-6d5fb82ffb39.png",
        description:
          "Serves 1 | Let your tastebuds travel the world with African peri-peri flavoured chicken served with your favourite veggies and a delicious dressing. Serving size : 425 g / 404 kcal. Allergens - Contains soy. Values include lettuce, tomatoes, green peppers, cucumbers, onions and olives.",
        isVeg: 0,
        rating: "4.3",
        ratingCount: "105 ratings",
      },
      {id: 307,
        name: "Italian B.M.T (Lamb) Salad",
        price: 329,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/22/d4afda76-e93e-4635-acd3-83b87c7c19e1_056ddae4-4345-4e6d-b79d-4fac86c83b98.png",
        description:
          "Protein-enriched classic Italian B.M.T. salad with a mix of lamb pepperoni, smoked chicken slice topped with your fav sauce to deliver a flavour burst that is served in your choice of freshly baked bread. Serving size : 435 g / 314 kcal. Allergens - Contains milk, soy.",
        isVeg: 0,
        rating: "4.5",
        ratingCount: "185 ratings",
      },
      {id: 308,
        name: "Cheesy American BBQ",
        price: 329,
        imageId: "FOOD_CATALOG/IMAGES/CMS/…1-a1fb-a23ff33da533.png",
        description:
          "Hot toasted sub loaded with 1.5x filling and real mozz cheese, topped with BBQ sauce, capsicum, onion, gherkins, eggless mayo and cheese slice. Serving size: 15cm - 230 g/457 kcal, 30cm - 460 g/914 kcal.  Allergens - Contains cereals containing gluten, milk, soy.",
        isVeg: 1,
        rating: "4.0",
        ratingCount: "255 ratings",
      },
      {id: 309,
        name: "Tandoori Chicken Tikka Signature Wrap Guiltfree",
        price: 319,
        imageId: "dc78c594be8406ea9cae63fb9f9295cf",
        description:
          `Serves 1 | Enjoy double the filling in this hearty wrap. Double portion of chicken paired with nutritious wonderful veggies and your choice of sauces, inside a tortilla. Now that's a meal for the soul! Serving size : 350 g / 684 kcal. Allergens - Contains wheat, barley, oats, milk, soy, cashew nut. Polyols may have laxative effects. Values include 11.5" multigrain wrap, lettuce, tomatoes, onions, green peppers and cucumbers.`,
        isVeg: 0,
        rating: "4.6",
        ratingCount: "25 ratings",
      },
      {id: 310,
        name: "Double Dark Chunk Chocolate Cookie (eggless)",
        price: 75,
        imageId: "3fd8460867feeb92ccf7d5cfd4341f3c",
        description:
          "Tasty & chocolatey. Now enjoy your favourite double dark chocolate chunk cookie. Serving size : 45 g / 206 kcal. Allergens - Contains wheat, milk, soy.",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "250 ratings",
      }
    ],
  },

  {
    id: 4,
    name: "Baskin Robbins - Ice Cream Desserts",
    location: "Dollars Colony",
    cuisines: ["Desserts", "Ice Cream"],
    costForTwo: "₹250 for two",
    avgRating: 4.7,
    ratingCount: "1.2K+",
    resImageID: "85ccae4e3576f9330af102c46ca85395",
    deliveryTime: 28,
    menu: [
      {id: 401,
        name: "Hazelnut Chocolate Milkshake(200ml)",
        price: 67,
        imageId: "FOOD_CATALOG/IMAGES/CMS/…c-b714-117b5fadb6dd.jpg",
        description:
          "Serves 1 | Experience the rich, nutty flavor of hazelnut blended with Belgian Chocolate in this creamy milkshake",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "92 ratings",
      },
      {id: 402,
        name: "Salted Butter Popcorn Ice Cream",
        price: 109,
        imageId: "FOOD_CATALOG/IMAGES/CMS/…365f796f.jpg_compressed",
        description:
          "Theatre style salted butter popcorn flavoured ice cream with fine popcorn pieces",
        isVeg: 1,
        rating: "4.3",
        ratingCount: "82 ratings",
      },
      {id: 403,
        name: "Bavarian Chocolate Ice Cream",
        price: 209,
        imageId: "29359cf5348a199580a7aa2a3381e3ca",
        description:
          "Rich chocolate based ice cream adorned with chocolate pieces and cashew nut crispies. If it?s Bavarian Chocolate flavour then it has got to be sinful and intensely indulgent. Throw in a bit of crunch and you?ve got a truly divine chocolate ice cream treat. -202 kcal -1712 kcal Allergen - Contains Milk , Nut and Soy. May Contains Cereal (wheat).).",
        isVeg: 1,
        rating: "3.7",
        ratingCount: "52 ratings",
      },
      {id: 404,
        name: "Cotton Candy Ice Cream",
        price: 109,
        imageId: "46aa7e59c80b950946b0076e62365a7c",
        description:
          "Perky pink, purple and childhood coloured cotton candy flavoured ice cream. Were happy to let you know that we have fulfilled every childs wish of cotton candy ice cream. --Small Scoop (118ml)-148.6 kcal / Regular Scoop (180ml) 226.6 kcal / Double Scoop(236ml) 297.12 kcal.Factory sealed 450ml-566.6 kcal / Hand scooped 500ml-629.5 kcal / Homepacks 700ml-881.3 kcal / Hand scooped 1 ltr-1259 kcal\nAllergen - Contains Milk. May Contains Cereal (wheat),Nut and Soy.",
        isVeg: 1,
        rating: "3.7",
        ratingCount: "92 ratings",
      },
      {id: 405,
        name: "Chocolate Fudge Brownie",
        price: 85,
        imageId: "no6ooh5j0hipcqvocmhw",
        description:
          "Gooey chocolate fudge brownies that'll warm you up.",
        isVeg: 1,
        rating: "4.2",
        ratingCount: "99 ratings",
      },
      {id: 406,
        name: "Gold Medal Ribbon Ice Cream (Factory sealed 450 ml)",
        price: 347,
        imageId: "ab33bf3fe175b5b3db95f7571ae4a57b",
        description:
          "A heavenly medley of vanilla and chocolate, embraced by a caramel ribbon. This vanilla and chocolate combo is our dream team! A thick, deep caramel ribbon intertwines the two flavours together in perfection.",
        isVeg: 1,
        rating: "4.3",
        ratingCount: "105 ratings",
      },
      {id: 407,
        name: "Honey Nut Crunch Ice Cream (Tub)",
        price: 540,
        imageId: "1f14ff0db808797c103097354cf3aa2f",
        description:
          "Ice cream with rich caramel and honey praline almonds. Honey, it?s nutty, it?s crunchy and it?s delightful. What are you waiting for? Get yourself a load of this Honey Nut Crunch ice cream. (Contains milk & tree nuts) --175.2 kcal - 1485 kcal Allergen - Contains Milk and Nut. May Contains Cereal (wheat) and Soy.",
        isVeg: 0,
        rating: "4.5",
        ratingCount: "185 ratings",
      },
      {id: 408,
        name: "Belgian Dream Sundae",
        price: 239,
        imageId: "mtpulfvexclgvgqatkib",
        description:
          "Warm brownie topped with delectable Belgian Bliss ice cream and hot fudge or butterscotch sauce.\n--152 gms / 497.4 kcal.Allergen-contains Milk, wheat and soy. May contains Nut.",
        isVeg: 1,
        rating: "4.0",
        ratingCount: "255 ratings",
      },
      {id: 409,
        name: "Cotton Candy and Marshmallows Super-Duper Thickshake",
        price: 265,
        imageId: "oruk2czylx3mi8xdanis",
        description:
          "Dreamy thickshake crafted with the all-time-favourite Cotton Candy ice cream. Topped with whipped cream, coloured sprinkles and mushy marshmallows. Yum!\n250ml / 588.83 kcal.Allergen-Contains Milk and soy.May contains Cereal(wheat)and Nut.",
        isVeg: 1,
        rating: "4.6",
        ratingCount: "25 ratings",
      },
      {id: 410,
        name: "Dutch Chocolate Ice Cream (Factory sealed 700 ml)",
        price: 475,
        imageId: "FOOD_CATALOG/IMAGES/CMS/…360d8186.jpg_compressed",
        description:
          "Tempting chocolate ice cream with a distinct hint of cocoa. The mother of every chocolate ice cream creation of ours.",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "250 ratings",
      }
    ],
  },
];

app.get("/restaurants", (req, res) => {
  const restaurantList = restaurants.map(
    ({
      id,
      name,
      location,
      cuisines,
      costForTwo,
      avgRating,
      ratingCount,
      resImageID,
      deliveryTime,
    }) => ({
      id,
      name,
      location,
      cuisines,
      costForTwo,
      avgRating,
      ratingCount,
      resImageID,
      deliveryTime,
    })
  );
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
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
