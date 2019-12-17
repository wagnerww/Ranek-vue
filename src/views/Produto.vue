<template>
  <p>Produto {{produto}}</p>
</template>

<script>
import {api} from '@/services';

export default {
  name: "Produtos",
  props: ["id"],
  data(){
    return {
      produto: null
    }
  },
  methods:{
    getProduto(){
      api.get(`/produto/${this.id}`).then(response => { this.produto = response.data })
    }
  },
  created(){
    this.getProduto();
  }
};
</script>

<style>
</style>
