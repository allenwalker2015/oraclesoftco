<template>
  <div class="container w-80 mx-auto my-20 px-6 py-6 shadow rounded-md">

      <h1 class="text-blue-600 font-bold font-sans text-4xl text-center">Login</h1>
      <div class="h-0.5 bg-gray-300 w-36 mx-auto mt-2.5"></div>
    <form action="" method="post">
        <div class="flex flex-col my-5">
            <label class="my-2" for="uname">Username</label>
            <input type="text" id="uname" name="uname" class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-md bg-gray-100 text-blue-500" />
            <label class="my-2" for="psw">Password</label>
            <input type="password" id="psw" name="psw" class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-md bg-gray-100 text-blue-500" />
        </div>
        <div class="text-center mt-3">
            <button class="px-7 py-2 mx-2 font-semibold text-gray-800 bg-gray-100 rounded ">Reset</button>
            <button class="px-7 py-2 mx-2 font-semibold text-white bg-blue-600 rounded ">Submit</button>
        </div>
        
    </form>

  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>