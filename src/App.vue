<template>
  <div id="app">
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
</style>
