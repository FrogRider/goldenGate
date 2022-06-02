<template>
  <div class="themeToggler">
    <input
      type="checkbox"
      id="theme"
      @change="toggleTheme"
      :checked="isThemeDark"
    />
    <label
      for="theme"
      class="themeToggler__box"
      :class="{ themeToggler__box_toggled: theme === 'light-theme' }"
    >
      <div class="themeToggler__indicator"></div>
    </label>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { onMounted, computed, ref } from "vue";

let theme = ref("");

const isThemeDark = computed(() => {
  return localStorage.getItem("user-theme") === "dark-theme";
});

const getTheme = computed(() => {
  return localStorage.getItem("user-theme");
});

const setTheme = (themeToSet) => {
  theme.value = themeToSet;
  localStorage.setItem("user-theme", themeToSet);
  document.documentElement.className = themeToSet;
};

onMounted(() => {
  const initUserTheme = getTheme.value || getMediaPreference();
  setTheme(initUserTheme);
});

const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return hasDarkPreference ? "dark-theme" : "light-theme";
};
</script>

<style lang="scss">
.themeToggler {
  display: grid;
  place-items: center;

  input[type="checkbox"] {
    display: none;
  }

  &__box {
    position: relative;
    display: inline-block;
    flex-direction: row;
    box-shadow: 0px 0px 0px 1px var(--background-color-primary),
      0px 0px 0px 2px var(--background-color-inverted);
    width: 38px;
    height: 20px;
    border-radius: $mainBorderRadius;
    transition: padding-left 0.2s linear;
    &_toggled {
      // flex-direction: row-reverse;
      padding-left: 18px;
    }
  }

  &__indicator {
    height: 100%;
    aspect-ratio: 1/1;
    background-color: var(--text-primary-color);
    border-radius: $mainBorderRadius;
  }
  // &__box {
  //   position: relative;
  //   display: inline-flex;
  //   flex-direction: row;
  //   box-shadow: 0px 0px 0px 1px var(--background-color-primary),
  //     0px 0px 0px 2px var(--background-color-inverted);
  //   width: 38px;
  //   height: 20px;
  //   border-radius: $mainBorderRadius;
  //   transition: flex-direction 1s linear;
  //   &_toggled {
  //     flex-direction: row-reverse;
  //   }
  // }

  // &__indicator {
  //   height: 100%;
  //   aspect-ratio: 1/1;
  //   background-color: var(--text-primary-color);
  //   border-radius: $mainBorderRadius;
  // }

  @media only screen and (max-width: $tabletBreakpoint) {
    &__box {
      width: 76px;
      height: 40px;
      box-shadow: 0px 0px 0px 2px var(--background-color-primary),
        0px 0px 0px 4px var(--background-color-inverted);
      &_toggled {
        padding-left: 36px;
      }
    }
  }
}
</style>
