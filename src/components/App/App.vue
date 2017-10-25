<script>

import Links from '../Links/Links'
import Staff from '../Staff/Staff'
import AchievementCalendar from '../AchievementCalendar/AchievementCalendar'


export default {
  name: 'app',
  components : {
      Links,
      Staff,
      AchievementCalendar
  }

}
</script>

<template>

    <div>

        <links/>
        <router-view></router-view>

    </div>

</template>

<style lang="scss">

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>