const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal("h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(" h2", {
    ...scrollRevealOption,
    delay: 300,
  });
  
  // about container
  ScrollReveal().reveal(".special__grid div", {
    ...scrollRevealOption,
    interval: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".banner__container div", {
    ...scrollRevealOption,
    interval: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".chef__image img", {
    ...scrollRevealOption,
    origin: "right",
    delay:500
  });
  ScrollReveal().reveal(".explore__image img", {
    ...scrollRevealOption,
    origin: "left",
    delay:500
  });
  ScrollReveal().reveal(".footer__logo div", {
    ...scrollRevealOption,
    origin: "right",
    distance:"200px",
    
    delay:500
  });
  ScrollReveal().reveal(".client__card img", {
    ...scrollRevealOption,
    origin: "left",
    distance:"200px",
    delay:500
  });