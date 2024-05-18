function search_animal() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("animals");

    for (hi = 0; hi < x.length; hi++) {
      if (!x[hi].innerHTML.toLowerCase().includes(input)) {
        x[hi].style.display = "none";
      } else {
        x[hi].style.display = "list-item";
      }
    }
  }
  function b() {
    let x = Math.floor(Math.random() * 11 + 1);
    if (x == 2) {
      window.open("wiki_br.html");
    }
    if (x == 3) {
      window.open("wiki_la.html");
    }
    if (x == 4) {
      window.open("wiki_agb.html");
    }
    if (x == 5) {
      window.open("wiki_is.html");
    }
    if (x == 6) {
      window.open("wiki_rb.html");
    }
    if (x == 7) {
      window.open("wikib.html");
    }
    if (x == 8) {
      window.open("wiki_te.html");
    }      
    if (x == 9) {
        window.open("wiki_ae.html");
    }  
    if (x == 10) {
        window.open("wiki_ak.html");
    }  
  }