<template>
  <nav>
    <router-link to="/simple_sub_quests_maker">home</router-link> |
    <router-link to="/simple_sub_quests_maker/about">about</router-link>
  </nav> 
  <router-view />
</template>

<style>
@font-face {
	font-family: 'MyFont';
	src: url(@/assets/genkai-mincho.ttf);
}

#app {
  font-family: MyFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

html, body{
  height: 90%;
}
</style>
