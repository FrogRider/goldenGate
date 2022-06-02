<template>
  <div class="header">
    <div class="header__logo"></div>
    <div class="header__menu" :class="{ header__menu_active: showMenu }">
      <div class="header__mainMenu">
        <div class="header__menuItem">Grow your business</div>
        <div class="header__menuItem">About us</div>
        <div class="header__menuItem">Contacts</div>
        <div class="header__menuItem">Eng</div>
        <div class="header__menuItem">
          <ThemeButton />
        </div>
      </div>
      <div class="header__mobileSocials">
        <div class="header__mobileSocial">instagram</div>
        <div class="header__mobileSocial">facebook</div>
      </div>
    </div>
    <div
      class="header__mobileMenuToggler"
      @click="toggleMenu()"
      :class="{ header__mobileMenuToggler_close: showMenu }"
    ></div>
  </div>
</template>

<script setup>
import ThemeButton from "./ThemeButton.vue";
import { ref } from "vue";

let showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  console.log(showMenu.value);
};
</script>

<style lang="scss">
@import "../globalStyles/icons.scss";

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--background-color-primary);
  display: flex;
  justify-content: space-between;
  padding: 10px 104px;

  &__close {
    display: none;
  }

  &__logo {
    height: 60px;
    width: 48px;
    display: block;
    background-image: var(--logo-icon);
    // background-image: $logoWhite;
    background-position: 0 0;
    background-repeat: no-repeat;
  }

  &__mainMenu {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__menuItem {
    height: 100%;
    display: flex;
    align-items: center;

    & + & {
      margin-left: 48px;
    }
  }

  &__mobileSocials {
    display: none;
  }

  &__mobileMenuToggler {
    width: 70px;
    aspect-ratio: 1/1;
    background-image: var(--mobile-devices-menu-button);
    background-position: 0 0;
    background-repeat: no-repeat;
    display: none;
    z-index: 10;

    &_close {
      background-image: var(--cross-icon);
    }
  }

  @media only screen and (max-width: $tabletBreakpoint) {
    padding: 44px 62px 44px;
    &__menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: fixed;
      width: 100vw;
      height: 100vh;
      right: 0;
      top: 0;
      padding: 19vh 62px 0;
      background: var(--background-color-secondary);
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.5s linear;

      &_active {
        transform: translateX(0);
      }
    }

    &__mainMenu {
      width: 100%;
      height: auto;
      display: block;
    }

    &__menuItem {
      height: auto;
      font-size: 2rem;
      @include mk_90;

      & + & {
        margin: 48px 0 0 0;
      }
    }

    &__mobileSocials {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 14vh;
    }

    &__mobileSocial {
      text-transform: uppercase;
      font-size: 1.5rem;
      @include mk_90;

      & + & {
        margin-top: 48px;
      }
    }

    &__mobileMenuToggler {
      display: block;
    }
  }
}
</style>
