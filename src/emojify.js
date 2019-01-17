function emojify(text) {
  var pizzas = text.replace(/pizzas?/gi, "🍕");
  var tacosNPizza = pizzas.replace(/tacos?/gi, "🌮");
  return tacosNPizza;
}
// /pizzas?/gi is a REGULAR EXPRESSION (more on this next module)
// --------------------------------------------------------------
// s? means the "s" is optional (pizza or pizzas)
// g is for "global" (searches for ALL the pizzas, not just the 1st)
// i is for "ignore case" (PiZza, pizzA, etc. all work)

// var text = "i like tacos and pizza"
// var pizza = "i like tacos and 🍕"
// var tacosNPizza = "i like 🌮 and 🍕"
