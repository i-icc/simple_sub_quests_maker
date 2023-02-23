<template>
  <router-link
    :to="{ name: 'subquest', params: { id: Math.floor(Math.random() * 219) } }"
    v-slot="{ navigate }"
  >
    <button @click="navigate" role="link">
      <svg>
        <rect x="2" y="2" rx="0" fill="none" width="200" height="50"></rect>
      </svg>
      <span>{{ msg }}</span>
    </button></router-link
  >
</template>

<script>
export default {
  name: "CreateSubQuests",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

button {
  font-size: 1.6rem;
  font-weight: 700;
  font-family: MyFont, sans-serif;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

button {
  font-weight: 700;
  line-height: 54px;

  width: 204px;
  height: 54px;
  padding: 0;

  cursor: pointer;
  text-decoration: none;

  background-color: transparent;
}

button svg {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

button svg rect {
  -webkit-transition: all 400ms ease;
  transition: all 400ms ease;

  stroke: #000;
  stroke-width: 2;
  stroke-dasharray: 200px, 16px;
  stroke-dashoffset: 70px;
}

button:hover svg rect {
  stroke-dashoffset: 284px;
}

button span {
  color: #000;
}
</style>
