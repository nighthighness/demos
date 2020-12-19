<template>
  <div>
    <div class="tabs">
      
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home">
        </use>
        </svg>
        Home
      </router-link>

      <router-link to="/user">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu">
        </use>
        </svg>
        User
      </router-link>
      <router-link to="/about">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangpinliebiao">
        </use>
        </svg>
        About
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .tabs{
    width: 100%;
    position: fixed;
    bottom: 10px;
    display: flex;
    align-items: center;
  }
  .tabs a{
    width: 33%;
  }
</style>