
function initialState() {
  return {
    currentState: "S1000",
    previousState: "S1000",
    homeState: "S1000",
    currentLanguage: "eng",

    stateResponses: [
      {
        state: "S1000",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: "Please select which pack you would like to explore",
            items: [
              {
                icon: "mdi-web",
                title: "Internet",
                nextState: "S1100"
              },
              {
                icon: "mdi-offer",
                title: "Promotional Offers",
                nextState: "S1200"
              },
              {
                icon: "mdi-account-cash",
                title: "Balance, Validity, F&F",
                nextState: "S1300"
              },
              {
                icon: "mdi-package",
                title: "Package Information",
                nextState: "S1400"
              },
              {
                icon: "mdi-finance",
                title: "Mobile Financial Services",
                nextState: "S1500"
              },
              {
                icon: "mdi-bank-plus",
                title: "KYC and nearest store locator",
                nextState: "S1600"
              },
              {
                icon: "mdi-cellphone",
                title: "My BL App Info",
                nextState: "S1700"
              }
            ]
          }
        }
      },
      {
        state: "S1100",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: "Internet Options",
            items: [
              {
                icon: "mdi-web",
                title: "4G Internet Pack Activation",
                nextState: "S1110"
              },
              {
                icon: "mdi-offer",
                title: "Smart Pack Activation",
                nextState: "S1120"
              },
              {
                icon: "mdi-account-cash",
                title: "Social Media Pack Activation",
                nextState: "S1130"
              },
              {
                icon: "mdi-package",
                title: "Manage My Packs",
                nextState: "S1140"
              },
              {
                icon: "mdi-finance",
                title: "Promotional Offers & Discounts",
                nextState: "S1150"
              },
              {
                icon: "mdi-web",
                title: "Internet Settings",
                nextState: "S1160"
              },
              {
                icon: "mdi-wallet-giftcard",
                title: "Mixed Bundle Purchase",
                nextState: "S1170"
              }
            ]
          }
        }
      },
      {
        state: "S1200",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: " Promotional Offers ",
            items: [
              {
                icon: "mdi-web",
                title: "Data Offer",
                nextState: "S1210"
              },
              {
                icon: "mdi-offer",
                title: "Tariff Offer ",
                nextState: "S1220"
              },
              {
                icon: "mdi-account-cash",
                title: "Bundle Offer",
                nextState: "S1230"
              },
              {
                icon: "mdi-package",
                title: "BOR Offer",
                nextState: "S1240"
              }
            ]
          }
        }
      },
      {
        state: "S1300",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: " Balance Validity and FnF ",
            items: [
              {
                icon: "mdi-web",
                title: "Balance",
                nextState: "S1310"
              },
              {
                icon: "mdi-offer",
                title: "Loan",
                nextState: "S1320"
              },
              {
                icon: "mdi-account-cash",
                title: "Recharge",
                nextState: "S1330"
              },
              {
                icon: "mdi-package",
                title: "FnF",
                nextState: "S1340"
              }
            ]
          }
        }
      },
      {
        state: "S1400",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: " Package Information ",
            items: [
              {
                icon: "mdi-web",
                title: "Other Package ",
                nextState: "S1410"
              },
              {
                icon: "mdi-offer",
                title: "Post paid Package ",
                nextState: "S1420"
              },
              {
                icon: "mdi-account-cash",
                title: "New Connection",
                nextState: "S1430"
              }
            ]
          }
        }
      },
      {
        state: "S1500",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: " Mobile Financial Service ",
            items: [
              {
                icon: "mdi-web",
                title: "Mobile Banking ",
                nextState: "S1510"
              },
              {
                icon: "mdi-offer",
                title: "Bkash ",
                nextState: "S1520"
              }
            ]
          }
        }
      },
      {
        state: "S1600",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: " KYC and Nearsest Store Locator ",
            items: [
              {
                icon: "mdi-web",
                title: "Upload Document",
                nextState: "S1610"
              },
              {
                icon: "mdi-offer",
                title: "Find Store near you ",
                nextState: "S1620"
              }
            ]
          }
        }
      },
      {
        state: "S1610",
        previousState: "S1600",
        response: {
          type: "file",
          content: {
            title: " KYC"

          }
        }
      },
      {
        state: "S1620",
        previousState: "S1600",
        response: {
          type: "menu",
          content: {
            title: "Select Service Centre Locations",
            items: [
              {
                icon: "mdi-web",
                title: "Dhaka",
                nextState: "S1621"
              },
              {
                icon: "mdi-web",
                title: "Chittagong",
                nextState: "S1622"
              },
              {
                icon: "mdi-web",
                title: "Chandpur",
                nextState: "S1623"
              }
            ]

          }
        }
      },
      {
        state: "S1621",
        previousState: "S1600",
        response: {
          type: "map",
          content: {
            title: "Dhaka",
            mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5985373999733!2d90.41101151498225!3d23.797306284566215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a79462c3f5%3A0x9cda62774ae1b64c!2s108%2FC%2C%20No%2C%2090%20Gulshan%20North%20Ave%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1590142135248!5m2!1sen!2sin"
          }
        }
      },
      {
        state: "S1622",
        previousState: "S1600",
        response: {
          type: "map",
          content: {
            title: "Chittagong",
            mapurl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14766.35775800401!2d91.7820088!3d22.2935369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72fc8602d2b40507!2sBanglalink%20Customer%20Care%20Center%20-%20Chittagong%20Bondar!5e0!3m2!1sen!2sin!4v1590412645089!5m2!1sen!2sin"
          }
        }
      },
      {
        state: "S1623",
        previousState: "S1600",
        response: {
          type: "map",
          content: {
            title: "Chandpur",
            mapurl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14665.65340740875!2d90.6596341!3d23.2280408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7008107c189e8103!2sBanglalink%20Customer%20Care%20Center%20-%20Chandpur!5e0!3m2!1sen!2sin!4v1590412906043!5m2!1sen!2sin"
          }
        }
      },
      {
        state: "S1700",
        previousState: "S1000",
        response: {
          type: "video",
          content: {
            title: "My BL App Info",
            isYoutube: true,
            videoUrl: "https://www.youtube.com/embed/ZQORcRIRlSM"
          }
        }
      },
      {
        state: "S1000B",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: "আপনি কোন প্যাকটি অন্বেষণ করতে চান তা নির্বাচন করুন",
            items: [
              {
                icon: "mdi-web",
                title: "ইন্টারনেটের",
                nextState: "S1100"
              },
              {
                icon: "mdi-offer",
                title: "প্রচারমূলক অফার",
                nextState: "S1200"
              },
              {
                icon: "mdi-account-cash",
                title: "ভারসাম্য, বৈধতা, এফএন্ডএফ",
                nextState: "S1300"
              },
              {
                icon: "mdi-package",
                title: "প্যাকেজ তথ্য",
                nextState: "S1400"
              },
              {
                icon: "mdi-finance",
                title: "মোবাইল আর্থিক সেবা",
                nextState: "S1500"
              },
              {
                icon: "mdi-bank-plus",
                title: "কেওয়াইসি এবং নিকটস্থ স্টোর লোকেটার",
                nextState: "S1600"
              }
            ]
          }
        }
      },
      {
        state: "S1100B",
        previousState: "S1000",
        response: {
          type: "menu",
          content: {
            title: "ইন্টারনেট শাখা",
            items: [
              {
                icon: "mdi-web",
                title: "4 জি ইন্টারনেট প্যাক অ্যাক্টিভেশন",
                nextState: "S1110"
              },
              {
                icon: "mdi-offer",
                title: "স্মার্ট প্যাক অ্যাক্টিভেশন",
                nextState: "S1120"
              },
              {
                icon: "mdi-account-cash",
                title: "সামাজিক মিডিয়া প্যাক অ্যাক্টিভেশন",
                nextState: "S1130"
              },
              {
                icon: "mdi-package",
                title: "আমার প্যাকগুলি পরিচালনা করুন",
                nextState: "S1140"
              },
              {
                icon: "mdi-finance",
                title: "প্রচারমূলক অফার এবং ছাড়",
                nextState: "S1150"
              },
              {
                icon: "mdi-web",
                title: "ইন্টারনেট সেটিংস",
                nextState: "S1160"
              },
              {
                icon: "mdi-wallet-giftcard",
                title: "মিশ্র বান্ডিল ক্রয়",
                nextState: "S1170"
              }
            ]
          }
        }
      },

      {
        state: "S1110",

        previousState: "S1100",
        response: {
          type: "cardGallery",
          content: {
            title: "4G Pack Options",
            items: [
              {
                title: "15GB - TK 498",
                subTitle: "Validity - 30 days",
                content: ["Recommended Data Pack based on your usage."],
                actions: [
                  {
                    label: "Buy"
                  }
                ]
              },

              {
                title: "5GB - TK 498",
                subTitle: "Validity - 30 days",
                content: ["4GB + 1GB 4G - TK 299"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "3 GB - TK 289",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "1.5 GB - TK 247",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "1 GB - TK 189",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "125 MB - TK 58",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "16 GB - TK 399",
                subTitle: "Validity - 30 days",
                content: ["12GB + 4GB 4G - TK 399"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "20 GB - TK 649",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              }
            ]
          }
        }
      },

      {
        state: "S1120",

        previousState: "S1100",
        response: {
          type: "cardGallery",
          content: {
            title: "Smart Pack Options",
            items: [
              {
                title: "1GB - TK 189",
                subTitle: "Validity - 30 days",
                content: ["Recommended Data Pack based on your usage."],
                actions: [
                  {
                    label: "Buy"
                  }
                ]
              },

              {
                title: "4GB - TK 500",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "8 GB - TK 900",
                subTitle: "Validity - 30 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              }
            ]
          }
        }
      },

      {
        state: "S1130",

        previousState: "S1100",
        response: {
          type: "cardGallery",
          content: {
            title: "Social Media Options",
            items: [
              {
                title: "FB & Whatsapp - TK 1",
                subTitle: "Validity - 1 day",
                content: ["Recommended Data Pack based on your usage."],
                actions: [
                  {
                    label: "Buy"
                  }
                ]
              },

              {
                title: "FB 100MB - TK 10",
                subTitle: "Validity - 1 day",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "FB 40MB - TK 4",
                subTitle: "Validity - 1 day",
                content: ["Facebook + 40MB data"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              //               4. Whatsapp10MB-1day@TK4
              // 5. Viber unLimited-1day@TK6
              {
                title: "Whatsapp - TK 4",
                subTitle: "Validity - 1 day",
                content: ["Whatsapp + 10MB Data"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "Viber - TK 6",
                subTitle: "Validity - 1 day",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              }
            ]
          }
        }
      },
      {
        state: "S1150",

        previousState: "S1100",
        response: {
          type: "cardGallery",
          content: {
            title: "Promotional Offers",
            items: [
              {
                title: "12 GB - TK 198",
                subTitle: "Validity - 7 days",
                content: ["10GB + 2GB 4G"],
                actions: [
                  {
                    label: "Buy"
                  }
                ]
              },

              {
                title: "1GB - TK 39",
                subTitle: "Validity - 3 days",
                content: ["512 MB + 512 MB"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "4GB - TK 108",
                subTitle: "Validity - 7 days",
                content: ["3GB + 1GB 4G"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "3 GB - TK 67",
                subTitle: "Validity - 3 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "2 GB - TK 54",
                subTitle: "Validity - 72 hours",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "1 GB - TK 89",
                subTitle: "Validity - 7 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "8 GB - TK 148",
                subTitle: "Validity - 7 days",
                content: ["6GB + 2GB 4G"],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              },
              {
                title: "350 MB - TK 33",
                subTitle: "Validity - 3 days",
                content: [],
                actions: [
                  {
                    label: "Buy",
                    color: "primary"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  };
}

export default {
  namespaced: false,
  state: initialState,
  getters: {
    getCurrentState(state) {
      if (state.currentLanguage === "eng") {
        return state.currentState;
      } else {
        // build the temp response according to selected language
        const tempResponse = state.currentState + "B"
        // function that matches each iteration with condition
        const getItem = function (i) {
          return i.state.toLowerCase() === tempResponse.toLowerCase();
        };

        // invoke the filter to get a filtered array based on above funtion
        const filteredArray = state.stateResponses.filter(getItem);

        // check if the filtered Array has any elements
        if (filteredArray.length > 0) {
          return tempResponse
        } else {
          return state.currentState
        }
      }
    },
    getStateResponse: state => chatState => {
      const getItem = stateResponse => {
        return stateResponse.state.toLowerCase() === chatState.toLowerCase();
      };
      return state.stateResponses.filter(getItem)[0];
    },
    getCurrentStateResponse(state) {
      const getItem = stateResponse => {
        return (
          stateResponse.state.toLowerCase() === state.currentState.toLowerCase()
        );
      };
      return state.stateResponses.filter(getItem)[0];
    },
    getHomeState(state) {
      return state.homeState;
    }
  },
  mutations: {
    RESET_VIVR_MODULE(state) {
      Object.assign(state, initialState());
    },
    UPDATE_CURRENT_STATE(state, nextState) {
      if (!state.currentState || state.currentState !== nextState) {
        console.log(
          "currentState " +
          state.currentState +
          "not equal to next state " +
          nextState +
          " so setting previous state."
        );
        state.previousState = state.currentState;
        state.currentState = nextState;
        return true;
      } else {
        return false;
      }
    },
    UPDATE_CURRENT_LANGUAGE(state, language) {
      state.currentLanguage = language
    }
  },
  actions: {
    updateApplicationLanguage({ commit }, language) {
      commit("UPDATE_CURRENT_LANGUAGE", language)
    },
    updateCurrentState({ commit, getters }, nextState) {
      console.log(
        "getters.getStateResponse(nextState)=" +
        JSON.stringify(getters.getStateResponse(nextState))
      );
      if (getters.getStateResponse(nextState)) {
        if (!getters.getCurrentState || getters.getCurrentState !== nextState) {
          commit("UPDATE_CURRENT_STATE", nextState);
          commit(
            "UPDATE_INTERACTION_HISTORY",
            getters.getStateResponse(nextState).response.content.title
          );
        } else {
          console.log(
            "not updating the state since it is the same as previous state"
          );
        }
      } else {
        console.log(
          "skipping UPDATE_CURRENT_STATE mutation since nextState is not defined in the stateResponse. nextState=" +
          nextState
        );
      }
    },
    updateCurrentStateFromUrl({ dispatch }, nextState) {
      dispatch("updateCurrentState", nextState);
    },

    goToPreviousState({ dispatch, getters }) {
      const previousState = getters.getCurrentStateResponse.previousState;

      dispatch("updateCurrentState", previousState);
    },
    goToHomeState({ dispatch, getters }) {
      dispatch("updateCurrentState", getters.getHomeState);
    }
  }
};
