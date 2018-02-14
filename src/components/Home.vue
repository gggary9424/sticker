<template>
  <div >
    <div class="columns is-mobile is-gapless is-multiline">
      <div v-for="(chunk, index) in imageChunks" class="column" :key="index">
        <img
          v-for="(imageUrl, index) in chunk"
          :key="index"
          :src="imageUrl"
          @click="sendSticker(imageUrl)"
          style="width:100%"
        />
      </div>
    </div>
  </div> 
</template>

<script>
import _ from 'lodash'
import request from '@/utils/request'

export default {
  name: 'home_page',
  data() {
    return {
      columnNum: 2,
      images: [
        'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
        'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
        'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline',
        'https://thumbs-prod.si-cdn.com/i3vwJpVXw5BDAXgpUVismkkngj4=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/49/01/49014501-c0be-4c40-a54b-034b46a7b2ad/istock-856455230_1.jpg',
        'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
        'https://pbs.twimg.com/media/DVpbYdpUQAA63c2.jpg',
        'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg',
        'https://e3.365dm.com/18/01/750x563/skynews-cat-istock_4199673.jpg?20180106154111',
        'https://www.lifegate.com/app/uploads/gattino-primo-piano.jpg',
        'https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166',
        'https://onefastcat.com/media/neoshop/default/subs_kitty.png',
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/10/ninja-cats-photography-hisakata-hiroyuki-10-59f197289e003__880.jpg',
      ],
      colors: ['red', 'black', 'green', 'yellow', 'pupple'],
    }
  },
  computed: {
    imageChunks() {
      if (this.columnNum > this.images.length) {
        return _.map(this.images, (image) => [image])
      }
      const minNumPerColumn = Math.floor(this.images.length / this.columnNum)
      const moreOneImageColumnNum = this.images.length % this.columnNum

      const chunks = []
      for (let i=0; i<this.columnNum; i++) {
        if (i < moreOneImageColumnNum) {
          chunks[i] =  []
          const startIndex = i * minNumPerColumn
          for (let j=startIndex; j<startIndex+minNumPerColumn+1; j++) {
            chunks[i].push(this.images[j])
          }
        } else {
          chunks[i] = []
          const startIndex = (i + 1) * minNumPerColumn + moreOneImageColumnNum - minNumPerColumn
          for (let j=startIndex; j<startIndex+minNumPerColumn; j++) {
            chunks[i].push(this.images[j])
          }
        }
      }

      return chunks
    },
  },
  beforeCreate() {
    return request.get('/v1/uploaded-images', {
        params: {
          psid: '1258684950903865',
        },
      })
      .then((response) => {
        this.images = response.data.urls
      })
      .catch(() => {

      })
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
