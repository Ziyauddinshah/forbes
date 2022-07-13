<template>
    <div>
        <h1>Weather Api</h1>
        <h2>{{msg}}</h2>
        <input v-model="country"/>
        <button v-on:click="getWeatherData(country)">Show Data</button>
        <div>
            <h1>3 Day's Weather Forecast of {{country}} </h1>
            <table v-bind:style="{'width':100+'%'}">
                <thead>
                    <tr class="hrtexthead">
                        <th> Sunrise </th>
                        <th> Sunset </th>
                        <th> Date </th>
                        <th> Temp.(c) </th>
                        <th> Humidity </th>
                        <th> W_Speed(kph) </th>
                        <th> Condition </th>
                    </tr>
                </thead>
                <tbody class="hrtext">
                    <tr v-for="(post) in weatherforecast" v-bind:key="post">
                        <td>  {{post.astro.sunrise}} </td>
                        <td>  {{post.astro.sunset}} </td>
                        <td>  {{post.date}} </td>
                        <td>  {{post.day.avgtemp_c}} </td>
                        <td>  {{post.day.avghumidity}} </td>
                        <td>  {{post.day.maxwind_kph}} </td>
                        <td>  {{post.day.condition.text}} </td>
                    </tr>
                </tbody>
            </table>
            <hr><br>
            <!-- <table v-for="(post,index) in forecast" v-bind:key="post" v-bind:style="{'width':100+'%'}">
                    <tr v-if="index === 0" class="hrtexthead">
                        <th> Sunrise </th>
                        <th> Sunset </th>
                        <th> Date </th>
                        <th> Temp.(c) </th>
                        <th> Humidity </th>
                        <th> W_Speed(kph) </th>
                        <th> Condition </th>
                    </tr>
                    <tr v-else class="hrtext" >
                        <td>  {{post.astro.sunrise}} </td>
                        <td>  {{post.astro.sunset}} </td>
                        <td>  {{post.date}} </td>
                        <td>  {{post.day.avgtemp_c}} </td>
                        <td>  {{post.day.avghumidity}} </td>
                        <td>  {{post.day.maxwind_kph}} </td>
                        <td>  {{post.day.condition.text}} </td>
                    </tr>
            </table> -->
        </div>
        
        <!-- <div>
            <h1>Forbes Data </h1>
            <h2>Search By Name : {{searchbyname}}</h2>
            <button v-on:click="getForbesData()">Get Forbes Data</button>
            <div class="box"> 
                <div class="box-row"> 
                    <div class="box-cell box1"> 
                        <div class="inputsearch">
                            <input placeholder="Search By Name..." v-model.trim="searchbyname"/> 
                            <button v-on:click="SearchByName(searchbyname)">Search</button>
                        </div>
                    </div> 
                    
                    <div class="box-cell box2"> 
                        Sort By Worth
                        <button v-on:click="SortByLowestWorth()">Lowest</button>
                        <button v-on:click="SortByHighestWorth()">Highest</button>
                    </div> 
                    
                    <div class="box-cell box3"> 
                        <label for="cars">Filter By: </label>
                        <select v-on:change="handleChangeFilter($event)">
                            <option v-for="(product) in countrydata" v-bind:key="product">
                                 {{ product.countryOfCitizenship }}
                            </option>
                        </select>
                    </div> 
                </div> 
            </div> 
            
            <div v-bind:style="{'margin-top':0+'px'}">
                <table v-bind:style="{'width':100+'%'}">
                    <thead>
                        <tr class="hrtexthead">
                            <th> Sr. No</th>
                            <th> Name </th>
                            <th> Country </th>
                            <th> City </th>
                            <th> Total Worth </th>
                            <th> Rank in World</th>
                            <th> Image </th>
                        </tr>
                    </thead>
                    <tbody v-for="(post,srno) in forbesdata " v-bind:key="post" class="hrtext">
                        <tr >
                            <td >  {{srno=srno+1}} </td>
                            <td >  {{post.person.name}} </td>
                            <td >  {{post.countryOfCitizenship}} </td>
                            <td >  {{post.city}} </td>
                            <td >  {{post.finalWorth}} </td>
                            <td >  {{post.rank}} </td>
                            <td >  
                                <img v-bind:src="post.squareImage" 
                                v-bind:style="{'width':100+'px','height':110+'px','margin-top':5+'px'}"/>  
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr><br>
            </div>
        </div> -->
    </div>
