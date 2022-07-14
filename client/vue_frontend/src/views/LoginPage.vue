<template>
  <div
    className=" bg-lime-100 h-screen w-screen flex items-center justify-start"
  >
    <div className="flex flex-col items-center bg-gray-400 h-screen w-6/12 ">
      <div
        className="bg-orange-200 flex flex-col items-start h-full w-11/12
      "
      >
        <div className="mb-16 mt-36 text-cyan-900 ">
          <h1 className="text-7xl font-extrabold">WELCOME TO MY SITE!!</h1>
          <div class="text-5xl mt-5 ml-5">Hello World</div>
        </div>
        <form
          action="submit"
          className="bg-teal-100 w-full flex justify-center"
        >
          <div className="w-full flex flex-col justify-start ml-5">
            <input
              type="text"
              className="rounded-md w-7/12 h-10 text-2xl placeholder:italic placeholder:text-zinc-400 indent-5 shadow-md align-middle"
              placeholder="email"
            />
            <input
              type="text"
              className="rounded-md md w-7/12  h-10 text-2xl placeholder:italic placeholder:text-zinc-400 indent-5 mt-10 shadow-md"
              placeholder="password"
            />
            <div className="form-check flex flex-row mt-4">
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
              />
              <label className=" text-lg">Remember me</label>
              <label htmlFor="" className="ml-28 text-lg">
                Forgot Password?
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="mb-16 text-lg">
        <h2>all rights reserved :)</h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
