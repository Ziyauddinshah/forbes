<template>
    <div >

        <h1>Forbes Data </h1>
        <button v-on:click="getForbesData()">Get Forbes Data</button>
        <div class="box"> 
            <div class="box-row"> 
                <div class="box-cell box1"> 
                    <div class="inputsearch">
                        <input placeholder="Search By Name..." v-model.trim="searchbyname"/> 
                        <button v-on:click.prevent="SearchByName(searchbyname)" >Search</button>
                    </div>
                </div> 
                <div class="box-cell box2" > 
                    <label for="worth">Sort By Worth: </label> 
                    <button v-on:click="SortByLowestWorth()">Lowest</button>
                    <button v-on:click="SortByHighestWorth()">Highest</button>
                </div> 
                <div class="box-cell box3"> 
                    <label for="filter">Filter By: </label>
                    <select v-on:change="handleChangeFilter($event)">
                        <option disabled selected> Select Country</option>
                        <option v-for="(product,index) in countrydata" v-bind:key="index">
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
                        <th> Total Worth(Crores USD) </th>
                        <th> Rank in World</th>
                        <th> Industries </th>
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
                            <text v-for="(post1) in post.industries " v-bind:key="post1"> {{post1}} </text> 
                        </td>
                        <td >  
                            <img v-bind:src="post.squareImage" 
                            v-bind:style="{'width':100+'px','height':110+'px','margin-top':5+'px'}" alt="Image here"/>  
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr><br>
        </div>
    </div>
</template>

<script >

export default {
    name : 'ForbesApi',
    data() {
        return {
            forbesdata : [],
            searchbycountry : '',
            searchbyname : '',
            tempforbesdata : [],
            newforbesdata : [],
            srno : 1,
            sortByWorth : [],
            selected : '',
            countrydata: [],
        }
    },
    methods: {
        async getForbesData(){
            try {
                let response = await fetch('https://forbes400.herokuapp.com/api/forbes400/')
                this.forbesdata = await response.json()
                this.newforbesdata = this.forbesdata
                this.countrydata = [...new Map(this.forbesdata.map(item => [item.countryOfCitizenship, item])).values()]
                // console.log(this.forbesdata)
                this.countrydata = this.countrydata.sort(function(a,b) {
                    var textA = a.countryOfCitizenship.toUpperCase();
                    var textB = b.countryOfCitizenship.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
                // console.log(this.countrydata)
                // this.tempforbesdata = this.forbesdata
                // console.log(this.forbesdata[0].person.name)
                // console.log(this.forbesdata[0].countryOfCitizenship)
            }
            catch (error) {
                console.log(error)
            }
        },
        SortByLowestWorth() {
            this.sortByWorth = this.forbesdata
            this.sortByWorth.sort(function(a,b) {
                return b.rank - a.rank
            })
        },
        SortByHighestWorth() {
            this.sortByWorth = this.forbesdata
            this.sortByWorth.sort(function(a,b) {
                return a.rank - b.rank
            })
        },
        SearchByName(searchbyname) {	
            var tempforbesdata = this.forbesdata
            tempforbesdata =  tempforbesdata.filter((item) =>{
                return (item.person.name == searchbyname)
            })
            this.searchbyname = ''
            this.forbesdata = tempforbesdata
        },
        handleChangeFilter(e) {
            if(e.target.options.selectedIndex > -1) {
                var value = e.target.options[e.target.options.selectedIndex].text
                var tempdata = this.newforbesdata
                tempdata = tempdata.filter((item) => {
                    return (item.countryOfCitizenship == value)
                })
                this.forbesdata = tempdata;
            }
        },
    },
    mounted() {
        this.getForbesData();
    },
}
</script>
<style scoped>
    .hrtext{
        background-color: rgb(238, 227, 212);
        font-size: 20px;
    }
    .hrtexthead{
        font:bold;
        font-size: 20px;
        background-color: rgb(227, 223, 247);
    }
    .thead{
        width: 50px;
    }
    .box { 
        width:100%; 
        margin-top:30px;
        margin-bottom:10px; 
        display:table; 
    } 
    .box .box-row { 
        display:table-row; 
        font-size: 20px;
        font:bold;
    } 
    .box .box-cell { 
        display:table-cell; 
        width:33%; 
        padding:5px; 
    } 
    .box .box-cell.box1 { 
        background:rgb(188, 231, 188);  
        text-align:center; 
    } 
    .box .box-cell.box2 { 
        background:rgb(188, 231, 188);
        text-align:center ;
    } 
    .box .box-cell.box3 { 
        background:rgb(188, 231, 188);
        text-align:center; 
    }
    select {
        overflow: hidden;
        overflow-wrap: break-word;
        overflow-y:hidden;
        width: 40%;
        font-size: 15px;
        display: inline-block;
        white-space: pre-line;
    }
</style>
