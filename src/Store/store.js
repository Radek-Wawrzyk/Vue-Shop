import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Day-Date 40",
        price: 3526,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png"
      },
      {
        id: 2,
        title: "Sky-Dweller",
        price: 2531,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png"
      },
      {
        id: 3,
        title: "Datejust 41",
        price: 56525,
        categories: {
          strap: "leather",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png"
      },
      {
        id: 4,
        title: "Lady-Datejust 28",
        price: 1224,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png"
      },
      {
        id: 5,
        title: "Submariner Date",
        price: 2678,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png"
      },
      {
        id: 6,
        title: "Air-King",
        price: 35000,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png"
      },
      {
        id: 7,
        title: "Explorer II",
        price: 35000,
        categories: {
          strap: "rubber",
          shape: "circle",
          style: "sport",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png"
      },
      {
        id: 8,
        title: "GMT-Master",
        price: 23456,
        categories: {
          strap: "rubber",
          shape: "circle",
          style: "sport",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png"
      },
      {
        id: 9,
        title: "Celinni",
        price: 43100,
        categories: {
          strap: "leather",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png"
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
