<template>
  <ul class="text-right p-4 font-semibold bg-gray-100 pr-4">
      <li class="inline mx-2 text-blue-600 hover:text-blue-400 cursor-pointer" v-for="link in links" v-bind:key="link.url" @click="$router.push( link.url)">{{link.text}}</li>
  </ul>
</template>

<script>
export default {
 name: 'Navbar',
 props: {
    links: Array
 },
}
</script>

<style>

</style>