<template>
  <div>
    <button @click="sendSticker"> Send </button>
  </div>
</template>

<script>
export default {
  name: 'home_page',
  data () {
    return {}
  },
  methods: {
    sendSticker() {
      const message = {
        attachment:{
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: [{
              title: "I took Peter's 'Which Hat Are You?' Quiz",
              image_url: 'https://bot.peters-hats.com/img/hats/fez.jpg',
              subtitle: 'My result: Fez',
              default_action: {
                type: 'web_url',
                url: 'https://bot.peters-hats.com/view_quiz_results.php?user=24601'
              },
              buttons:[{
                type: 'web_url',
                url: 'https://bot.peters-hats.com/hatquiz.php?referer=24601',
                title: 'Take the Quiz'
              }]
            }]
          }
        }
      };

      MessengerExtensions.beginShareFlow((share_response) => {
          // User dismissed without error, but did they share the message?
          if(share_response.is_sent){
            // The user actually did share. 
            // Perhaps close the window w/ requestCloseBrowser().
          }
        }, 
        function(errorCode, errorMessage) {      
        // An error occurred in the process
        },
        message,
        "broadcast"
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
