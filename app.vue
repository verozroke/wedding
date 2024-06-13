<template>
  <div class="bg-slate-50 relative">
    <MusicFAB />
    <div
      style="height: calc(100vh);"
      class="absolute t-0 w-screen bg-black"
    >
      <div class="relative w-full h-full">
        <div class="absolute bg-black inset-0 bg-opacity-55"></div>
        <img
          src="~/assets/images/i.webp"
          alt=""
          class="object-cover object-center h-full w-full"
        >
      </div>
    </div>
    <div
      style="height: calc(100vh - 144px); top: calc(100vh)"
      class="absolute w-screen bg-black"
    >
      <div class="relative w-full h-full">
        <div class="absolute bg-black inset-0 bg-opacity-55"></div>
        <img
          src="https://yandex-images.clstorage.net/Q9SC73h71/ca9be6h9cBg/bof6ZQcfoAm7SmeALbklm58bfmTRn_dLUPAsWeLSSxYuTn2ZbbTbd7rv0aUYTB_tMsFsk4cJeM5iJ3MzYXBWMHiXr_TQjmAI_lilEys6IZ7MHC6hgRm2SoazLsB4jELLINBnE3F-BPG77cXxSkqIvr3YqtCeEeRbI7g5cvwjgGOuRzysD0nmRPtTYkDmeOiXAtq2aUiQ7oeYbvuFc4lGj6qZKRoz-EJ3Oq3ANYHfRrK0XbSW0Bil06d2eXb3IoznoEH3rQmFo4E2kONDqvBhW42ZPmkE36kNkqx7izNEi4Xj1SqVfjHJ939gTvLJGs-2OdlwU5ncrdfp_7lxeayMIe6Ps6KFT-hIORorwW_zoFTEE7XlwhYjCxPk9491REsKbZkgVTK6TXV_Jw_yQtVD8_tRexMaFWzTJjN6snvmzSkoSr7kTsTgSj_ba8zl9O7dRhGybIeZZola7fdE84DHBykZ4xl0vo-_eaaH-EVQyfE0mjnSFhstnuX-OTbzbwLnI84_6UhNKoszkSzFL_uh0cjS-6LEGK0MH6a7w_TGSE-pF-kU8_-G9vqlyDrNUMl7f1u0mB6WpNPn9PHz9CPCK2iD9GBDgS-M-53jgC0zrhGA23VkgJArhBNjekG6iQJOIRon2XL2h7d_YED9QtjA_fpZO5wbEOcbr_L1_HyrTW-ngjqrA0gmijnTbcQseGSQBhn6bUsXZQHXZLqC-UpMBeGeIh97PQ57_i8Mdg1ZhvLw3_mY2l7mW674PL36aw2hZQE3YMmIoEU3EifM4nSnXMkSN2sJmW4KEG5zzbrPgY2qV-2auvgG_Hdkx7PC2Y9-MJa4G1ZQIdtqdnr9v69J6OjIt6TAia6LP9TgRC-7rtuFFX0syxuhAZNrME5-TIGO4lHolTYyRXP9rYg8jZgM8HZTfFlZFuLeqHP0dTZswq7uBjmsgMeniT9YKQoiPOFQQJz6r08d4oVY5PuO-8"
          alt=""
          class="object-cover object-center h-full w-full"
        >
      </div>
    </div>
    <div class="flex flex-col max-w-[1400px] px-5 mx-auto min-h-screen">
      <HeaderVue />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <FooterVue />
    </div>
  </div>
</template>
