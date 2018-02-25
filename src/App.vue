<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'
import request from '@/utils/request'

export default {
  name: 'App',
  components: {
    Home,
  },
  beforeCreate() {
    window.extAsyncInit = () => {
      return new Promise((resolve, reject) => {
          return MessengerExtensions
            .getContext(process.env.FB_APP_ID, (context) => {
              return resolve(context)
            }, (errorCode, errorMessage) => {
              console.error(errorCode, errorMessage)

              return reject({errorCode, errorMessage})
            })
        })
        .then((context) => {
          console.log(context)

          return request.post('/v1/login', context)
        })
        .then(console.log)
    }
  },
}
</script>

<style>
</style>
