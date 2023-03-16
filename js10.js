// fetch('https://libruary/autors', (err, data) => {
//   if (err) {
//     console.log(err);
//     return
//   } else {
//     fetch('https://libruary/autors/5', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fetch('https://libruary/autors/5/books', (err, data) => {
//           //
//         if (err) {
//             console.log(err);
//           } else {
//             fetch('https://libruary/autors/5/books/6', (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// fetch('https://libruary/autors')
//   .then((data) => {
//     fetch('https://libruary/autors/5');
//   })
//   .then((data) => {
//     fetch('https://libruary/autors/5/books');
//   })
//   .then((data) => {
//     fetch('https://libruary/autors/5/books/6');
//   })
//   .catch((err) => {
//     console.log('catch err', err)
//   });

// 'pending' //'fulfilled' 'rejected'

// const server = {
//   getData() {
//     const promice = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // resolve('data');
//         reject('something went wrong');
//       }, 2000);
//     });
//     return promice;
//   },
// };

// server
//   .getData()
//   .then((data) => {
//     console.log('then', data);
//     return data;
//   })
//   .catch((err) => {
//     console.log('catch', err);
//     // console.log(a);
//     // return 'some string';
//   })

// const promise = server.getData();

// promise.then(() => {});

// promise.then(() => {});

// const promise2 = promise.then((data) => {
//   console.log('then', data);

// });

// promise2.then((res2) => {
//   console.log('then2', res2);
// });

//then
//catch
//finally

//Напишите функцию delay(ms), которая возвращает промис,
//переходящий в состояние "resolved" через ms миллисекунд.
//Пример использования:

const delay = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};

delay(2000).then(() => console.log('Hello!'));
