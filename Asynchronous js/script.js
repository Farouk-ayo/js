'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = ``) {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.name}</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX CALL COUNTRY
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener(`load`, function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // RENDER COUNTRY
    // renderCountry(data);

    // GET NEIGHBOUR COUNTRY
    const [neighbour] = data.borders;

    if (!neighbour) return;
    // AJAX CALL COUNTRY
    const request2 = new XMLHttpRequest();
    request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    // console.log(request2.responseText);

    request2.addEventListener(`load`, function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      //   renderCountry(data2, `neighbour`);
    });
  });
};

getCountryAndNeighbour(`portugal`);
// getCountryAndNeighbour(`nigeria`);

//////////////////////////////////
/////////////////////////////////
///////////////////////////////

// how we call nowadays
// METHOD 2
const getCountryData = function (country) {
  fetch(`https:restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //   renderCountry(data[0]);
    });
};
getCountryData(`portugal`);

//////////////////////////////////
/////////////////////////////////
///////////////////////////////

// how we call nowadays
// METHOD 3

// const getCountryData2 = function (country) {
//   // country1
//   fetch(`https:restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         console.log(response);

//         if (!response.ok)
//           throw new Error(`Country not found ${response.status}`);

//         return response.json();
//       }
//       //   err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // country 2
//       return fetch(`https:restcountries.com/v3.1/name/${neighbour}`);
//     })
//     .then(
//       response => {
//         if (!response.ok)
//           throw new Error(`Country not found ${response.status}`);
//         return response.json();
//       } //   err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0], `neighbour`);
//       //   console.log(data);
//     })
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener(`click`, function () {
//   getCountryData2(`portugal`);
// });

// getting errors correct ways

const getJSON = function (url, errorMsg = `something went wrong `) {
  fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found ${response.status}`);

    return response.json();
  });
};

const getCountryData2 = function (country) {
  // country1
  getJSON(`https:restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      //   const neighbour = `dwdwwwd`; for errorr
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error(`No neigbour found!`);

      // country 2
      return getJSON(
        `https:restcountries.com/v3.1/name/${neighbour}`,
        `Country not found`
      );
    })

    .then(data => {
      renderCountry(data[0], `neighbour`);
      //   console.log(data);
    })
    .catch(err => {
      console.error(`${err}💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener(`click`, function () {
  // getCountryData2(`edsefsaa`);
  getCountryData2(`portugal`);
});

// coding challenge
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response
        .json()
        .then(data => {
          console.log(data);
          console.log(`you are in ${data.city}, ${data.region}`);
          return fetch(`https:restcountries.com/v3.1/name/${data.region}`);
        })
        .then(response => {
          if (!response.ok)
            throw new Error(`Country not found ${response.status}`);
          return response.json();
        });
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥💥`));
};
whereAmI(52.588, 33.381);
whereAmI(19.837, 72.873);
// ('https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key');

////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
// Aynchronize behind the scene
// console.log(`Test start`);
// setTimeout(() => {
//   console.log(`o sec timer`);
// }, 0);
// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

// Promise.resolve(`Resolved promise 2`).then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log(`Test end`);

////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
const letterPromise = new Promise(function (resolve, reject) {
  console.log(`Letter draw is happening`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You WIN 💰`);
    } else {
      reject(new Error(`You lost your money`));
    }
  }, 2000);
});

letterPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 second passed`);
    return wait(1);
  })
  .then(() => console.log(`4 second passed`));

//   INSTEAD OF HAVING THIS DIFFICULT CALLBACK HELL
// setTimeout(() => {
//   console.log(` 1 second passed`);
//   setTimeout(() => {
//     console.log(` 1 second passed`);
//     setTimeout(() => {
//       console.log(` 2 second passed`);
//       setTimeout(() => {
//         console.log(` 3 second passed`);
//         setTimeout(() => {
//           console.log(` 4 second passed`);
//           setTimeout(() => {
//             console.log(` 5 second passed`);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// this one resolve immediately
Promise.resolve(`abc`).then(x => console.log(x));
Promise.reject(new Error(`problem`)).catch(x => console.error(x));

// promisifying

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)

    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI2 = function () {
  getPosition()
    .then(pos => {
      const { latitude: latt, longitude: lngt } = pos.coords;
      //   console.log(latt, lngt);
      return fetch(`https://geocode.xyz/${latt},${lngt}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);
      return fetch(`https:restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥💥`));
};
// btn.addEventListener(`click`, whereAmI2());

// coding challenge
const wait1 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// const imgContainer = document.querySelector(`.images`);

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement(`img`);
//     img.src = imgPath;

//     img.addEventListener(`load`, function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener(`error`, function () {
//       reject(new Error(`Image not found`));
//     });
//   });
// };

// let currentImg;

// createImage(`img/img-1.jpg`)
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return createImage(`img/img-2.jpg`);
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 2 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//   })
//   .catch(err => console.error(err));

//   Async Await
const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAm3 = async function () {
  try {
    const pos = await getPosition();

    const { latitude: latt, longitude: lngt } = pos.coords;

    //   reverse geo coding
    const resGeo = fetch(`https://geocode.xyz/${latt},${lngt}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    //   fetch(`https:restcountries.com/v3.1/name/${country}`).then(res =>
    //     console.log(res)
    //   );

    // OR
    const res = await fetch(
      `https:restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error(`Problem getting country`);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `you are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`something went wrong 💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// whereAm3();
// whereAm3();
// whereAm3();
// console.log(`FIRST`);
console.log(`1: Will get location`);
const city = whereAm3();
console.log(city);
whereAm3()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log(`3: Finished getting location`));

//   in async await
(async function () {
  try {
    const city = await whereAm3();
    console.log(`2 : ${city}`);
  } catch (err) {
    console.log(`2: ${err.message} 💥`);
  }
  console.log(`3: Finished getting location`);
})();

// error handling with async await
// Try catch statement
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// Returning value from async

const getCountries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https:restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https:restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https:restcountries.com/v3.1/name/${c3}`);
    // TO PREVENT THEM FROM RUNNING ONE AFTER T=ANOTHER
    // WE USE Promise.ALL

    const data = await Promise.all([
      getJSON(`https:restcountries.com/v3.1/name/${c1}`),
      getJSON(`https:restcountries.com/v3.1/name/${c2}`),
      getJSON(`https:restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data1.capital, data2.capital, data3.capital);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

getCountries(`portugal`, `canada`, `tanzania`);

//////////////////////////////////
///////////////////////////////////
///////////////////////////////////
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https:restcountries.com/v3.1/name/italy`),
    getJSON(`https:restcountries.com/v3.1/name/egypt`),
    getJSON(`https:restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res(0));
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https:restcountries.com/v3.1/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//   Promise.allSettled
Promise.allSettled([
  Promise.resolve(`success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another success`),
]).then(res => console.log(res));

// Promise.all
Promise.all([
  Promise.resolve(`success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another success`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//   Promise.any ES2021
Promise.any([
  Promise.resolve(`success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another success`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

///////////////////////////////
///////////////////////////
//   coding challenge 3
const imgContainer = document.querySelector(`.images`);

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement(`img`);
    img.src = imgPath;

    img.addEventListener(`load`, function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener(`error`, function () {
      reject(new Error(`Image not found`));
    });
  });
};

const loadNpause = async function () {
  try {
    let img = await createImage(`img/img-1.jpg`);
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = `none`;

    img = await createImage(`img/img-2.jpg`);
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = `none`;
  } catch (err) {
    console.error(err);
  }
};
// loadNpause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add(`parallel`));
  } catch (err) {
    console.error(err);
  }
};
loadAll([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]);
