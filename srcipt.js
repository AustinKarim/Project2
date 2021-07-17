// Name Space
// 
const app={};


// -------------------------
//                      Global Const 
// ---------------------------

// ---------------------------
//                       API KEYS
// -----------------------------
app.weatherKey="2ff58d1b2bae16b569f1995e91622cd8";
app.forecastKey='b1bc1253abd4442ca7e87981134fa9e7';
app.newsKey="60bd731410f25a2a1d87e28199614207";

// --------------------------------
//                         URLS
// --------------------------------
app.weatherUrl="http://api.weatherstack.com";
app.forecastUrl="http://api.weatherbit.io/v2.0/forecast/daily";
app.newsUrl="http://api.mediastack.com/v1/news";



// ------------------------------------
//                 Fetching the the Weather API
// ----------------------------------

app.fetchWeatherCommand = function() {
    const url= new URL(`${app.weatherUrl}/current`);
    url.search=new URLSearchParams({
        access_key:app.weatherKey,
        query:'Toronto'
    })
    fetch(url) 
    .then(function(res){
        // console.log(res);
        return res.json();
    })
    .then(function(data){
        
        if (data.current.temperature > 22){
            weathup="hot";
            
        }
        else if(data.current.temperature <15){
            weathup="cold";
            
            
        }
        else{
            weathup="warm";
        }

                
        if (data.current.temperature > 22){
            weathup="hot";
            
        }
        else if(data.current.temperature <15){
            weathup="cold";
            
            
        }
        else{
            weathup="warm";
        }
        
        const todayweather=document.querySelector('.weatherToday');
        todayweather.innerHTML=`<h2>It is ${weathup} today</h2> <h2> ${data.current.temperature}<i class=""></i></h2>`;
        console.log(todayweather);
        
    })
    
}


//-----------------------------------
//                   Fetching the Forecast API
//-----------------------------------


app.fetchForecastCommand = function(){
    const url= new URL(`${app.forecastUrl}/forecast`);
    url.search=new URLSearchParams({
        key:app.forecastKey,
        city:'Toronto',
        days:5
    })
    fetch(url) 
    .then(function(res){
        
        return res.json();
    })
    .then(function(data){
        app.dispayForecast(data);
        console.log(data)
    })
}

// --------------------------------
//                  Live Date Function
// ------------------------------

const displaytime= function(){
    console.log();
    const time=document.querySelector('.time')
    time.textContent=new Date().toLocaleTimeString();
    
}

setInterval(displaytime, 1000);

displaytime();


// -------------------------------
//                      Display Forecast Temps
// --------------------------------

app.dispayForecast = function(...weatherApi){
    const ul = document.querySelector('.weatherForecastList');
    const weatherApiLength=weatherApi[0].data.length;
    console.log(weatherApiLength);
    
    for (let i=0; i< weatherApiLength; i++){
        // console.log(weatherApi[0].data[0].temp);
        const listElement = document.createElement('li');
        
        listElement.innerHTML=`${weatherApi[0].data[i].temp} on ${weatherApi[0].data[i].datetime}`;
        listElement.style.listStyle='none';
        ul.append(listElement);
        
        
        
    }  
}

// ----------------------------------
//                      Air Conditoning Code
// ----------------------------------

app.changeTemp = function() {
    const temp = document.querySelector(".temp");
    let value = 20;
    
    // Up button Code
    document.querySelector(".upButton").addEventListener("click", () => {
        value = value +1;
        temp.textContent = value
        if (value > 27) {
            alert("To Damn Hot, you sure?")
            temp.textContent = 27
            value = 27    
        }       
        
    })
    
    
    // Down Button Code
    document.querySelector(".downButton").addEventListener("click", () => {
        value = value -1;
        temp.textContent = value
        if (value < 16) {
            alert("To Damn Cold, you sure?")   
            temp.textContent = 16
            value = 16      
        }
    })
}



// -----------------------------
//                              Init Function
// -------------------------------
app.init= function() {
    app.fetchWeatherCommand();
    app.fetchForecastCommand();
    app.changeTemp();
    // app.fetchNewsCommand();
    
}

app.init();


// -----------------------------
//                       Work In Progress News API
// --------------------------------

// app.fetchNewsCommand= function(){
    //     const url= new URL(`http://proxy.hackeryou.com`);
    //     url.search=new URLSearchParams({
    //         reqUrl: app.newsUrl,
            
    //             params: {
    //                 crossOrigin: true,
    //                 access_key:app.newsKey,
    //                 langauge:"en",
    //                 sources:"cnn,bbc",
    //                      limit:6
    //                 }
            
    //     })
    //     fetch(url) 
    //         .then(function(res){
    //             console.log(res);
    //             return res.json();
    //         })
    //         .then(function(data){
    //             console.log(data);
    //         })

// }