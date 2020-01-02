<template>
  <section>
    <h2>Endereço de envio</h2>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </UsuarioForm>
  </section>
</template>

<script>
import { api } from "@/services";
import UsuarioForm from "@/components/UsuarioForm.vue";
import { mapState } from "vuex";

export default {
  name: "FinalizarCompra",
  components: {
    UsuarioForm
  },
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra() {
      return {};
    }
  }
};
</script>

<style scoped>
</style>