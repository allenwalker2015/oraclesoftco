<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 my-20 h-full">
    <div class="md:grid md:grid-cols-3 md:gap-6" v-if="!enviando && !success && !error">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Formulario
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Todos los campos en el formulario son requeridos.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <Form @submit="onSubmit" v-slot="{ errors }">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      :class="{ 'is-invalid': errors.name }"
                      class="
                        focus:ring-indigo-500 focus:border-indigo-500
                        flex-1
                        block
                        w-full
                        rounded-md
                        sm:text-sm
                        border-gray-300
                      "
                    >
                    </Field>
                  </div>
                  <span class="text-red-500">{{ errors.name }}</span>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Telefono
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      rules="required|tel"
                      :class="{ 'is-invalid': errors.phone }"
                      class="
                        focus:ring-indigo-500 focus:border-indigo-500
                        flex-1
                        block
                        w-full
                        rounded-md
                        sm:text-sm
                        border-gray-300
                      "
                    >
                    </Field>
                  </div>
                  <span class="text-red-500">{{ errors.phone }}</span>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      rules="required|email"
                      :class="{ 'is-invalid': errors.email }"
                      class="
                        focus:ring-indigo-500 focus:border-indigo-500
                        flex-1
                        block
                        w-full
                        rounded-md
                        sm:text-sm
                        border-gray-300
                      "
                    >
                    </Field>
                  </div>
                  <span class="text-red-500">{{ errors.email }}</span>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <div
      class="
        max-w-7xl
        mx-auto
        py-6
        sm:px-6
        lg:px-8
        align-self-center
        justify-justify-self-center
        items-center
        flex flex-col
        h-full
      "
      v-if="!enviando && success"
    >
     <img src="../assets/ok_icon.svg" class="w-100 h-100" />
      <p class="text-lg antialiased font-bold text-blue">Se ha enviado correctamente</p>
    </div>
    <div
      class="
        max-w-7xl
        mx-auto
        py-6
        sm:px-6
        lg:px-8
        align-self-center
        justify-justify-self-center
        items-center
        flex flex-col
        h-full
      "
      v-if="error"
    >
    <img src="../assets/error_icon.svg" class="w-100 h-100" />
      <p class="text-lg antialiased font-bold">
        Ha ocurrido un error, intenta enviar el formulario nuevamente
      </p>
    </div>
    <div
      v-if="enviando"
      class="
        max-w-7xl
        mx-auto
        py-6
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

      <p class="text-lg antialiased font-bold">Enviando...</p>
    </div>
  </div>
</template>

<script>
import { Field, Form, defineRule } from "vee-validate";
import { tel } from "../validaciones.js";
import { required, email, alpha_spaces } from "@vee-validate/rules";
defineRule("required", required);
defineRule("email", email);
defineRule("tel", tel);
defineRule("alpha_spaces", alpha_spaces);
export default {
  name: "Formulario",
  components: {
    Field,
    Form,
  },
  data() {
    return {
      enviando: false,
      error: false,
      success: false,
    };
  },
  methods: {
    onSubmit(values) {
      this.enviando = true;
      let local = this;
      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        },
        body: JSON.stringify(values),
      };
      fetch(this.$store.state.saveFormulario, config)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          local.enviando = false;
          local.success = true;
        })
        .catch(function () {
          local.enviando = false;
          local.error = true;
        });
    },
  },
};
</script>

<style>
</style>