<template>
  <div >
    <div class="columns">
      <div v-for="chunk in imageChunks" class="column">
        <img v-for="imageUrl in chunk"
          :src="imageUrl"
          @click="sendSticker(imageUrl)"
          style="width:100%"
        />
      </div>
    </div>
  </div> 
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import _ from 'lodash'

export default {
  name: 'home_page',
  components: [
    Carousel,
    Slide,
  ],
  data() {
    return {
      text: 'Click it, bitch !',
      columnNum: 4,
      images: [
        'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
        'http://s2.buzzhand.net/uploads/88/5/557156/14252976575990.jpg',
        'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
        'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline',
        'http://dreamicus.com/data/cat/cat-01.jpg',
        'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
        'https://thumbs-prod.si-cdn.com/i3vwJpVXw5BDAXgpUVismkkngj4=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/49/01/49014501-c0be-4c40-a54b-034b46a7b2ad/istock-856455230_1.jpg',
        'http://mcdaniel.hu/wp-content/uploads/2015/01/6784063-cute-cats-hd.jpg',
        'http://www.accessatlanta.com/rf/image_large/Pub/p9/CmgSharedContent/2018/01/06/Images/GettyImages-155256950-RtD12E73KjzHTo558WCxcqN-680x383.jpeg',
        'https://e3.365dm.com/18/01/750x563/skynews-cat-istock_4199673.jpg?20180106154111',
        'https://pbs.twimg.com/media/DVpbYdpUQAA63c2.jpg',
      ],
      colors: ['red', 'black', 'green', 'yellow', 'pupple'],
    }
  },
  computed: {
    imageChunks() {
      const a = Math.ceil(this.images.length / this.columnNum)
      const b = this.images.length % this.columnNum

      const chunks = []
      for (let i=0; i<this.columnNum; i++) {
        console.log('b', b)
        if (i < b) {
          chunks[i] =  _.slice(this.images, a * i, a * i + b)
        } else {
          console.log(a * i + b)
          console.log(a * i + b + a)
          chunks[i] = _.slice(this.images, a * (i - 1) + b, a * (i - 1) + b + a)
        }
      }
      // console.log(chunks)
      return chunks
    },
  },
  methods: {
    sendSticker(imageUrl) {
      const message = {
        attachment: {
          type: 'image',
          payload: {
            url: imageUrl,
          },
        },
      }

      return new Promise((resolve, reject) => {
          MessengerExtensions.beginShareFlow((share_response) => {
              resolve(share_response.is_sent)
            }, 
            (errorCode, errorMessage) => {      
              reject({
                errorCode,
                errorMessage,
              })
            },
            message,
            'current_thread',
          )
        })
        .then((isSent) => {
          if (isSent) {
            MessengerExtensions.requestCloseBrowser(() => {
              // webview closed
            }, (errorCode, errorMessage) => {
              // an error occurred
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
