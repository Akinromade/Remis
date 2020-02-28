const openSplitDivs = () => {
    const leftDiv = document.querySelector(".left-div");
    const rightDiv = document.querySelector(".right-div");
    document.querySelector(".epump-loader").style.display = "none";
    leftDiv.style.display = 'block';
    rightDiv.style.display = 'block';
    leftDiv.classList.add("slide-out");
    rightDiv.classList.add("slide-out-right-div");
   
    setTimeout(openMainPage, 10);
    setTimeout(hideSplitDivs , 10);
}
window.onload = () => {
    setTimeout(openSplitDivs, 10);

    document.querySelector(".stations_img").classList.add("toggleAnimationImgageDisplayNone")
    document.querySelector(".efueling_img").classList.remove("toggleAnimationImgageDisplayNone");

    if(localStorage.getItem("reportsId") !== null){
      clearInterval(localStorage.getItem("reportsId"));
    }
    if(localStorage.getItem("epumpGoId") !== null){
      clearInterval(localStorage.getItem("epumpGoId"));
    }
    if(localStorage.getItem("phoneIntervalId") !== null){
      clearInterval(localStorage.getItem("phoneIntervalId"));
    }
    if(localStorage.getItem("tanker_id") !== null){
      clearInterval(localStorage.getItem("tanker_id"));
    }
}

const openMainPage = () => {

    document.querySelector(".main-page").style.display = "block";
   

    // BANNER SECTION ANIMATION

    // REPORTS/DASHBOARD
    const toggleReports = () => {

      if(document.querySelector(".get_started").style.display === "block"){
        document.querySelector(".get_started").style.display = "none";
      }

      if(document.querySelector(".writeEpumpPhoneText").style.display === "block"){
        document.querySelector(".writeEpumpPhoneText").style.display = "none";
      }

      if(localStorage.getItem("phoneIntervalId") !== null) {
        clearInterval(localStorage.getItem("phoneIntervalId"));
      }

      document.querySelector(".writeText").style.display = 'none';
      document.querySelector(".writeReportsText").style.display = 'block';

      $(".writeReportsText").typed({
        strings: ["Get Real-time Reports and Control"],
        loop: false,
        smartBackspace: true,
        showCursor: false,
        cursorChar: '|',
        typeSpeed: 0,
      });

      
      let reportsId = setInterval(function(){
        document.querySelector("#report").classList.toggle("dashboard_animation");
      }, 500);

      console.log(reportsId);
    
      localStorage.setItem("reportsId", reportsId);

      setTimeout(toggleTanker, 4000);
    }

    setTimeout(toggleReports, 4000);

    
    // TANKER
  const toggleTanker = () => {
    clearInterval(localStorage.getItem("reportsId"));
    if(document.querySelector("#report").style.opacity === 0){
      document.querySelector("#report").style.opacity = "1";
    }
    document.querySelector(".writeReportsText").style.display = "none";
    document.querySelector(".writeTankerText").style.display = "block";
    $(".writeTankerText").typed({
      strings: ["From Your Pump To Your Tank"],
      loop: false,
      smartBackspace: true,
      showCursor: false,
      cursorChar: '|',
      typeSpeed: 0,
    });

    
    let tanker_id = setInterval(function(){
        document.querySelector(".tanker").classList.toggle("tanker_animation");
      }, 500);

    console.log(tanker_id);
  
    localStorage.setItem("tanker_id", tanker_id);

    setTimeout(toggleEpumpGo, 4000);

  }


      
    // EPUMPGO
    const toggleEpumpGo = () => {
      clearInterval(localStorage.getItem("tanker_id"));
      if(document.querySelector(".tanker").style.opacity === 0){
        document.querySelector(".tanker").style.opacity = "1";
      }
      
      document.querySelector(".writeTankerText").style.display = "none";
      document.querySelector(".writeEpumpGoText").style.display = "block";
      $(".writeEpumpGoText").typed({    
        strings: ["Via Our EpumpGo Device"],
        loop: false,
        smartBackspace: true,
        showCursor: false,
        cursorChar: '|',
        typeSpeed: 0,
      })

      
      let epumpGoId = setInterval(function(){
          document.querySelector(".epumpGo").classList.toggle("epumpGo_animation");
      }, 500);

      console.log(epumpGoId);
    
      localStorage.setItem("epumpGoId", epumpGoId);

      setTimeout(togglePhone, 4000);
    }


    // PHONE
    const togglePhone = () => {
      clearInterval(localStorage.getItem("epumpGoId"));
      if(document.querySelector(".epumpGo").style.opacity === 0) {
        document.querySelector(".epumpGo").style.opacity = "1";
      }
      document.querySelector(".writeEpumpGoText").style.display = "none";
      document.querySelector(".writeEpumpPhoneText").style.display = "block";
      $(".writeEpumpPhoneText").typed({
        strings: ["To Your Phone"],
        loop: false,
        smartBackspace: true,
        showCursor: false,
        cursorChar: '|',
        typeSpeed: 0,
      });


      let phoneIntervalId = setInterval(function() {
            document.querySelector(".epump_phone").classList.toggle("epump_phone_opacity");
        }, 500);
      
        console.log(phoneIntervalId);
    
        localStorage.setItem("phoneIntervalId", phoneIntervalId);

        setTimeout(get_started, 4000);
    }

    const get_started = () => {

      clearInterval(localStorage.getItem("phoneIntervalId"));

      if(document.querySelector(".epump_phone").style.opacity === 0) {
        document.querySelector(".epump_phone").style.opacity = "1";
      }

      document.querySelector(".writeEpumpPhoneText").style.display = "none";
      document.querySelector(".get_started").style.display = "block";

      setTimeout(toggleReports, 4000);
    }

    $(".writeEfuelingText").typed({
      strings: ["Take Control of Your Fueling With E-Pump"],
      loop: false,
      smartBackspace: false,
      backDelay: 700,
      showCursor: false,
      cursorChar: '|',
      typeSpeed: 0,
  });

  setTimeout(() => {
      $(".writeEveryDropCountEfuelingText").typed({
        strings: ["Because getting value for money at filling stations has  increasingly become difficult!"],
        loop: false,
        smartBackspace: false,
        backDelay: 700,
        showCursor: false,
        cursorChar: '|',
        typeSpeed: 0,
    });
    setTimeout(showEueling_text_2, 6000);

  }, 3000);

  const showEueling_text_2 = () => {
    document.querySelector(".writeEveryDropCountEfuelingText").style.display = "none";
    document.querySelector(".efuelingText2").style.display = "block";
      $(".efuelingText2").typed({
        strings: ["We Partner with stations to deploy state of the art pump monitoring Solution"],
        loop: false,
        smartBackspace: false,
        backDelay: 700,
        showCursor: false,
        cursorChar: '|',
        typeSpeed: 0,
    });
    setTimeout(showEueling_text_3, 8000);
  }; 
} 

