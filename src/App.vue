<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useBaseStore from "@/store/BaseStore";
import Header from "./components/Header.vue";

const baseStore = useBaseStore();
const { showSideMenu } = storeToRefs(baseStore);
console.log(showSideMenu);
console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
</script>

<style lang="scss">
@import "./assets/main.css";
@import "./globalStyles/icons.scss";

:root {
  --header-height: 80px;
  --background-color-primary: #050505;
  --background-color-inverted: #fff;
  --background-color-secondary: #0c0c0c;
  --text-primary-color: #fff;
  --cross-icon: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M51.3038 14.583L34.9997 30.8872L18.6955 14.583L14.583 18.6955L30.8872 34.9997L14.583 51.3038L18.6955 55.4163L34.9997 39.1122L51.3038 55.4163L55.4163 51.3038L39.1122 34.9997L55.4163 18.6955L51.3038 14.583Z' fill='white'/%3E%3C/svg%3E%0A");
  --mobile-devices-menu-button: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M61.25 46.6663H8.75V40.833H61.25V46.6663ZM61.25 29.1663H8.75V23.333H61.25V29.1663Z' fill='white'/%3E%3C/svg%3E%0A");
  --logo-icon: url("data:image/svg+xml,%3Csvg width='46' height='60' viewBox='0 0 46 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.8457 25.4414H39.728L37.2402 29.5396H41.3579L43.8457 25.4414Z' fill='white'/%3E%3Cpath d='M38.5369 25.4414H34.4097L31.9219 29.5396H36.0491L38.5369 25.4414Z' fill='white'/%3E%3Cpath d='M33.2087 25.4414H29.0815L26.5938 29.5396H30.721L33.2087 25.4414Z' fill='white'/%3E%3Cpath d='M18.9687 5.09668H14.851L12.3633 9.19485H16.481L18.9687 5.09668Z' fill='white'/%3E%3Cpath d='M40.2715 5.09668H36.1538L33.666 9.19485H37.7837L40.2715 5.09668Z' fill='white'/%3E%3Cpath d='M45.9997 30.5186H41.8725L39.3848 34.607H43.512L45.9997 30.5186Z' fill='white'/%3E%3Cpath d='M15.8406 10.1924H11.7134L9.22559 14.2906H13.3528L15.8406 10.1924Z' fill='white'/%3E%3Cpath d='M12.8113 15.2686H8.68406L6.19629 19.3667H10.3235L12.8113 15.2686Z' fill='white'/%3E%3Cpath d='M9.72168 20.3457H5.60398L3.11621 24.4439H7.2339L9.72168 20.3457Z' fill='white'/%3E%3Cpath d='M6.61499 25.4316H2.48777L0 29.5201H4.12722L6.61499 25.4316Z' fill='white'/%3E%3Cpath d='M8.92185 30.5088H4.80417L2.31641 34.607H6.43409L8.92185 30.5088Z' fill='white'/%3E%3Cpath d='M14.2117 30.5088H10.094L7.59668 34.607H11.7239L14.2117 30.5088Z' fill='white'/%3E%3Cpath d='M19.4636 30.5088H15.3364L12.8486 34.607H16.9758L19.4636 30.5088Z' fill='white'/%3E%3Cpath d='M24.7724 30.5088H20.6548L18.167 34.607H22.2847L24.7724 30.5088Z' fill='white'/%3E%3Cpath d='M19.9021 55.9014H15.7749L13.2871 59.9995H17.4143L19.9021 55.9014Z' fill='white'/%3E%3Cpath d='M25.2021 55.9014H21.0845L18.5967 59.9995H22.7144L25.2021 55.9014Z' fill='white'/%3E%3Cpath d='M30.5107 55.9014H26.393L23.9053 59.9995H28.023L30.5107 55.9014Z' fill='white'/%3E%3Cpath d='M22.2754 0H18.1577L15.6699 4.09817H19.7876L22.2754 0Z' fill='white'/%3E%3Cpath d='M21.6465 35.5859H17.5288L15.041 39.6841H19.1587L21.6465 35.5859Z' fill='white'/%3E%3Cpath d='M18.5576 40.6719H14.4399L11.9521 44.7604H16.0698L18.5576 40.6719Z' fill='white'/%3E%3Cpath d='M15.5086 45.748H11.3813L8.89355 49.8462H13.0208L15.5086 45.748Z' fill='white'/%3E%3Cpath d='M12.4961 50.835H8.3784L5.89062 54.9331H10.0083L12.4961 50.835Z' fill='white'/%3E%3Cpath d='M14.574 55.9014H10.4468L7.95898 59.9995H12.0862L14.574 55.9014Z' fill='white'/%3E%3Cpath d='M27.8796 25.4316H23.7524L21.2646 29.5201H25.3823L27.8796 25.4316Z' fill='white'/%3E%3Cpath d='M30.9206 20.3945H26.7934L24.3057 24.483H28.4329L30.9206 20.3945Z' fill='white'/%3E%3Cpath d='M34.114 15.2686H29.9868L27.499 19.3667H31.6262L34.114 15.2686Z' fill='white'/%3E%3Cpath d='M27.4607 0H23.3335L20.8457 4.09817H24.9729L27.4607 0Z' fill='white'/%3E%3Cpath d='M32.7224 0H28.5952L26.1074 4.09817H30.2346L32.7224 0Z' fill='white'/%3E%3Cpath d='M38.031 0.0195312H33.9038L31.416 4.11771H35.5432L38.031 0.0195312Z' fill='white'/%3E%3Cpath d='M33.571 50.8936H29.4438L26.9561 54.982H31.0833L33.571 50.8936Z' fill='white'/%3E%3Cpath d='M36.7158 45.8252H32.5981L30.1104 49.9234H34.228L36.7158 45.8252Z' fill='white'/%3E%3Cpath d='M39.7195 40.7295H35.6018L33.1045 44.818H37.2317L39.7195 40.7295Z' fill='white'/%3E%3Cpath d='M28.7576 15.2686H24.6303L22.1426 19.3667H26.2698L28.7576 15.2686Z' fill='white'/%3E%3Cpath d='M23.457 15.2686H19.3393L16.8516 19.3667H20.9692L23.457 15.2686Z' fill='white'/%3E%3Cpath d='M34.457 40.6914H30.3393L27.8516 44.7799H31.9692L34.457 40.6914Z' fill='white'/%3E%3Cpath d='M29.1189 40.6914H25.0012L22.5039 44.7799H26.6311L29.1189 40.6914Z' fill='white'/%3E%3C/svg%3E%0A");
}

