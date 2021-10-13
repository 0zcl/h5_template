<template>
  <div class="main-box">
    <div class="header">
      <van-divider class="my-divider">请选择每周上课时间</van-divider>
    </div>
    <div class="status-list">
      <div v-for="(item, index) in statusList" :key="index" class="status-item">
        <div class="point" v-bind:style="{background: `${item.pointBg}`}"></div>
        <div class="point-label">{{item.label}}</div>
      </div>
    </div>

    <div class="choice-box">
      <choice-box
        ref="nightChoice"
        timeType="night"
        :timeList="nightList"
        :tableObj="tableObj"
      ></choice-box>
    </div>
    <div class="choice-box-divide"></div>
    <div class="choice-box">
      <choice-box
        ref="dayChoice"
        timeType="day"
        :timeList="dayList"
        :tableObj="tableObj"
      ></choice-box>
    </div>

    <van-cell
      is-link
      title="取消显示关闭图标"
    />

    <demo-button type="primary" style="margin-left: 15px">按钮</demo-button>

     <footer-box></footer-box>

    <!-- <Loading v-if="loading"></Loading> -->
  </div>

  <!-- <hll-dialog :show-close-icon="false">
    <img
      src="https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,w_320,m_lfit"
    />
  </hll-dialog> -->

</template>

<script>
import choiceBox from 'classChoice/components/choiceBox'
import footerBox from 'classChoice/components/footerBox'
import { reactive, toRefs } from 'vue'
// import HllDialog from 'zcl-mobile-ui/es/hll-dialog'
// import 'zcl-mobile-ui/es/hll-dialog/style'

export default {
  name: 'home',
  components: {
    choiceBox,
    footerBox
  },
  setup() {
    console.log('env', process.env)
    const state = reactive({
      loading: false,
      modify: false, // 是否重新选择
      statusList: [
        {
          pointBg: '#3ABC26',
          label: '成班较快'
        },
        {
          pointBg: '#FFB129',
          label: '可选时段'
        },
        {
          pointBg: '#FF4846',
          label: '成班较久'
        }
      ],
      dayList: [],
      nightList: [],
      tableObj: {}
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.main-box {
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 150px;
  .header {
    width: 100%;
    height: 110px;
    background: linear-gradient(90deg, #FF5E44 0%, #FF4646 100%);
    overflow: hidden;
    .my-divider {
      border-color: #D9D9D9;
      padding: 0 116px 0 116px;
      // margin: 40px !important;
      font-size:32px;
      color: #FFFFFF;
    }
  }
  .choice-box {
    padding: 0 20px;
  }
  .choice-box-divide {
    height: 24px;
    background: rgba(247,247,247,1);
  }
  .status-list {
    height: 68px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    .status-item {
      margin: 0 20px 0 20px;
      .point {
        display: inline-block;
        vertical-align: middle;
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
      .point-label {
        display: inline-block;
        vertical-align: middle;
        margin-left: 6px;
        font-size: 26px;
      }
    }
  }
}
</style>
