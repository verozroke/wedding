<template>
  <div
    id="Form"
    class="relative isolate py-10"
  >
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-5xl font-bold tracking-tight text-pink-300 font-great-vibes tracking-wide sm:text-4xl">Хабар
        жіберу</h2>
    </div>
    <form
      action="#"
      method="POST"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-black"
          >Cіздің ФИО</label>
          <div class="mt-2.5">
            <input
              v-model="name"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              placeholder="Аты-жөніңізді жазыңыз"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
          </div>
        </div>
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">Тойға қатысуыңызды
            растауыңызды сұраймыз!</legend>
          <div class="mt-6 space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="is-going"
                name="is-going"
                type="radio"
                v-model="isGoing"
                value="Иә, Келемін"
                class="h-4 w-4 border-gray-300 text-pink-300 focus:ring-pink-200"
              >
              <label
                for="is-going"
                class="block text-sm font-medium leading-6 text-gray-900"
              >Иә, Келемін</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="is-going"
                name="is-going"
                type="radio"
                v-model="isGoing"
                value="Жоқ, келе алмаймын"
                class="h-4 w-4 border-gray-300 text-pink-300 focus:ring-pink-200"
              >
              <label
                for="is-going"
                class="block text-sm font-medium leading-6 text-gray-900"
              >Жоқ, келе алмаймын</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">Тойға кіммен келесіз?</legend>
          <div class="mt-6 space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="is-alone"
                name="is-alone"
                type="radio"
                v-model="isAlone"
                value="Жалғыз өзім"
                class="h-4 w-4 border-gray-300 text-pink-300 focus:ring-pink-200"
              >
              <label
                for="is-alone"
                class="block text-sm font-medium leading-6 text-gray-900"
              >Жалғыз өзім</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="is-alone"
                name="is-alone"
                type="radio"
                v-model="isAlone"
                value="Жұбайымен / Жолдасымен"
                class="h-4 w-4 border-gray-300 text-pink-300 focus:ring-pink-200"
              >
              <label
                for="is-alone"
                class="block text-sm font-medium leading-6 text-gray-900"
              >Жұбайымен / Жолдасымен</label>
            </div>
          </div>
        </fieldset>

      </div>
      <div class="mt-10">
        <button
          @click="sendToSheets"
          class="gap-2 items-center font-semibold leading-6 w-full text-sm flex justify-center rounded-md border border-transparent bg-pink-300 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >Хабар жіберу
          <PhoneXMarkIcon class="h-4 w-4" />
        </button>
      </div>
    </form>
  </div>

</template>

<script
  setup
  lang="ts"
>
import { PhoneXMarkIcon } from '@heroicons/vue/20/solid'
import axios from 'axios';

const name = ref('')
const isGoing = ref('')
const isAlone = ref('')

const clear = () => {
  name.value = ''
  isGoing.value = ''
  isAlone.value = ''
}

const sendToSheets = async (e: any) => {
  e.preventDefault()
  if (!name.value || !isGoing.value || !isAlone.value) {
    alert('Поля не должны быть пустыми.')
    return
  }

  try {
    const { data } = await axios.postForm('https://script.google.com/macros/s/AKfycby1Qa-SvFZqbGt8n_-_y0yOh7btv1AtfVGud-QNkNdm4gEq5FoYMorwvCIXm52dvyIF7g/exec', {
      fullName: name.value,
      isGoing: isGoing.value,
      isAlone: isAlone.value,
    })

    // on success
    alert(data)
    clear()
  } catch (error: any) {
    alert(error || error.message || 'Произошла ошибка')
  }

}


</script>

<style scoped></style>