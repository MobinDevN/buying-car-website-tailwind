function types_car(){
  const cars_type = [
    { "name": "suv", "icon": "src/images/suv.svg" },
    { "name": "sedan", "icon": "src/images/sedan.svg" },
    { "name": "Hatchback", "icon": "src/images/Hatchback.svg" },
    { "name": "Coupe", "icon": "src/images/Hatchback.svg" },
    { "name": "Hybrid", "icon": "src/images/Hybrid.svg" },
    { "name": "Convertible", "icon": "src/images/Convertible.svg" },
    { "name": "Van", "icon": "src/images/van.svg" },
    { "name": "Truck", "icon": "src/images/Truck.svg" },
    { "name": "Electric", "icon": "src/images/Electric.svg" }
  ];
  
  let list_type = document.getElementById("type-car");
  list_type.innerHTML = "";
  
  cars_type.forEach(function (item) {
    list_type.innerHTML += `
      <a href="#">
        <div class="w-[95px] h-[95px] md:w-[128px] md:h-[109px] 
                    hover:shadow-2xl active:shadow-2xl 
                    transition-all duration-700 border border-[#d7d7d7] 
                    rounded-[16px] flex flex-col justify-center items-center gap-2 mx-auto">
          <img src="${item.icon}" class="w-9 h-9" alt="${item.name}">
          <p>${item.name}</p>
        </div>
      </a>
    `;
  });
}
types_car()

