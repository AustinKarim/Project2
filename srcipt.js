  const app={};
        app.weatherKey="2ff58d1b2bae16b569f1995e91622cd8";
        app.forecastKey='b1bc1253abd4442ca7e87981134fa9e7';
        app.newsKey="60bd731410f25a2a1d87e28199614207";
        app.weatherUrl="http://api.weatherstack.com";
        app.forecastUrl="http://api.weatherbit.io/v2.0/forecast/daily";
        app.newsUrl="http://api.mediastack.com/v1/news";

        app.fetchWeatherCommand= function(){
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
                    console.log(data);
                })
 
        }


        app.fetchForecastCommand= function(){
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
                    console.log(data);
                  
                    
                })

        }
 
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
                console.log(listElement);
              
                  

            }  
            // weatherApi.forEach((datar) => {
           

                    
                   
                // }) test comment test comment thisis a testttt
              
        
    }
        

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



        app.init= function(){
            app.fetchWeatherCommand();
            app.fetchForecastCommand();
            // app.fetchNewsCommand();

        }

        app.init();