<template>
  <button
    @click="switchMusic"
    class="p-0 w-12 h-12 z-10 fixed bottom-5 right-5 bg-pink-300 bg-opacity-100 rounded-full hover:bg-opacity-75 hover:cursor active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
  >
    <MusicalNoteIcon
      v-if="isMusicPlaying"
      class="text-white w-6 h-6 inline-block "
    />
    <PauseIcon
      v-else
      class="text-white w-6 h-6 inline-block "
    />
  </button>
</template>

<script
  setup
  lang="ts"
>

import { MusicalNoteIcon, PauseIcon } from '@heroicons/vue/20/solid'

const isMusicPlaying = ref(false)
let audio: HTMLAudioElement

const switchMusic = () => {
  if (isMusicPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }
  isMusicPlaying.value = !isMusicPlaying.value
}

onMounted(() => {
  audio = new Audio('/audio/music.mp3')
  audio.loop = true
  audio.play().then(() => {
    isMusicPlaying.value = true
  }).catch((error) => {
    console.error('Failed to play audio:', error)
  })
})

</script>

<style scoped></style>