const showEueling_text_3 = () => {
  document.querySelector(".efuelingText2").style.display = "none";
  document.querySelector(".efuelingText3").style.display = "block";
    $(".efuelingText3").typed({
      strings: ["Our Voucher authorize the pump and prevent all tricks by attendants and employees"],
      loop: false,
      smartBackspace: false,
      backDelay: 700,
      showCursor: false,
      cursorChar: '|',
      typeSpeed: 0,
  });
  setTimeout(showEueling_text_4, 10000);
}; 

const showEueling_text_4 = () => {
  document.querySelector(".efuelingText3").style.display = "none";
  document.querySelector(".efuelingText4").style.display = "block";
    $(".efuelingText4").typed({
      strings: ["You will always get fun value for your money"],
      loop: false,
      smartBackspace: false,
      backDelay: 700,
      showCursor: false,
      cursorChar: '|',
      typeSpeed: 0,
  });
}; 

// banner section animation ends
const hideSplitDivs = () => {
    const leftDiv = document.querySelector(".left-div");
    const rightDiv = document.querySelector(".right-div");
    leftDiv.style.display = 'none';
    rightDiv.style.display = 'none';
}

// sticky navbar
var myNav = document.querySelector('.navbar');





// TABS section

const makeEfuelingActive = (event) => {

  document.querySelector(".stations_tab").style.display = "none";
  document.querySelector(".efueling_tab").style.display = "block";

  document.querySelector(".efueling_img").classList.remove("toggleAnimationImgageDisplayNone");
  document.querySelector(".stations_img").classList.add("toggleAnimationImgageDisplayNone");

  document.querySelector(".banner-tab-1").classList.add("active-tab");
  document.querySelector(".banner-tab-2").classList.remove("active-tab");
  document.querySelector(".banner-tab-2").classList.add("non-active-tab");

}

