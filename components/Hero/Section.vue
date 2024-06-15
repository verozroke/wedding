<template>
  <div
    id="Hero"
    class="relative screen1 isolate font-formular px-6 lg:px-8"
  >

    <div class="mx-auto flex flex-col screen1 justify-center items-center max-w-2xl ">
      <div class="text-center w-full screen1 flex items-center justify-center flex-col gap-y-6">
        <h1 class="subtitle hidden1  text-9xl  font-great-vibes tracking-wide text-pink-300">
          Гульмира
        </h1>
        <h1 class="subtitle hidden1  text-6xl font-great-vibes tracking-wide text-pink-300">
          Қыз ұзату
        </h1>
        <h1 class="subtitle hidden1  text-5xl  font-bold font-great-vibes tracking-wide text-slate-50">
          05 тамыз 2024
        </h1>
      </div>
    </div>

  </div>
</template>

<script
  setup
  lang="ts"
>

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

setTimeout(() => {
  let hiddenTitleElements = document.querySelectorAll('.subtitle.hidden1')
  let hiddenElements = [...hiddenTitleElements,]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)

</script>

<style scoped>
.screen1 {
  min-height: calc(100vh - 72px);
}

.subtitle.hidden1 {
  opacity: 0;
  transition: all 1s;
  filter: blur(20px);
  transform: translateY(200px);
}

.subtitle.show {
  filter: blur(0);
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>