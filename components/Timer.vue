<template>
  <div class="timer">
    <div class="timer__box ">
      <div class="timer__digit font-great-vibes">{{ displayDays }}</div>
      <div class="timer__title">күн</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit font-great-vibes">{{ displayHours }}</div>
      <div class="timer__title">сағ</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit font-great-vibes">{{ displayMinutes }}</div>
      <div class="timer__title">мин</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit font-great-vibes">{{ displaySeconds }}</div>
      <div class="timer__title">сек</div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { computed, onMounted, ref } from 'vue';




const displayDays = ref<string | number>('')
const displayHours = ref<string | number>('')
const displayMinutes = ref<string | number>('')
const displaySeconds = ref<string | number>('')

const _seconds = computed(() => 1000)
const _minutes = computed(() => _seconds.value * 60)
const _hours = computed(() => _minutes.value * 60)
const _days = computed(() => _hours.value * 24)

const showRemaining = () => {
  const timer = setInterval(() => {
    const now = new Date()
    const end = new Date(2024, 8, 5, 16, 0)
    const distance = end.getTime() - now.getTime()

    if (distance < 0) {
      clearInterval(timer)
      return
    }

    const days = Math.floor(distance / _days.value)

    const hours = Math.floor((distance % _days.value) / _hours.value)
    const minutes = Math.floor((distance % _hours.value) / _minutes.value)
    const seconds = Math.floor((distance % _minutes.value) / _seconds.value)
    displayMinutes.value = minutes < 10 ? '0' + minutes : minutes
    displaySeconds.value = seconds < 10 ? '0' + seconds : seconds
    displayHours.value = hours < 10 ? '0' + hours : hours
    displayDays.value = days < 10 ? '0' + days : days
  }, 1000)
}

onMounted(() => {
  showRemaining()
})
</script>

<style
  lang="scss"
  scoped
>
.timer {
  display: flex;
  width: fit-content;
  justify-content: center;
  gap: 2em;

  &__box {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  &__title {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: black;
    letter-spacing: 1px;
  }

  &__digit {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    letter-spacing: 2px;
    font-weight: 900;
    text-align: center;
    color: black;
    border-radius: 0.2em;
    border: 2px solid black;
    height: 150px;
    width: 125px;
  }
}

@media only screen and (max-width: 674px) {
  .timer {
    &__title {
      font-size: 14px;
    }

    &__digit {
      font-size: 32px;
      width: 75px;
      height: 100px;
    }
  }
}

@media only screen and (max-width: 400px) {
  .timer {
    gap: 1em;

    &__title {
      font-size: 12px;
    }

    &__digit {
      font-size: 20px;
      width: 50px;
      height: 75px;
    }
  }
}
</style>
