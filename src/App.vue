<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home,
  },
  beforeCreate() {
    window.extAsyncInit = () => {
      return new Promise((resolve, reject) => {
          console.log('getting fb')
          return MessengerExtensions
            .getContext($scope.fbAppId, (data) => {
              console.log(data)
              return resolve(data)
            }, (error) => {
              console.error(error)
              return reject(error)
            })
        })
        .then((context) => {
          
        })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
