
async function dataCall() {
    const response = await fetch('./data/data.json');
    const data = await response.json();
    console.log(data.weatherReport[0])
    // localData = data;
    // console.log(localData);   
}
dataCall();