<template>
  <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link>
  </nav> 
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
}

nav a {
  font-weight: bold;
  color: #5a5a5a;
}

nav a.router-link-exact-active {
  color: #7293d9;
}
</style>
