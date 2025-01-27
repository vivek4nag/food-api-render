const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const restaurants = [
  {
    id: 1,
    name: "Pizza Hut",
    location: "BTM Colony",
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
    location: "Park Street",
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
    location: "Vaishali",
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
        name: "Classic Veggie Craver (10cm)",
        price: 169,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/8/27/139b57b9-fecb-4a85-ab12-04ea966aa69e_ea75b715-9b5c-4950-bf05-072032803796.png",
        description:
          "A delicious veggie patty made with chickpeas and green peas tossed in garlic and mint mayo, topped with fresh lettuce, tomato, capsicum, onion. Serving size - 168 g/292 kcal. Allergens - Contains wheat, rye, barley, oats, milk, soy, cashew nuts.",
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
        name: "Chicken Teriyaki Salad",
        price: 319,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/8/4/4f4cc17a-5aca-47c7-908b-cb57348ffc88_ad21fc64-fee4-46e8-9bc0-c0292a8ced03.png",
        description:
          "Serves 1 | Enjoy our teriyaki flavours in a salad. Chicken strips glazed with teriyaki sauce, served with a generous pile of veggies and topped with sweet onion sauce. Serving size : 425 g / 243 kcal. Allergens - Contains wheat, milk, soy. Values include lettuce, tomatoes, green peppers, cucumbers, onions and olives.",
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
        name: "Spicy Chicken Keema Sandwich",
        price: 329,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/9/9/ebf31975-0f66-48b5-b156-381c6962dceb_842f7310-2866-4d79-81f8-b564106c240f.png",
        description:
          "Spicy & juicy chicken keema served along with wholesome veggies and packed in your choice of freshly baked bread. Serving size: 15cm -280 g / 510 kcal, 30cm- 560g /1020 kcal. Allergens- Contains wheat, rye, barley, oats, milk, soy. Values include multigrain bread, lettuce, tomatoes, onions, green peppers and cucumbers.",
        isVeg: 0,
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
        name: "Vanilla Ice Cream (Factory sealed)",
        price: 288,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/5/10/860aeec1-af16-421c-8b6a-dee0fd58c3c7_4adf8765-dbee-4c78-a3b5-833d3c33b640.jpg",
        description:
          "Not quite like a plain Jane, this is a rich, dense vanilla ice cream that you'll recommend to friends. Seriously creamy, seriously tasty, a lot can happen over a Vanilla ice cream! (Contains milk)",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "92 ratings",
      },
      {id: 402,
        name: "Mint Milk Chocolate Chip…(Factory sealed 450 ml)",
        price: 359,
        imageId: "35fed44abd7a8d9747c76f497d6f7899",
        description:
          "An ice cream that tells the mint and chocolate love story like no other. This classic ice cream is a marriage of Mint and Milk Chocolate pieces.",
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
        name: "Naughty Nutella Ice Cream (Tub)",
        price: 475,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/3/6b4d9cc1-3bb2-4d21-923b-57d384d227ff_fa94d0f2-6b10-4062-a3f9-99299254b694.jpg",
        description:
          "Heavenly Nutella ice cream made with velvety Nutella paste and premium chocolate. Get nutty!",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "250 ratings",
      }
    ],
  },

  {
    id: 5,
    name: "KFC",
    location: "Defense Colony",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    costForTwo: "₹400 for two",
    avgRating: 4.1,
    ratingCount: "9.2K+",
    resImageID: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/6c5652c0-9a23-4cd6-abb4-3bc90a464fe1_334475.JPG",
    deliveryTime: 35,
    menu: [
      {id: 501,
        name: "Double Down Burger & Popcorn Meal",
        price: 429,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/12/014154b0-fac7-4eac-8ab7-1ddf618ea6c7_85305f92-8425-42e5-a566-fe05c3681455.jpg",
        description:
          "Best of all worlds with 1 Double Down- all chicken no bun Burger, Regular Popcorn & Pepsi 475ml [Serves 1]",
        isVeg: 0,
        rating: "4.5",
        ratingCount: "92 ratings",
      },
      {id: 502,
        name: "Indian Tandoori Roll Chicken Meal",
        price: 419,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/10/6b6f3b25-fed1-4e21-afa4-0810da0f2059_b7efdb4b-1568-47b0-9432-1030f6e7ea31.jpg",
        description:
          "Save Rs. 75 on Indian Tandoori Roll, Classic Zinger Burger, Medium Fries & Pepsi PET 475ml",
        isVeg: 0,
        rating: "4.3",
        ratingCount: "82 ratings",
      },
      {id: 503,
        name: "Peri Peri 10 Pc Chicken Strips & 2 Dips",
        price: 519,
        imageId: "a0feef07b2a9d72ba02f4a7d53e46948",
        description:
          "Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",
        isVeg: 0,
        rating: "4.7",
        ratingCount: "52 ratings",
      },
      {id: 504,
        name: "Peri Peri Chicken 10 Leg Pc & 4 Dips",
        price: 968,
        imageId: "ye1imbdqn5efc7vheuah",
        description:
          "Save 19% on 10 KFC Peri Peri Leg Piece with 4 dips(20gm each)",
        isVeg: 0,
        rating: "4.0",
        ratingCount: "92 ratings",
      },
      {id: 505,
        name: "All in One Chicken Bucket",
        price: 585,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/5/15/514ac4ef-0ff9-4e78-b118-10ba644d54bb_5e50748c-fc45-4d11-be03-ace7d41abb10.jpg",
        description:
          "1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml",
        isVeg: 0,
        rating: "4.2",
        ratingCount: "99 ratings",
      },
      {id: 506,
        name: "Smoky Red Chicken Rice Bowlz",
        price: 229,
        imageId: "3e243b6fbc280b8891643b1d3b7836f6",
        description:
          "Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with smoky grilled chicken & gravy!",
        isVeg: 0,
        rating: "4.3",
        ratingCount: "105 ratings",
      },
      {id: 507,
        name: "Hot & Crispy Chicken - 4 pcs",
        price: 430,
        imageId: "m7q813n17jh4nrhtt7ss",
        description:
          "4 pcs of signature Hot & crispy chicken at a deal price",
        isVeg: 0,
        rating: "4.5",
        ratingCount: "185 ratings",
      },
      {id: 508,
        name: "Smoky Red Grilled Chicken - 5 pc",
        price: 539,
        imageId: "ewi33xnqju9f6ezzwhbk",
        description:
          "Grab 5 pc Smoky Red Chicken - grilled to perfection",
        isVeg: 0,
        rating: "4.0",
        ratingCount: "255 ratings",
      },
      {id: 509,
        name: "Choco Lava Cake",
        price: 89,
        imageId: "thb7rrdooctsnknsnatz",
        description:
          "Chocolate Goodness! Soft chocolate cake with lava oozing center",
        isVeg: 1,
        rating: "4.6",
        ratingCount: "25 ratings",
      },
      {id: 510,
        name: "Pepsi Black Can 300 ml",
        price: 60,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/5/15/e55c98fd-63b1-465d-ac8f-cbddff020c17_62384ee0-1c37-4fbd-9f6a-b5f350567cda.jpg",
        description:
          "Pepsi Black Can 300 ml",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "250 ratings",
      }
    ],
  },

  {
    id: 6,
    name: "McDonald's",
    location: "Laxmi Nagar",
    cuisines: ["Burgers", "Fast Food", "Beverages", "Cafe", "Desserts"],
    costForTwo: "₹400 for two",
    avgRating: 4.5,
    ratingCount: "4.2K+",
    resImageID: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/547a1c53-66ed-474e-999d-6e9e4b570f83_23683.jpg",
    deliveryTime: 25,
    menu: [
      {id: 601,
        name: "Chicken Surprise Burger Combo",
        price: 238,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/22/cb9833dd-5983-4445-bb1b-8d0e70b6c930_8928ae23-ddae-4d9a-abc5-e887d7d7868e.png",
        description:
          "Chicken Surprise Burger Combo + Fries (M) + Drink of your choice.",
        isVeg: 0,
        rating: "4.5",
        ratingCount: "92 ratings",
      },
      {id: 602,
        name: "Cappuccino Small with Hazelnut.",
        price: 185,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/23/1793c61c-48f4-4785-b8a6-bc50eadb3b88_36ab0b13-0b17-459c-97a6-50dea3027b80.png",
        description:
          "A delightful and aromatic coffee beverage that combines the robust flavor of espresso with the rich, nutty essence of hazelnut.",
        isVeg: 1,
        rating: "4.3",
        ratingCount: "82 ratings",
      },
      {id: 603,
        name: "Chicken Surprise Burger + 4 Pc Chicken McNuggets + Coke.",
        price: 249,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/4/6c0288a4-943a-4bb6-a810-b14877c0ea8f_f56187da-4ae4-4a88-b1a5-e48e28d78087.png",
        description:
          "Enjoy the newly launched Chicken Surprise Burger with 4 Pc Chicken McNuggets and Coke",
        isVeg: 0,
        rating: "4.7",
        ratingCount: "52 ratings",
      },
      {id: 604,
        name: "Iced Coffee with Cinammon Spice",
        price: 228,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/23/8db75dd0-07fa-4afb-8243-44d87b74f45b_e7a88ae1-c3d6-487a-b3c8-48880a309593.png",
        description:
          "An ideal choice for those who enjoy a flavorful, refreshing cinammon twist to their iced coffee, providing a satisfying and refreshing pick-me-up.",
        isVeg: 1,
        rating: "4.0",
        ratingCount: "92 ratings",
      },
      {id: 605,
        name: "2 Crispy Veggie Burger  + 2 Fries (M) + Veg Pizza McPuff.",
        price: 585,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ca2023e7-41e0-4233-a92c-c2bc52ef8ee5_33a0ea24-50ee-4a9b-b917-bbc2e6b5f37b.png",
        description:
          "Feel the crunch with Burger Combos for 2: 2 Crispy Veggie Burger + 2 Fries (M)+ Veg Pizza McPuff",
        isVeg: 1,
        rating: "4.2",
        ratingCount: "205 ratings",
      },
      {id: 606,
        name: "2 Mc Crispy Chicken Burger + 2 Fries (M) + Veg Pizza McPuff.",
        price: 669,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/9/18/921eac18-93f2-43ee-aaf3-6ba7b8d15aea_302570c8-8813-46a5-8897-569c8965d163.png",
        description:
          "Feel the crunch with Burger Combos for 2: 2 McCrispy Chicken Burger + 2 Fries (M)+ Veg Pizza McPuff",
        isVeg: 0,
        rating: "4.3",
        ratingCount: "105 ratings",
      },
      {id: 607,
        name: "Crispy Veggie Burger",
        price: 200,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/12/7a3244bf-3091-4ae6-92e3-13be841a753e_b21f7a05-24b3-43f8-a592-beb23e6b69fa.png",
        description:
          "A flavorful patty made with a blend of 7 premium veggies, topped with zesty cocktail sauce, all served between soft, premium buns. Perfectly satisfying and full of flavor.",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "185 ratings",
      },
      {id: 608,
        name: "Mc Crispy Chicken Burger + McAloo Tikki.",
        price: 295,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/12/e6b4a164-3b1d-4c2b-aec1-5be8bb4f9d52_a2997ea3-09a9-4993-8b4a-80c719143b7e.png",
        description:
          "Feel the crunch with our newly launched McCrispy Chicken Burger + McAloo Tikki",
        isVeg: 0,
        rating: "4.0",
        ratingCount: "255 ratings",
      },
      {id: 609,
        name: "McSpicy Paneer Burger",
        price: 224,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/22/fb912d21-ad9d-4332-b7cf-8f65d69e2c47_1fa5998c-b486-449a-9a88-2e61cf92ff77.png",
        description:
          "Indulge in rich & filling spicy paneer patty served with creamy sauce, and crispy lettuce—irresistibly satisfying!",
        isVeg: 1,
        rating: "4.6",
        ratingCount: "85 ratings",
      },
      {id: 610,
        name: "Indulge Choco Jar Dessert",
        price: 76,
        imageId: "c7165efd872543e1648c21c930dafe5f",
        description:
          "Rich chocolate for pure indulgence to satify your sweet tooth.",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "250 ratings",
      }
    ],
  },

  {
    id: 7,
    name: "Theobroma",
    location: "Hauz khas",
    cuisines: ["Bakery", "Beverages", "Cafe", "Desserts"],
    costForTwo: "₹400 for two",
    avgRating: 4.7,
    ratingCount: "3.2K+",
    resImageID: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d7a7942b-d8d6-41d3-acbc-8e624b8677c7_325024.jpg",
    deliveryTime: 35,
    menu: [
      {id: 701,
        name: "Strawberry & Fresh Cream Cake [1/2kg]",
        price: 725,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/7/1590fd7d-5127-4b9f-8bbc-92e2ff10adce_a89b0570-4e4c-497d-95c6-8f16ca545f0b.jpg",
        description:
          "Layers of strawberry jam, diplomat cream and soft vanilla cake covered with flaked almonds and topped with fresh strawberries.",
        isVeg: 1,
        rating: "4.5",
        ratingCount: "92 ratings",
      },
      {id: 702,
        name: "Eggless Dutch Truffle Cake [1/2kg]",
        price: 625,
        imageId: "01f50ea13d7b168d8ab2810a73e1e314",
        description:
          "Dark chocolate ganache with chocolate sponge.",
        isVeg: 1,
        rating: "4.3",
        ratingCount: "82 ratings",
      },
      {id: 703,
        name: "Chocoholic Cake [1/2kg]",
        price: 725,
        imageId: "4cfe67bfb168ed03ba5f2effaa341522",
        description:
          "Three layers of chocolate mousse: white, milk and dark chocolate mousse layered in this crowd-favourite cake.",
        isVeg: 1,
        rating: "4.7",
        ratingCount: "82 ratings",
      },
      {id: 704,
        name: "Hazelnut Praline Mousse Cake [1/2kg]",
        price: 800,
        imageId: "9fe46a2de9203dd6bf93f1167c42142b",
        description:
          "Homemade Hazelnut praline, chocolate mousse sandwiched between chocolate sponge cake and covered with a hazelnut chocolate glaze and toasted hazelnuts.",
        isVeg: 1,
        rating: "4.0",
        ratingCount: "162 ratings",
      },
      {id: 705,
        name: "Walnut Brownie [1 Piece]",
        price: 110,
        imageId: "f50bb96700ef84786a9dca64852a02f9",
        description:
          "Chocolate brownie topped with toasted walnuts.",
        isVeg: 1,
        rating: "4.2",
        ratingCount: "85 ratings",
      },
      {id: 706,
        name: "Millionaire Brownie [1 Piece]",
        price: 129,
        imageId: "51d62eed198e67bbaac8077d71441b69",
        description:
          "Soft buttery caramel sandwiched between our chocolate chip brownie and layer of dark chocolate truffle.",
        isVeg: 0,
        rating: "4.3",
        ratingCount: "105 ratings",
      },
      {id: 707,
        name: "Chicken Keema Roll [1 Piece]",
        price: 80,
        imageId: "fcb6d43c223135ff52b8dde41c650423",
        description:
          "Soft turmeric flavoured bread with an Amritsari  chicken keema filling.",
        isVeg: 0,
        rating: "4.5",
        ratingCount: "185 ratings",
      },
      {id: 708,
        name: "Butter Croissant [1 Piece]",
        price: 90,
        imageId: "bb8e702e8675c65213748526d49bfb06",
        description:
          "Flaky pastry laminated with butter.",
        isVeg: 1,
        rating: "4.0",
        ratingCount: "855 ratings",
      },
      {id: 709,
        name: "Cinnamon Swirl Cookies [8 pcs]",
        price: 180,
        imageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/1/38cc4d7f-8e64-4f46-a1cf-64e0437afb4a_b8a57dea-a589-402a-b2e5-29da104cd480.jpg",
        description:
          "Serves 1 | Cinnamon and butter cookie dough swirled together with a generous sprinkling of cinnamon sugar between the layers.",
        isVeg: 1,
        rating: "4.6",
        ratingCount: "85 ratings",
      },
      {id: 710,
        name: "Sweet Sesame Crackers [100g]",
        price: 125,
        imageId: "45a0001755ee7cb880ed712ff79d3d7a",
        description:
          "Thin & crispy tuilles with a butter & sesame flavour.",
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
