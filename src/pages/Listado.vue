<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8 h-full">
    <div
      v-if="cargando"
      class="
        max-w-7xl
        mx-auto
        py-6
        px-4
        sm:px-6
        lg:px-8
        align-self-center
        justify-justify-self-center
        items-center
        flex flex-col
        h-full
      "
    >
      <img src="../assets/loading_icon.svg" class="w-100 h-100" />

      <p class="text-lg antialiased font-bold">Cargando...</p>
    </div>
    <div
      v-else
      class="
        align-self-center
        grid
        lg:grid-cols-3
        md:grid-cols-2
        gap-4
        md:gap-4
        lg:gap-8
        h-full
      "
    >
      <Item
        v-for="item in items"
        :key="item.id"
        :personaje="item"
        class=""
      ></Item>
    </div>
  </div>
</template>

<script>
import Item from "../components/Item";
export default {
  name: "Listado",
  data() {
    return {
      cargando: false,
      error: false,
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  components: { Item },
  methods: {
    getData() {
      this.cargando = true;
      let local = this;
      let config = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
          "Access-Control-Allow-Origin": "*",
        },
      };
      fetch(this.$store.state.getData + "/1,2,3,4,5,6", config)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          local.cargando = false;
          local.items = data;
        })
        .catch(function () {
          local.error = true;
        });
    },
  },
};
</script>

<style>
</style>