const res = await fetch("../data/data-arrivals.json")
const arrivals = await res.json()

const arrivalsContainer = document.querySelector(".arrivals-container")
arrivals.forEach((item) => {
    arrivalsContainer.innerHTML += ` <a href="./html/detail.html" class="w-[594px] swiper-slide  group">
    <div class="w-full h-[594px] overflow-hidden mb-3">
    <img src="../images/arrivals/${item.image}" alt="" class=" w-full h-full group-hover:scale-110 transition-transform duration-300 " />
    </div>
            <h1 class="font-bold">${item.name}</h1>
            <p class="text-gray-500">${item.description}</p>
            <p class="mt-3">${item.price.toLocaleString()}đ</p>
        </a>`
})

const swiperArrivals = new Swiper(".swiper-arrivals", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 10,

    navigation: {
        nextEl: ".arrivals-button-next",
        prevEl: ".arrivals-button-prev",
    },
})

const resClassic = await fetch("../data/data-classics.json")
const classics = await resClassic.json()
const classicsContainer = document.querySelector(".classic-container")
classics.forEach((item) => {
    classicsContainer.innerHTML += `  <div class="w-[300px] swiper-slide">
                        <img src="../images/classics/${item.image}" alt="" class="w-full" />
                    </div>`
})

const swiperClassics = new Swiper(".swiper-classics", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 10,

    navigation: {
        nextEl: ".classics-button-next",
        prevEl: ".classics-button-prev",
    },
})