function cars_research() {
  const research_cars = [
    {"name":"Ford Transit – 2021", "description":"4.0 D5 PowerPulse Momentum...", "miles":"2500 Miles", "foul":"Diesel","am":"Manual","price":"$22,000" , "image":"src/images/ford transit.png"},
    {"name":"New GLC – 2023", "description":"4.0 D5 PowerPulse Momentum...", "miles":"50 Miles", "foul":"Petrol", "am":"Automatic", "price":"$95,000" , "image":"src/images/New GLC – 2023.png"},
    {"name":"Audi A6 3.5 – New", "description":"3.5 D5 PowerPulse Momentum AWD...", "miles":"100 Miles", "foul":"Petrol", "am":"Automatic", "price":"$58,000" , "image":"src/images/Audi A6 3.5 – New.png"},
    {"name":"Corolla Altis – 2023", "description":"3.5 D5 PowerPulse Momentum AWD...", "miles":"15000 Miles", "foul":"Petrol", "am":"CVT", "price":"$45,000" , "image":"src/images/Corolla Altis – 2023.png"},
    {"name":"T-Cross – 2023", "description":"4.0 D5 PowerPulse Momentum 5dr...", "miles":"15 Miles", "foul":"Petrol", "am":"CVT", "price":"$15,000" , "image":"src/images/T-Cross – 2023.png"},
  ];

  let researched_c = document.getElementById("researched_c");
  researched_c.innerHTML = "";

  research_cars.forEach(function(item){
    researched_c.innerHTML += `
      <div class="swiper-slide rounded-[16px] bg-[#050B20] shadow-lg md:shadow-xl transition-shadow duration-1000 hover:shadow-lg hover:shadow-[#151f45] ">
        
        <div class="overflow-hidden relative rounded-t-[16px]">
          <img src="${item.image}" class="hover:scale-[1.1] transition-transform duration-700 w-full" alt="">
          <div class="absolute top-[23px] flex justify-between px-5 w-full items-center">
            <div class="bg-[#3D923A] py-2 px-4 text-[14px] rounded-[30px] text-white">Great Price</div>
            <div class="bg-white p-2 text-[14px] rounded-[30px]">
              <svg class="w-5 h-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="py-4 px-6 text-left">
          <h1 class="font-medium text-[18px] text-white">${item.name}</h1>
          <p class="text-[14px] text-white">${item.description}</p>

          <hr class="border-t-2 border-solid border-[#525252] my-3">

          <div class="flex justify-between items-center">
            <div class="text-center w-full">
              <img src="src/images/miles.png" class="mx-auto" alt="">
              <p class="text-[14px] text-white">${item.miles}</p>
            </div>

            <div class="text-center w-full">
              <img src="src/images/diesel.png" class="mx-auto" alt="">
              <p class="text-[14px] text-white">${item.foul}</p>
            </div>

            <div class="text-center w-full">
              <img src="src/images/manual.png" class="mx-auto" alt="">
              <p class="text-[14px] text-white">${item.am}</p>
            </div>
          </div>

          <hr class="border-t-2 border-solid border-[#525252] my-3">

          <div class="flex justify-between items-center">
            <h1 class="font-bold text-[20px] text-white">${item.price}</h1>
            <button class="flex gap-1 text-white items-center hover:cursor-pointer">
              View Details
              <svg class="w-6 h-6 text-white rotate-[320deg]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

cars_research();

function latest_car() {

  const latest_cars = [
    {"name":"Ford Transit – 2021", "description":"4.0 D5 PowerPulse Momentum...", "miles":"2500 Miles", "foul":"Diesel","am":"Manual","price":"$22,000" , "image":"src/images/ford transit.png"},
    {"name":"C-Class – 2023", "description":"4.0 D5 PowerPulse Momentum 5dr...", "miles":"50 Miles", "foul":"Petrol", "am":"Automatic", "price":"$150,000" , "image":"src/images/C-Class – 2023.png"},
    {"name":"Audi A6 3.5 – New", "description":"3.5 D5 PowerPulse Momentum AWD...", "miles":"100 Miles", "foul":"Petrol", "am":"Automatic", "price":"$58,000" , "image":"src/images/Audi A6 3.5 – New.png"},
    {"name":"Corolla Altis – 2023", "description":"3.5 D5 PowerPulse Momentum AWD...", "miles":"15000 Miles", "foul":"Petrol", "am":"CVT", "price":"$45,000" , "image":"src/images/Corolla Altis – 2023.png"},
    {"name":"T-Cross – 2023", "description":"4.0 D5 PowerPulse Momentum 5dr...", "miles":"15 Miles", "foul":"Petrol", "am":"CVT", "price":"$15,000" , "image":"src/images/T-Cross – 2023.png"},
  ];

  let latest_c = document.getElementById("latest_cars");
  latest_c.innerHTML = "";

  latest_cars.forEach(function(item){
    latest_c.innerHTML += `
      <div class="swiper-slide rounded-[16px] bg-[#050B20] shadow-lg md:shadow-xl transition-shadow duration-1000 hover:shadow-lg hover:shadow-[#151f45] ">
        
        <div class="overflow-hidden relative rounded-t-[16px]">
          <img src="${item.image}" class="hover:scale-[1.1] transition-transform duration-700 w-full" alt="">
          <div class="absolute top-[23px] flex justify-between px-5 w-full items-center">
            <div class="bg-[#3D923A] py-2 px-4 text-[14px] rounded-[30px] text-white">Great Price</div>
            <div class="bg-white p-2 text-[14px] rounded-[30px]">
              <svg class="w-5 h-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="py-4 px-6 text-left">
          <h1 class="font-medium text-[18px] text-white">${item.name}</h1>
          <p class="text-[14px] text-white">${item.description}</p>

          <hr class="border-t-2 border-solid border-[#525252] my-3">

          <div class="flex justify-between items-center">
            <div class="text-center w-full">
              <img src="src/images/miles.png" class="mx-auto" alt="">
              <p class="text-[14px] text-white">${item.miles}</p>
            </div>

            <div class="text-center w-full">
              <img src="src/images/diesel.png" class="mx-auto" alt="">
              <p class="text-[14px] text-white">${item.foul}</p>
            </div>

            <div class="text-center w-full">
              <img src="src/images/manual.png" class="mx-auto" alt="">
              <p class="text-[14px] text-white">${item.am}</p>
            </div>
          </div>

          <hr class="border-t-2 border-solid border-[#525252] my-3">

          <div class="flex justify-between items-center">
            <h1 class="font-bold text-[20px] text-white">${item.price}</h1>
            <button class="flex gap-1 text-white items-center hover:cursor-pointer">
              View Details
              <svg class="w-6 h-6 text-white rotate-[320deg]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

latest_car();

function Blogs(){
  const blog_list = [
    { "name": "2024 BMW ALPINA XB7 with exclusive details, extraordinary", "image": "src/images/post1.png", "category":"Sound", "date":"Admin &#9679; November 22, 2023" },
    { "name": "BMW X6 M50i is designed to exceed your sportiest.", "image": "src/images/post2.png", "category":"Accessories", "date":"Admin &#9679; November 22, 2023" },
    { "name": "BMW X5 Gold 2024 Sport Review: Light on Sport", "image": "src/images/post3.png", "category":"Exterior", "date":"Admin &#9679; November 22, 2023" },


  ];
  
  let list_blog = document.getElementById("list_blog");
  list_blog.innerHTML = "";
  
  blog_list.forEach(function (item) {
    list_blog.innerHTML += `
      <div class="bg-[#EEF1FB] rounded-[16px] overflow-hidden text-left hover:cursor-pointer">
        <div class="relative overflow-hidden">
          <img class="w-full rounded-[16px] hover:scale-[1.1] transition-all duration-700" src="${item.image}" alt="">

          <div class="absolute top-[23px] flex justify-between px-5 w-full items-center">
            <div class="bg-white py-2 px-4 text-[14px] rounded-[30px] text-black font-semibold">${item.category}</div>
          </div>
        </div>

        <div class="px-5 pb-5">
          <p class="text-[15px] mt-4">${item.date}</p>
          <p class="text-[18px] mt-4">${item.name}</p>
        </div>
      </div>
    `;
  });
}
Blogs()

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }
  }
});