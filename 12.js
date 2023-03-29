let fetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case 'google': {
                setTimeout(() => {
                    res({data: 'from google'});
                }, 2000)
                break
            }
            case 'microsoft': {
                setTimeout(() => {
                    res({data: 'from microsoft'});
                }, 3000)
                break
            }
            case 'it-kamasutra': {
                setTimeout(() => {
                    res({data: 'from it-kamasutra', isAuth:true});
                }, 500)
                break
            }
            default: {
                setTimeout(() => {
                    res({data: 'from unknown resource'});
                }, 500)
            }
        }
    })
}

async function makeRequest() {
    let data = await fetch('microsoft')
    console.log(data)
    data = await fetch('google')
    console.log(data)
    data = await fetch('it-kamasutra')
    console.log(data)
}

makeRequest()

fetch('microsoft')
    .then(data => {
        console.log(data)
        return fetch('google')
    })
    .then(data => {
        console.log(data)
       return fetch('it-kamasutra')
    })
    .then(data => console.log(data))

let makeRequestMultiThreaded = () => {
    let p1 = fetch('microsoft')
    let p2 = fetch('google')
    let p3 = fetch('it-kamasutra')
    Promise.all([p1, p2, p3]).then(data => console.log(data))
}

makeRequestMultiThreaded()

let makeRequestAtTheOneMoment = async () => {
    let dataAuth = await fetch('it-kamasutra');
    if(dataAuth.isAuth){
        let promises = [
            fetch('microsoft'),
            fetch('google'),
        ]
        let data = await Promise.all(promises)
        console.log(dataAuth)
        console.log(data)
    }
}

makeRequestAtTheOneMoment();
