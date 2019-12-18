<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <button v-if="!criar" @click="criar = true" class="btn">Criar conta</button>
    <UsuarioForm v-else />
  </section>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm.vue';

  export default {
    name: "LoginCriar",
    components:{
      UsuarioForm
    },
    data(){
      return {
        criar: false
      }
    }
  }
</script>

<style scoped>

</style>