<template>
  <div id="app">
    <div class="Placeholder">
      <h1 class="is-size-2">JavaScript Conference Armenia 2019</h1>
      <h2 class="is-size-3">#jsconfam19</h2>
    </div>

    <!-- Uncomment when implemented -->
    <!-- <Header /> -->
    <!-- <Intro /> -->
    <!-- <About /> -->
    <!-- <Speakers /> -->
    <!-- <Sponsors /> -->
    <!-- <Location /> -->
    <!-- <Team /> -->
    <!-- <Footer /> -->
    <!-- <Background /> -->
  </div>
</template>

<script>
import About from './About/About'
import Background from './Background/Background'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import Location from './Location/Location'
import Speakers from './Speakers/Speakers'
import Sponsors from './Sponsors/Sponsors'
import Team from './Team/Team'

export default {
  name: 'app',
  components: {
    /* eslint-disable */
    About,
    Background,
    Footer,
    Header,
    Intro,
    Location,
    Speakers,
    Sponsors,
    Team,
    /* eslint-enable */
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.Placeholder {
  margin-top: 60px;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
