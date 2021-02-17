document.querySelector('.button').addEventListener('click', horoscope)

function horoscope(){
  let month = Number(document.getElementById("month").value);
  let day = Number(document.getElementById("day").value);
  let result = "Is that the correct birthdate?";
  let sign = document.querySelector("#sign").innerText;

  //Aquarius
  if (month == 1 && day >= 20 || month == 2 && day <= 18){
    result = ("The friend that does a silly dance until you notice them in your peripheral. Also steals food off your plate.");
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "AQUARIUS"
    document.getElementById("sign-image").innerHTML = "<img src='img/aquarius.png'>";
    document.querySelector("#dates").innerText = "January 20 - February 18"
  }

  //Pisces
  if (month == 2 && day >= 19 || month == 3&& day <= 20){
    result = ("Compares real-life situations to memes and anime. Knows just what to say when you're sad. Will draw a demonic circle to hex anyone who hurts you.");
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "PISCES"
    document.getElementById("sign-image").innerHTML = "<img src='img/pisces.png'>";
    document.querySelector("#dates").innerText = "February 19 - March 20"
  }

  //Aries
  if (month == 3 && day >= 21 || month == 4 && day <= 19){
    result = ("Takes the lead and drives you to your next adventure while jamming to music. Thinks of the best names for your hypothetical mixed-tape.");
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "ARIES"
    document.getElementById("sign-image").innerHTML = "<img src='img/aries.png'>";
    document.querySelector("#dates").innerText = "March 21 - April 19"
  }

  //Taurus
  if (month === 4 && day >=20 || month === 5 && day <=20){
    result = ("Is shy when you first meet them, but once they're comfortable they give you hugs while smacking you upside the head.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "TAURUS"
    document.getElementById("sign-image").innerHTML = "<img src='img/taurus.png'>";
    document.querySelector("#dates").innerText = "April 20 - May 20"
  }

  //Gemini
  if (month === 5 && day >=21 || month === 6 && day <= 20){
    result = ("A social butterfly who loves to plan surprises for your birthday. Great at making pancakes while reciting poems about why you're so great.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "GEMINI"
    document.getElementById("sign-image").innerHTML = "<img src='img/gemini.png'>";
    document.querySelector("#dates").innerText = "May 21 - June 20"
  }

  //Cancer
  if (month === 6 && day >=21 || month === 7 && day <= 22){
    result = ("Invites you to watch video game playthroughs on Youtube while eating snacks. Only trusts you to kill the scary spider in their room.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "CANCER"
    document.getElementById("sign-image").innerHTML = "<img src='img/cancer.png'>";
    document.querySelector("#dates").innerText = "June 21 - July 22"
  }

  //Leo
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)){
    result = ("Knows random facts about food and explains them to you with or without your consent. Has a great sense of humor and laughs at most things.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "LEO"
    document.getElementById("sign-image").innerHTML = "<img src='img/leo.png'>";
    document.querySelector("#dates").innerText = "July 23 - August 22"
  }

  //Virgo
  if ((month === 8 && day >= 23) || (month === 9 && day <=22)){
    result=("Very competitive and expects the same of you. Will fight and defend you if anyone mispronounces your pronouns.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "VIRGO"
    document.getElementById("sign-image").innerHTML = "<img src='img/virgo.png'>";
    document.querySelector("#dates").innerText = "August 23 - September 22"
  }

  //Libra
  if ((month === 9 && day >=23) || (month === 10 && day <=22)){
    result = ("Very happy and energetic. Loves introducing you to other people by saying you both became friends after making dramatic eye-contact in a museum of fine art.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "LIBRA"
    document.getElementById("sign-image").innerHTML = "<img src='img/libra.png'>";
    document.querySelector("#dates").innerText = "September 23 - October 22"
  }

  //Scorpio
  if ((month === 10 && day >=23) || (month === 11 && day <=21)){
    result = ("The cool, aloof one that kicks their feet up while listening to music on the bus, gazing out the window. The song they're listening to is an anime opening.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "SCORPIO"
    document.getElementById("sign-image").innerHTML = "<img src='img/scorpio.png'>";
    document.querySelector("#dates").innerText = "October 23 - November 21"
  }

  //Sagittarius
  if ((month === 11 && day >=22) || (month === 12 && day <=21)){
    result = ("Loves to read and shares their love of books and learning with you. Big heart and lots of patience. Best partner for sky diving, ice lake swimming, and cliff jumping")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "SAGITTARIUS"
    document.getElementById("sign-image").innerHTML = "<img src='img/sagi.png'>";
    document.querySelector("#dates").innerText = "November 22 - December 21"
  }

  //Capricorn
  if ((month === 12 && day >=22) || (month === 1 && day <=19)){
    result = ("Keeps their guard up but occasionally indulges in a silly meme or two. Hyperfixates on hobbies like knitting, drawing, or demonic summonings.")
    document.querySelector("#output").innerText = result;
    document.querySelector("#sign").innerText = "CAPRICORN"
    document.getElementById("sign-image").innerHTML = "<img src='img/capricorn.png'>";
    document.querySelector("#dates").innerText = "December 22 - January 19"
  }
}
  // //the birthdays
  //   document.getElementById("output").innerHTML= result;