const makeStationsActive = (event) => {

    document.querySelector(".stations_tab").style.display = "block";
    document.querySelector(".efueling_tab").style.display = "none";

    document.querySelector(".banner-tab-1").classList.remove("active-tab");    
    document.querySelector(".banner-tab-1").classList.add("non-active-tab"); 
    document.querySelector(".banner-tab-2").classList.add("active-tab");

    document.querySelector(".efueling_img").classList.add("toggleAnimationImgageDisplayNone");
    document.querySelector(".stations_img").classList.remove("toggleAnimationImgageDisplayNone");

    $(".write").typed({
      strings: ["Reduce Waste, Theft , and Lost Profits  through Automation"],
      loop: false,
      smartBackspace: false,
      backDelay: 700,
      showCursor: false,
      cursorChar: '|',
      typeSpeed: 0,
  });

}


// Toggle readMore button

  
  const toggleReadMoreBtn1 =  () =>  {
    let dots = document.getElementById("dots1");
    let moreText = document.getElementById("more1");
    let btnText = document.getElementById("read_more_button1");

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  const toggleReadMoreBtn2 =  () =>  {
    let dots = document.getElementById("dots2");
    let moreText = document.getElementById("more2");
    let btnText = document.getElementById("read_more_button2");

   
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  const toggleReadMoreBtn3 =  () =>  {
    let dots = document.getElementById("dots3");
    let moreText = document.getElementById("more3");
    let btnText = document.getElementById("read_more_button3");

   
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  
// CArd Hover feature
const card1Hover = () => {
  document.querySelector(".card1").style.backgroundColor = "rgb(75, 44, 114)";
  document.querySelector(".card1header").style.color = "white";
  document.querySelector(".card1para").style.color = "white";
}
const card1MouseOut = () => {
  document.querySelector(".card1").style.backgroundColor = "#d3d3d321";
  document.querySelector(".card1header").style.color = "black";
  document.querySelector(".card1para").style.color = "black";
}  
  
const card2Hover = () => {
  document.querySelector(".card2").style.backgroundColor = "rgb(75, 44, 114)";
  document.querySelector(".card2header").style.color = "white";
  document.querySelector(".card2para").style.color = "white";
}
const card2MouseOut = () => {
  document.querySelector(".card2").style.backgroundColor = "#d3d3d321";
  document.querySelector(".card2header").style.color = "black";
  document.querySelector(".card2para").style.color = "black";
} 
const card3Hover = () => {
  document.querySelector(".card3").style.backgroundColor = "rgb(75, 44, 114)";
  document.querySelector(".card3header").style.color = "white";
  document.querySelector(".card3para").style.color = "white";
}
const card3MouseOut = () => {
  document.querySelector(".card3").style.backgroundColor = "#d3d3d321";
  document.querySelector(".card3header").style.color = "black";
  document.querySelector(".card3para").style.color = "black";
} 

const card4Hover = () => {
  document.querySelector(".card4").style.backgroundColor = "rgb(75, 44, 114)";
  document.querySelector(".card4header").style.color = "white";
  document.querySelector(".card4para").style.color = "white";
}
const card4MouseOut = () => {
  document.querySelector(".card4").style.backgroundColor = "#d3d3d321";
  document.querySelector(".card4header").style.color = "black";
  document.querySelector(".card4para").style.color = "black";
} 

const card5Hover = () => {
  document.querySelector(".card5").style.backgroundColor = "rgb(75, 44, 114)";
  document.querySelector(".card5header").style.color = "white";
  document.querySelector(".card5para").style.color = "white";
}
const card5MouseOut = () => {
  document.querySelector(".card5").style.backgroundColor = "#d3d3d321";
  document.querySelector(".card5header").style.color = "black";
  document.querySelector(".card5para").style.color = "black";
} 

const card6Hover = () => {
  document.querySelector(".card6").style.backgroundColor = "rgb(75, 44, 114)";
  document.querySelector(".card6header").style.color = "white";
  document.querySelector(".card6para").style.color = "white";
}
const card6MouseOut = () => {
  document.querySelector(".card6").style.backgroundColor = "#d3d3d321";
  document.querySelector(".card6header").style.color = "black";
  document.querySelector(".card6para").style.color = "black";
} 
