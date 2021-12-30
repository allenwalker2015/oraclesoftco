<template>
  <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
    <div class="flex justify-center md:justify-end-mt-16">
      <img
        class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        :src="personaje.image"
      />
    </div>
    <div>
      <h2 class="text-gray-800 text-xl font-semibold">
        {{ personaje.name }}
      </h2>
      <p class="mt-2 text-gray-600"><span class="text-black mr-4">Estado</span>{{ personaje.status }}</p>
      <p class="mt-2 text-gray-600"><span class="text-black mr-4">Ultima ubicación</span>{{ personaje.location.name }}</p>
      <p class="mt-2 text-gray-600"><span class="text-black mr-4">Origen</span>{{ personaje.origin.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    personaje: Object,
  },
};
</script>