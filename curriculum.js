
 const direccion = document.getElementById("direccion");
 const email = document.getElementById("email");
 const telefono = document.getElementById("telefono");
 const texto = document.getElementById("texto");

 direccion.addEventListener("click", function() {
   texto.innerHTML = "6888 Ash Dr";
 });

 email.addEventListener("click", function() {
   texto.innerHTML = "melvin.brewer@example.com";
 });

 telefono.addEventListener("click", function() {
   texto.innerHTML = "(693) 447-4258";
 });