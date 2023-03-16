import fetch from 'node-fetch';
// const server = {
//   getData() {
//     const promise = new Promise((res, rej) => {
//       setTimeout(() => {
//         res('some data');
//         // rej('something went wrong');
//       }, 1000);
//     });
//     return promise;
//   },
// };

// server
//   .getData()
//   .then((data) => {
//     console.log(s);
//     return data;
//   })
//   .then((data) => {
//     console.log('data from server', data);
//   })
//   .then((data) => {
//     console.log('data from server', data);
//   })
//   .then((data) => {
//     console.log('data from server', data);
//   })
//   .catch((err) => {
//     console.log('server error');
//   })
//   .finally(() => {
//     console.log('work end');
//   })

// fetch('https://google.com/query=promise')
//   .then(() => {
//     console.log('response from google');
//     return fetch('htps://yahoo.com/query=promise').then(() => {
//       console.log('response from yahoo');
//     });
//   })
//   .then((num) => {
//     return fetch('https://duckduckgo.com/query=promise').then(() => {
//       console.log('response from duckduckgo2');
//     });
//   })
//   .then((duckdckgo) => {
//     console.log('response from duckduckgo1');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise1 = fetch('https://google.com/query=promise');
// const promise2 = fetch('htps://yahoo.com/query=promise');
// const promise3 = fetch('https://duckduckgo.com/query=promise');

// const bigPromise = Promise.all([promise1, promise2, promise3]);

// bigPromise
//   .then((array) => {
//     array[0]; // promise1
//     array[1]; // promise2 ///
//     array[2]; // promise3
//     console.log('everything is ok');
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

fetch('htps://google.com/query=promise')
  .then((dataFromGoogle) => {
    console.log(dataFromGoogle);
    console.log('response from google');
    return fetch('https://yahoo.com/query=promise');
  })
  .then((num) => {
    console.log('response from yahoo');
    return fetch('https://duckduckgo.com/query=promise');
  })
  .then((num) => {
    console.log('response from duckduckgo');
  });

// asyng await

const doIt = async () => {
  try {
    const dataFromGoogle = await fetch('htps://google.com/query=promise');
  } catch (err) {
    console.log('ERROR in try', err);
  } finally {
    doSomething();
  }
};
doIt();
console.log('SOMETHING');
