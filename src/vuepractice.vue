<template>
    <div>
        <h3>{{firstname}} {{lastname}}</h3>
        <h3 v-text="college"></h3>
        <h3 v-html="branch"></h3>
        <h5 v-html="alert"></h5>
        <h3>{{msg}}</h3>
        <input v-model="msg"/>
        <h3 v-bind:id="headingID">Heading</h3>
        <button v-bind:disabled="isDisable">Button</button>
        <h3 class="underline-text" >Underline text</h3>
        <h3 class="underline-text" v-bind:class="status">Status</h3>
        <h3 v-bind:class="isPromoted && 'font-style' ">Applying conditional binding</h3>
        <h3 v-bind:class="myCountry ? 'mycountry' : 'notmycountry' ">India is My Country [Applying turnary condition Binding]</h3>
        <h3 v-bind:class="[isPromoted && 'font-style',myCountry ? 'mycountry' : 'notmycountry']"> I promote my Country[Array Conditional Binding]</h3>
        <h3 v-bind:class="{
            'font-style' : isPromoted,
            'mycountry' : myCountry
            }">Object Conditional Binding
        </h3>
        <h3 v-bind:style="{'color': color,'font-size': size+'px'}">Inline Style </h3>
        <h3 v-bind:style="styleobject">Style Object</h3>
        <hr>
        <h3 :class="font-style">Shorthand Directive</h3>
        <hr>
        <div v-bind:style="{'background-color': color}">
        <h2>Conditional Rendering</h2>
        <h3 v-if="num === 0"> This is zero </h3>
        <h3 v-else-if="num === 1"> This is one </h3>
        <h3 v-else> This is neither zero nor one zero </h3>
        </div>
        <hr>
        <h3 v-show="display"> v-show directive </h3>
        <!-- if v-if directive is false it remove rendering from dom weareas v-show always 
        remain into dom -->
        <h3 v-if="display"> v-if directive </h3>
        <hr>
        <div>
            <h1> List Rendering </h1>
            <h2> 1. Array of Strings</h2>
            <h3 v-for="(name, index) in arrayofstrings" v-bind:key="name">{{index}} {{name}} </h3><hr>
            <h2> 2. Array of Objects</h2>
            <h3 v-for="(name, index) in arrayofobjects" v-bind:key="name">{{index}} {{name.first}} {{name.last}} </h3>
            <hr>
            <h2> 3. Array of Arrays</h2>
            <h3 v-for="(name) in arrayofarrays" v-bind:key="name"> {{name.actor}} -> 
                <text v-for="movie in name.movies" v-bind:key="movie"> {{movie}}, </text> 
            </h3>
            <hr>
            <h3 v-for="(value,key,index) in objects" v-bind:key="value">{{index}} {{key}} {{value}} </h3><hr>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      firstname : 'Ziyauddin',
      lastname : 'Shah',
      college : 'IET Lucknow',
      branch : '<h2>Computer Science and Engineering</h2>',
      alert : `<a href="#" onclick="alert('how are you')"> click </a>`,
      msg : 'hello',
      headingID : 'heading',
      isDisable : true,
      underline : false,
      status : 'danger',
      isPromoted : true,
      myCountry : true,
      color : 'orange',
      size : 50, 
      styleobject : {
        color : 'pink',
        fontSize : '70px',
        fontStyle : 'italic',
      },
      num : 1,
      display : true,
      arrayofstrings : ['mony','thena','munna','guddu'],
      arrayofobjects : [
        { 
          first : 'Ziyauddin', 
          last : 'Shah'
        },
        { 
          first : 'Expert in', 
          last : 'development'
        },
      ],
      arrayofarrays : [
        { 
          actor : 'Amir Khan', 
          movies : ['pk','3 idiots','talaas'] 
        },
        { 
          actor : 'Allu Arjun', 
          movies : ['Pushpa','intelligent agent'] 
        },
      ],
      objects : {
        name : 'Ziyauddin',
        favouritecolor : 'Green',
        
      }
    }
  }
}
</script>

<style>
.hr-text{
    color: rgb(64, 61, 211);
    font-size: 50px;
    border-style: solid;
    border-width: 5px;
    border-color:rgb(17, 9, 9);
    padding: 10px;
    margin: 5px;
}
.hrtext{
    font-size:20px;
    text-align: start;
    background-color: burlywood;
}
.hrtexthead{
    font-size:30px;
    font:bold;
    text-align: start;
    background-color: rgb(227, 223, 247);
}
</style>