</template>
<script>

export default {

    name : 'WeatherApi',
    data() {
        return {
            img : '',
            weatherdata : [],
            weatherlocation : [],
            weatherforecast : [],
            country : 'Varanasi',
            checks : ["a","b","c","d"],
            msg : 'Weather api call',
        }
    },
    methods: {
        async getWeatherData(country) {
            try {
                let response = 
                await fetch(`http://api.weatherapi.com/v1/forecast.json?key=51359a4283e44df4977135848223101&q=${country}&days=7&aqi=no&alerts=no`)
                this.weatherdata = await response.json()
                this.weatherlocation = this.weatherdata.weatherlocation
                this.weatherforecast = this.weatherdata.forecast.forecastday
                // console.log(this.forecast)
                // console.log(this.data.current.air_quality)
            } catch (error) {
                console.log(error)
            }
        },

        // async getForbesData(){
        //     try {
        //         let response = await fetch('https://forbes400.herokuapp.com/api/forbes400/')
        //         this.forbesdata = await response.json()
        //         this.newforbesdata = this.forbesdata
        //         this.countrydata = [...new Map(this.forbesdata.map(item => [item.countryOfCitizenship, item])).values()]
        //         // console.log(this.countrydata)
        //         //console.log("Unique by place")
        //         // console.log(JSON.stringify(arr1))
        //         // this.tempforbesdata = this.forbesdata
        //         // console.log(this.forbesdata[0].person.name)
        //         // console.log(this.forbesdata[0].countryOfCitizenship)
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // },
        // SortByLowestWorth() {
        //     this.sortByWorth = this.forbesdata
        //     this.sortByWorth.sort(function(a,b) {
        //         return b.rank - a.rank
        //     })
        // },
        // SortByHighestWorth() {
        //     this.sortByWorth = this.forbesdata
        //     this.sortByWorth.sort(function(a,b) {
        //         return a.rank - b.rank
        //     })
        // },
        // SearchByName(searchbyname) {	
        //     var tempforbesdata = this.forbesdata
        //     tempforbesdata =  tempforbesdata.filter((item) =>{
        //         return (item.person.name == searchbyname)
        //     })
        //     console.log(tempforbesdata)
        //     this.forbesdata = tempforbesdata
        // },
        // handleChangeFilter(e) {
        //     if(e.target.options.selectedIndex > -1) {
        //         var value = e.target.options[e.target.options.selectedIndex].text
        //         var tempdata = this.newforbesdata
        //         tempdata = tempdata.filter((item) => {
        //             return (item.countryOfCitizenship == value)
        //         })
        //         console.log(value)
        //         this.forbesdata = tempdata;
        //     }
        // },
    },
    mounted() {
        this.getWeatherData();
    },
}
</script>
<style scoped>
    .hrtext{
        background-color: rgb(238, 227, 212);
    }
    .hrtexthead{
        font:bold;
        background-color: rgb(227, 223, 247);
    }
    .thead{
        width: 50px;
    }
    .box { 
        width:100%; 
        margin-top:30px; 
        display:table; 
    } 
    .box .box-row { 
        display:table-row; 
    } 
    .box .box-cell { 
        display:table-cell; 
        width:33%; 
        padding:5px; 
        
    } 
    .box .box-cell.box1 { 
        background:rgb(203, 236, 203); 
        color:white; 
        text-align:center; 
        border-color: blueviolet;
    } 
    .box .box-cell.box2 { 
        background:lightgreen; 
        text-align:center ;
    } 
    .box .box-cell.box3 { 
        background:lime; 
        text-align:center; 
    }
    select {
        overflow: hidden;
        overflow-wrap: break-word;
        width: 40%;
        display: inline-block;
        white-space: pre-line;
    }
</style>
