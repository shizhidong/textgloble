<template>
<div>
    <div v-for="(item,index) in arrDate" :key="index" :style="rt">
      {{item.name}}
      {{item.age}}
    </div>
 </div>
</template>
<script>
    export default{
        props:["arrDate","rt"]
    }
</script>
