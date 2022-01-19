import React from "react";
import "tachyons";




const data = {
  form: {
    sections: [
      {
        order: 1,
        // section_title: "NBasic information",
        fields: 
        [
          {
            "id": 1,
    "Dishname": "Lasagne",
    "Description": "Breaded fried chicken with waffles, and a side of maple syrup.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 2,
    "Dishname": "Pho",
    "Description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 3,
    "Dishname": "Stinky Tofu",
    "Description": "Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 4,
    "Dishname": "Scotch Eggs",
    "Description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 5,
    "Dishname": "Stinky Tofu",
    "Description": "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 6,
    "Dishname": "Hummus",
    "Description": "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 7,
    "Dishname": "Sushi",
    "Description": "Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 8,
    "Dishname": "Fish and Chips",
    "Description": "Three egg whites with spinach, mushrooms, caramelized onions, tomatoes and low-fat feta cheese. With herbed quinoa, and your choice of rye or whole-grain toast.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 9,
    "Dishname": "Seafood Paella",
    "Description": "Smoked salmon, poached eggs, diced red onions and Hollandaise sauce on an English muffin. With a side of roasted potatoes.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 10,
    "Dishname": "Chicken Wings",
    "Description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 11,
    "Dishname": "Seafood Paella",
    "Description": "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 12,
    "Dishname": "Chilli con Carne",
    "Description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 13,
    "Dishname": "Pappardelle alla Bolognese",
    "Description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 14,
    "Dishname": "Salmon Nigiri",
    "Description": "Fresh parsley, Italian sausage, shallots, garlic, sun-dried tomatoes and mozzarella cheese in an all-butter crust. With a side of mixed fruits.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 15,
    "Dishname": "Chicken Fajitas",
    "Description": "Breaded fried chicken with waffles, and a side of maple syrup.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 16,
    "Dishname": "Pasta Carbonara",
    "Description": "Creamy mascarpone cheese and custard layered between espresso and rum soaked house-made ladyfingers, topped with Valrhona cocoa powder.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 17,
    "Dishname": "Pho",
    "Description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 18,
    "Dishname": "Hummus",
    "Description": "Breaded fried chicken with waffles. Served with maple syrup.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 19,
    "Dishname": "Tiramisù",
    "Description": "Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 20,
    "Dishname": "Pasta and Beans",
    "Description": "Breaded fried chicken with waffles. Served with maple syrup.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 21,
    "Dishname": "Pizza",
    "Description": "Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 22,
    "Dishname": "Seafood Paella",
    "Description": "Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 23,
    "Dishname": "Pork Sausage Roll",
    "Description": "Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 24,
    "Dishname": "Pork Belly Buns",
    "Description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 25,
    "Dishname": "Katsu Curry",
    "Description": "Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 26,
    "Dishname": "Meatballs with Sauce",
    "Description": "Creamy mascarpone cheese and custard layered between espresso and rum soaked house-made ladyfingers, topped with Valrhona cocoa powder.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 27,
    "Dishname": "Caprese Salad",
    "Description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 28,
    "Dishname": "Pizza",
    "Description": "Smoked salmon, poached eggs, diced red onions and Hollandaise sauce on an English muffin. With a side of roasted potatoes.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 29,
    "Dishname": "Poutine",
    "Description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
    "image": "https://loremflickr.com/300/300/food"
  },
  {
    "id": 30,
    "Dishname": "Pierogi",
    "Description": "Fresh parsley, Italian sausage, shallots, garlic, sun-dried tomatoes and mozzarella cheese in an all-butter crust. With a side of mixed fruits.",
    "image": "https://loremflickr.com/300/300/food"
          },
        ],
      },
    ],
  },
};

export default function Dishes() {
  return ( 
  <div className="container-1" >
  <form>
      {
          data.form.sections.map(FormData =>{
              console.log("formdata", FormData)
              return(
                  <div className="container-2" >
                      {
                          FormData.fields.map(outputData =>{
                              console.log( outputData);
                              return(
                                  <div className="bg-light-green dib  dt--fixed w-40  .br5  pa5 ma4 shadow-5 grow tc fw7  ">
                                 
                               
                                <img src={"https://loremflickr.com/300/300/food /${id}}",outputData.image} alt="icons"/>
                                <p> Dishname={outputData.Dishname} <br/> Description={outputData.Description} </p>
                                  </div>

// outputData.image
// bw2 br3

                              )
                          })
                      }
                  </div>
              )
          })
      }
  </form>
  </div>
  );
}