:root.light-theme {
  --background-color-primary: #fff;
  --background-color-inverted: #050505;
  --background-color-secondary: #f7f7f7;
  --text-primary-color: #000;
  --cross-icon: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M51.3038 14.583L34.9997 30.8872L18.6955 14.583L14.583 18.6955L30.8872 34.9997L14.583 51.3038L18.6955 55.4163L34.9997 39.1122L51.3038 55.4163L55.4163 51.3038L39.1122 34.9997L55.4163 18.6955L51.3038 14.583Z' fill='black'/%3E%3C/svg%3E%0A");
  --mobile-devices-menu-button: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M61.25 46.6663H8.75V40.833H61.25V46.6663ZM61.25 29.1663H8.75V23.333H61.25V29.1663Z' fill='black'/%3E%3C/svg%3E%0A");
  --logo-icon: url("data:image/svg+xml,%3Csvg width='46' height='60' viewBox='0 0 46 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.8457 25.4414H39.728L37.2402 29.5396H41.3579L43.8457 25.4414Z' fill='black'/%3E%3Cpath d='M38.5369 25.4414H34.4097L31.9219 29.5396H36.0491L38.5369 25.4414Z' fill='black'/%3E%3Cpath d='M33.2087 25.4414H29.0815L26.5938 29.5396H30.721L33.2087 25.4414Z' fill='black'/%3E%3Cpath d='M18.9687 5.09668H14.851L12.3633 9.19485H16.481L18.9687 5.09668Z' fill='black'/%3E%3Cpath d='M40.2715 5.09668H36.1538L33.666 9.19485H37.7837L40.2715 5.09668Z' fill='black'/%3E%3Cpath d='M45.9997 30.5186H41.8725L39.3848 34.607H43.512L45.9997 30.5186Z' fill='black'/%3E%3Cpath d='M15.8406 10.1924H11.7134L9.22559 14.2906H13.3528L15.8406 10.1924Z' fill='black'/%3E%3Cpath d='M12.8113 15.2686H8.68406L6.19629 19.3667H10.3235L12.8113 15.2686Z' fill='black'/%3E%3Cpath d='M9.72168 20.3457H5.60398L3.11621 24.4439H7.2339L9.72168 20.3457Z' fill='black'/%3E%3Cpath d='M6.61499 25.4316H2.48777L0 29.5201H4.12722L6.61499 25.4316Z' fill='black'/%3E%3Cpath d='M8.92185 30.5088H4.80417L2.31641 34.607H6.43409L8.92185 30.5088Z' fill='black'/%3E%3Cpath d='M14.2117 30.5088H10.094L7.59668 34.607H11.7239L14.2117 30.5088Z' fill='black'/%3E%3Cpath d='M19.4636 30.5088H15.3364L12.8486 34.607H16.9758L19.4636 30.5088Z' fill='black'/%3E%3Cpath d='M24.7724 30.5088H20.6548L18.167 34.607H22.2847L24.7724 30.5088Z' fill='black'/%3E%3Cpath d='M19.9021 55.9014H15.7749L13.2871 59.9995H17.4143L19.9021 55.9014Z' fill='black'/%3E%3Cpath d='M25.2021 55.9014H21.0845L18.5967 59.9995H22.7144L25.2021 55.9014Z' fill='black'/%3E%3Cpath d='M30.5107 55.9014H26.393L23.9053 59.9995H28.023L30.5107 55.9014Z' fill='black'/%3E%3Cpath d='M22.2754 0H18.1577L15.6699 4.09817H19.7876L22.2754 0Z' fill='black'/%3E%3Cpath d='M21.6465 35.5859H17.5288L15.041 39.6841H19.1587L21.6465 35.5859Z' fill='black'/%3E%3Cpath d='M18.5576 40.6719H14.4399L11.9521 44.7604H16.0698L18.5576 40.6719Z' fill='black'/%3E%3Cpath d='M15.5086 45.748H11.3813L8.89355 49.8462H13.0208L15.5086 45.748Z' fill='black'/%3E%3Cpath d='M12.4961 50.835H8.3784L5.89062 54.9331H10.0083L12.4961 50.835Z' fill='black'/%3E%3Cpath d='M14.574 55.9014H10.4468L7.95898 59.9995H12.0862L14.574 55.9014Z' fill='black'/%3E%3Cpath d='M27.8796 25.4316H23.7524L21.2646 29.5201H25.3823L27.8796 25.4316Z' fill='black'/%3E%3Cpath d='M30.9206 20.3945H26.7934L24.3057 24.483H28.4329L30.9206 20.3945Z' fill='black'/%3E%3Cpath d='M34.114 15.2686H29.9868L27.499 19.3667H31.6262L34.114 15.2686Z' fill='black'/%3E%3Cpath d='M27.4607 0H23.3335L20.8457 4.09817H24.9729L27.4607 0Z' fill='black'/%3E%3Cpath d='M32.7224 0H28.5952L26.1074 4.09817H30.2346L32.7224 0Z' fill='black'/%3E%3Cpath d='M38.031 0.0195312H33.9038L31.416 4.11771H35.5432L38.031 0.0195312Z' fill='black'/%3E%3Cpath d='M33.571 50.8936H29.4438L26.9561 54.982H31.0833L33.571 50.8936Z' fill='black'/%3E%3Cpath d='M36.7158 45.8252H32.5981L30.1104 49.9234H34.228L36.7158 45.8252Z' fill='black'/%3E%3Cpath d='M39.7195 40.7295H35.6018L33.1045 44.818H37.2317L39.7195 40.7295Z' fill='black'/%3E%3Cpath d='M28.7576 15.2686H24.6303L22.1426 19.3667H26.2698L28.7576 15.2686Z' fill='black'/%3E%3Cpath d='M23.457 15.2686H19.3393L16.8516 19.3667H20.9692L23.457 15.2686Z' fill='black'/%3E%3Cpath d='M34.457 40.6914H30.3393L27.8516 44.7799H31.9692L34.457 40.6914Z' fill='black'/%3E%3Cpath d='M29.1189 40.6914H25.0012L22.5039 44.7799H26.6311L29.1189 40.6914Z' fill='black'/%3E%3C/svg%3E%0A");
}

.container {
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
  min-height: 100vh;
  position: relative;
  margin-top: var(--header-height);
}

.section {
  width: 100vw;
  min-height: calc(100vh - var(--header-height));
}

@media only screen and (max-width: $tabletBreakpoint) {
  :root {
    --header-height: 158px;
  }
}
</style>
