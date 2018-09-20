<template>
  <div class="hello">
    <loddings
        :arrDate=lists
        :rt=fg
    />
    <headers
      :header=msg
    />
    <div v-show="count">123213</div>
    <button type="button" @click="add">显示</button>
    <button type="button" @click="addHide">隐藏</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
      msg: 'Welcome to Your Vue.js App22222',
      height:"20px",
      fg:{
        height:"20px",
        border:"1px solid #000"
      },
      lists:[
        {
          "id":"1",
          "name":"张三",
          "age":"12"
        },
        {
          "id":"4",
          "name":"张三1",
          "age":"123"
        }
      ]
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    add(){
    //alert("1212")
      this.$store.dispatch('actionIncrease')
    },
    addHide(){
        this.$store.dispatch('actionIncreaseHIde')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
