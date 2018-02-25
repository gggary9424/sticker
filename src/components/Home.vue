<template>
  <div>
    <div v-if="!$store.state.user.hasLogined">
      Please wait ...
    </div>
    <div v-else class="columns is-mobile is-gapless is-multiline">
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
import { mapGetters } from 'vuex'
import _ from 'lodash'
import request from '@/utils/request'

export default {
  name: 'home_page',
  data() {
    return {
      columnNum: 2,
      images: [],
      colors: ['red', 'black', 'green', 'yellow', 'pupple'],
    }
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
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
  watch: {
    user: {
      handler: function() {
        this.getImageUrls()
      },
      deep: true,
    },
  },
  methods: {
    getImageUrls() {
      return request.get('/v1/uploaded-images')
        .then((response) => {
          this.images = response.data.urls
        })
    },
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
