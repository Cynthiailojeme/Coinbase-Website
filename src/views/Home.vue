<template>
  <div class="home">
    <navbar/>
    <belownav/>
    <graph/>
    <rest/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import belownav from '@/components/belownav.vue'
import graph from '@/components/graph.vue'
import rest from '@/components/rest.vue'

export default {
  name: 'home',
  components: {
    navbar,
    belownav,
    graph,
    rest
  }
}
</script>
