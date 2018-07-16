import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [{
        id: 1,
        title: "Day-Date 40",
        price: 3526,
        briefDescription: "In 1956, the Rolex Day-Date made its debut. Available only in 18 ct gold or platinum, it was the first wristwatch to display the date and day of the week spelt out in full in a window on the dial. With the President bracelet, originally created specially for it, the Day-Date continues to be the watch par excellence of influential people.",
        description: "By operating its own exclusive foundry, Rolex has the unrivalled ability to cast the highest quality 18 ct gold alloys. According to the proportion of silver, copper, platinum or palladium added, different types of 18 ct gold are obtained: yellow, pink or white. They are made with only the purest metals and meticulously inspected in an in-house laboratory with state-of-the-art equipment, before the gold is formed and shaped with the same painstaking attention to quality. Rolex's commitment to excellence begins at the source.",
        properties: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: [
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png"
        ]
      },
      {
        id: 2,
        title: "Sky-Dweller",
        price: 2531,
        briefDescription: "A distinctive technological masterpiece protected by 11 to  14 patents depending on the model, the Rolex Sky-Dweller provides the information global travellers need to keep track of time at a glance. Launched in 2012, the Sky-Dweller is a compelling timepiece of revolutionary design that blends to perfection mechanical sophistication and ease of use.",
        description: "By operating its own exclusive foundry, Rolex has the unrivalled ability to cast the highest quality 18 ct gold alloys. According to the proportion of silver, copper, platinum or palladium added, different types of 18 ct gold are obtained: yellow, pink or white. They are made with only the purest metals and meticulously inspected in an in-house laboratory with state-of-the-art equipment, before the gold is formed and shaped with the same painstaking attention to quality. Rolex's commitment to excellence begins at the source.",
        properties: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: [
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png"
        ]
      },
      {
        id: 3,
        title: "Datejust 41",
        price: 56525,
        briefDescription: "The Rolex Datejust is the modern archetype of the classic watch, thanks to aesthetics and functions that transcend changes in fashion. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognised and recognisable of watches.",
        description: "Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties. A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster collection.",
        properties: {
          strap: "leather",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png"
        ]
      },
      {
        id: 4,
        title: "Lady-Datejust 28",
        price: 1224,
        briefDescription: "The Rolex Datejust is the modern archetype of the classic watch, thanks to aesthetics and functions that transcend changes in fashion. Aesthetically, the Datejust has spanned eras, while retaining the enduring codes that make it, notably in its traditional versions, one of the most recognised and recognisable of watches.",
        description: "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, superalloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.",
        properties: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png"
        ]
      },
      {
        id: 5,
        title: "Submariner Date",
        price: 2678,
        briefDescription: "The Rolex Submariner’s robust and functional design swiftly became iconic. With their subtly redesigned Oyster case, distinctive dial with large luminescent hour markers, graduated rotatable Cerachrom bezel and solid link Oyster bracelet, the latest generation Submariner and Submariner Date are firmly in line with the original model launched in 1953.",
        description: "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, superalloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.",
        properties: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png"
        ]
      },
      {
        id: 6,
        title: "Air-King",
        price: 35000,
        briefDescription: "The Rolex Air-King pays tribute to the pioneers of flight and the Oyster’s role in the epic story of aviation. With its 40mm case in Oystersteel, solid-link Oyster bracelet with Oysterclasp, and distinctive black dial, the new Air-King is as functional as it is timeless.  Updated for the modern wearer but keeping with the aesthetics of the 1950s model, the new Oyster Perpetual Air-King perpetuates the aeronautical heritage of the original Rolex Oyster.",
        description: "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, superalloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.",
        properties: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png"
        ]
      },
      {
        id: 7,
        title: "Explorer II",
        price: 35000,
        briefDescription: "The Explorer models embody the privileged relationship that has always bound Rolex and exploration. Since the late 1920s, Rolex has been using the world as a proving ground to test its watches under real-life conditions, in the quest for greater precision, robustness and reliability.",
        description: "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, superalloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.",
        properties: {
          strap: "rubber",
          shape: "circle",
          style: "sport",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png"
        ]
      },
      {
        id: 8,
        title: "GMT-Master",
        price: 23456,
        briefDescription: "Although the Rolex GMT-Master was designed essentially for professional use, its combination of peerless functionality and rugged good looks has attracted a wider travelling public. As well as appreciating its ability to display different time zones, these travellers admire the robustness and versatile appearance that make the GMT-Master eminently suitable for globetrotting and, indeed, for any occasion.",
        description: "Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, superalloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.",
        properties: {
          strap: "rubber",
          shape: "circle",
          style: "sport",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png"
        ]
      },
      {
        id: 9,
        title: "Celinni",
        price: 43100,
        briefDescription: "The Cellini collection is a contemporary celebration of classicism and the eternal elegance of traditional timepieces, combining the best of Rolex know-how and its high standards of perfection with an approach that heightens watchmaking heritage in its most timeless form.",
        description: "To preserve the beauty of its pink gold watches, Rolex created and patented an exclusive 18 ct pink gold alloy cast in its own foundry: Everose gold. Introduced in 2005, 18 ct Everose is used on all Rolex models in pink gold.",
        properties: {
          strap: "leather",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        images: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png",
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png"
        ]
      }
    ],
    cart: {
      sum: 0,
      cartItems: [{
          id: 1,
          title: "Exploder II",
          price: 60000,
          img: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png"],
          amount: 1
        },
        {
          id: 2,
          title: "Lady-datejust",
          price: 1250,
          img: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png"],
          amount: 2
        },
        {
          id: 3,
          title: "Sky-Dweller",
          price: 40000,
          img: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png"],
          amount: 1
        },
      ]
    },
    activeClasses: {
      settings: false,
      cart: false
    },
    body: document.querySelector("body")
  },
  getters: {
    cartItems(state) {
      return state.cart.cartItems;
    },
    productsData(state) {
      return state.products;
    },
    toggleCartStatus(state) {
      return state.activeClasses.cart;
    },
    toggleSettingsStatus(state) {
      return state.activeClasses.settings;
    }
  },
  mutations: {
    deleteCartItem(state, cartItemId) {
      //Delete clicked cart item
      state.cart.cartItems.forEach((item, index) => {
        if (item.id === cartItemId) {
          state.cart.cartItems.splice(index, 1);
        }
      });

      //Update amount of cart
      state.cart.sum = 0;
      state.cart.cartItems.forEach(item => {
        state.cart.sum += item["price"] * item.amount;
      });
    },
    addToCart(state, item) {
      //Define cart object
      const cartItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        images: item.images,
        amount: item.amount
      };

      //Push object to cart
      state.cart.cartItems.push(cartItem);

      //Update amount of cart
      state.cart.sum = 0;
      state.cart.cartItems.forEach(item => {
        state.cart.sum += item["price"] * item.amount;
      });
    },
    deleteCart(state) {
      state.cart.cartItems.splice(0, state.cart.cartItems.length);

      //Update amount of cart
      state.cart.sum = 0;
      state.cart.cartItems.forEach(item => {
        state.cart.sum += item["price"] * item.amount;
      });
    },
    toggleCart(state) {
      state.activeClasses.cart = !state.activeClasses.cart;
      state.activeClasses.settings = false;

      if (state.activeClasses.cart) {
        state.body.className = "overflow-hidden";
      } else {
        state.body.className = "";
      }

    },
    toggleSettings(state) {
      state.activeClasses.settings = !state.activeClasses.settings;
      state.activeClasses.cart = false;

      if (state.activeClasses.settings) {
        state.body.className = "overflow-hidden";
      } else {
        state.body.className = "";
      }
    }
  },
  actions: {
    deleteCartItem(event, cartItemId) {
      event.commit("deleteCartItem", cartItemId);
    },
    addToCart(event, item) {
      event.commit("addToCart", item);
    },
    deleteCart(event) {
      event.commit("deleteCart");
    },
    toggleCart(event) {
      event.commit("toggleCart");
    },
    toggleSettings(event) {
      event.commit("toggleSettings");
    }
  }
})