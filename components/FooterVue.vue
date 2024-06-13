<template>
  <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center flex-wrap gap-6 text-black font-medium">
      <a
        v-for="item in navigation"
        :key="item.name"
        class="text-sm font-medium leading-6 text-black"
        @click="scrollDown(item.href)"
      >{{ item.name }}</a>
    </nav>

    <p class="text-center text-black font-medium">&copy; Гульмира Қыз ұзату. Все права защищены.</p>
  </footer>
</template>

<script
  setup
  lang="ts"
>



function scrollDown(blockID: string) {
  const $block = document.getElementById(blockID) ?? document.createElement('div')
  $block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const navigation = [
  { name: 'Басты', href: 'Hero' },
  { name: 'Күту', href: 'Info' },
  { name: 'Мекен-жайы', href: 'Location' },
  { name: 'Таймер', href: 'Timer' },
  { name: 'Той йелері', href: 'Owner' },
]
</script>

<style scoped></style>