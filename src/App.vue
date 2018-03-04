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
    const store = this.$store
    // for test
    if (process.env.NODE_ENV === 'development') {
      return request.post('/v1/login', {})
        .then((response) => {
          if (response.data.token) {
            this.$store.commit('setUserInfo', response.data.token)
          } else {
            this.$store.commit('setUserInfo', '')
          }
        })
    } else {
      window.extAsyncInit = function() {
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
          .then(function (response) {
            if (response.data.token) {
              store.commit('setUserInfo', response.data.token)
            } else {
              store.commit('setUserInfo', '')
            }
          })
      }
    }
  },
}
</script>

<style>
</style>
