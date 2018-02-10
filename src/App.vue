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
            .getContext(process.env.FB_APP_ID, (context) => {
              console.log(context)

              return resolve(context)
            }, (errorCode, errorMessage) => {
              console.error(errorCode, errorMessage)

              return reject({errorCode, errorMessage})
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
