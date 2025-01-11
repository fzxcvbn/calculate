let conteiner_where = document.querySelector('.calculate-conteiner-where'),
    conteiner_address = document.querySelector('.calculate-border-left-from-where'),
    add_address = document.querySelector('.calculate-add-address'),
    heel = document.querySelector('.calculate-heel'),
    porter = document.querySelector('.calculate-porter'),
    gazelle = document.querySelector('.calculate-gazelle'),
    truck3 = document.querySelector('.calculate-truck3'),
    truck5 = document.querySelector('.calculate-truck5'),
    truck10 = document.querySelector('.calculate-truck10'),
    truck20 = document.querySelector('.calculate-truck20')

add_address.addEventListener("click", function() {
    new_where = conteiner_where.cloneNode(true);
    conteiner_address.append(new_where);
})

heel.addEventListener("click", function() {
    heel.ariaChecked = true;
    porter.ariaChecked = false;
    gazelle.ariaChecked = false;
    truck3.ariaChecked = false;
    truck5.ariaChecked = false;
    truck10.ariaChecked = false;
    truck20.ariaChecked = false;
    heel.style.outline = "1px solid #38C995";
    porter.style.outline = "none";
    gazelle.style.outline = "none";
    truck3.style.outline = "none";
    truck5.style.outline = "none";
    truck10.style.outline = "none";
    truck20.style.outline = "none";
})

porter.addEventListener("click", function() {
    heel.ariaChecked = false;
    porter.ariaChecked = true;
    gazelle.ariaChecked = false;
    truck3.ariaChecked = false;
    truck5.ariaChecked = false;
    truck10.ariaChecked = false;
    truck20.ariaChecked = false;
    heel.style.outline = "none";
    porter.style.outline = "1px solid #38C995";
    gazelle.style.outline = "none";
    truck3.style.outline = "none";
    truck5.style.outline = "none";
    truck10.style.outline = "none";
    truck20.style.outline = "none";
})

gazelle.addEventListener("click", function() {
    heel.ariaChecked = false;
    porter.ariaChecked = false;
    gazelle.ariaChecked = true;
    truck3.ariaChecked = false;
    truck5.ariaChecked = false;
    truck10.ariaChecked = false;
    truck20.ariaChecked = false;
    heel.style.outline = "none";
    porter.style.outline = "none";
    gazelle.style.outline = "1px solid #38C995";
    truck3.style.outline = "none";
    truck5.style.outline = "none";
    truck10.style.outline = "none";
    truck20.style.outline = "none";
})

truck3.addEventListener("click", function() {
    heel.ariaChecked = false;
    porter.ariaChecked = false;
    gazelle.ariaChecked = false;
    truck3.ariaChecked = true;
    truck5.ariaChecked = false;
    truck10.ariaChecked = false;
    truck20.ariaChecked = false;
    heel.style.outline = "none";
    porter.style.outline = "none";
    gazelle.style.outline = "none";
    truck3.style.outline = "1px solid #38C995";
    truck5.style.outline = "none";
    truck10.style.outline = "none";
    truck20.style.outline = "none";
})

truck5.addEventListener("click", function() {
    heel.ariaChecked = false;
    porter.ariaChecked = false;
    gazelle.ariaChecked = false;
    truck3.ariaChecked = false;
    truck5.ariaChecked = true;
    truck10.ariaChecked = false;
    truck20.ariaChecked = false;
    heel.style.outline = "none";
    porter.style.outline = "none";
    gazelle.style.outline = "none";
    truck3.style.outline = "none";
    truck5.style.outline = "1px solid #38C995";
    truck10.style.outline = "none";
    truck20.style.outline = "none";
})

truck10.addEventListener("click", function() {
    heel.ariaChecked = false;
    porter.ariaChecked = false;
    gazelle.ariaChecked = false;
    truck3.ariaChecked = false;
    truck5.ariaChecked = false;
    truck10.ariaChecked = true;
    truck20.ariaChecked = false;
    heel.style.outline = "none";
    porter.style.outline = "none";
    gazelle.style.outline = "none";
    truck3.style.outline = "none";
    truck5.style.outline = "none";
    truck10.style.outline = "1px solid #38C995";
    truck20.style.outline = "none";
})

truck20.addEventListener("click", function() {
    heel.ariaChecked = false;
    porter.ariaChecked = false;
    gazelle.ariaChecked = false;
    truck3.ariaChecked = false;
    truck5.ariaChecked = false;
    truck10.ariaChecked = false;
    truck20.ariaChecked = true;
    heel.style.outline = "none";
    porter.style.outline = "none";
    gazelle.style.outline = "none";
    truck3.style.outline = "none";
    truck5.style.outline = "none";
    truck10.style.outline = "none";
    truck20.style.outline = "1px solid #38C995";
})
