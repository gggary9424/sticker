<template>
  <div>
    <div> {{ text }} </div>
    <button @click="sendSticker"> Send </button>
  </div>
</template>

<script>
export default {
  name: 'home_page',
  data () {
    return {
      text: 'Click it, bitch !',
    }
  },
  methods: {
    sendSticker() {
      const message = {
        attachment: {
          type: 'image',
          payload: {
            url: 'http://s2.buzzhand.net/uploads/88/5/557156/14252976575990.jpg',
          },
        },
      }

      MessengerExtensions.beginShareFlow((share_response) => {
          if(share_response.is_sent){
            this.text = 'Job job, bitch ~~~~'
          } else {
            this.text = 'You are absoulate bitch!'
          }
        }, 
        (errorCode, errorMessage) => {      
          console.error(errorCode, errorMessage)
        },
        message,
        'current_thread',
      )
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
