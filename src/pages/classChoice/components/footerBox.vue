<template>
  <div class="footer">
    <div class="select-box" v-if="footerList.length">
      <div class="time-box" v-for="(item, index) in footerList" :key="index">
        <div>周X</div>
        <div>{{item.beginTime}}</div>
        <div class="delete-icon"></div>
      </div>
    </div>
    <div class="select-box" v-else>暂未选择上课时段</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      footerList: []
    }
  },
  computed: {
    getFooterList() {
      return []
    }
  },
  watch: {
    getFooterList(val) {
      this.footerList = val
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@mixin commonBackground {
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540PX;
  height: 120px;
  padding: 0 16px 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  .select-box {
    flex-grow: 1;
    display: flex;
    .time-box {
      position: relative;
      width: 140px;
      height: 80px;
      margin-right: 16px;
      border: 1px solid #bebebe;
      border-radius: 4px;
      font-size: 24px;
      font-weight: 400;
      color: #333333;
      .delete-icon {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        // background-image: url('~assets/classChoice/closeIcon.png');
        @include commonBackground;
      }
    }
  }
  .btn-active {
    width: 360px;
    height: 116px;
    line-height: 116px;
    font-size: 34px;
    color: #ffffff;
    // background-image: url('~assets/classChoice/btn-submit-active.png');
    @include commonBackground;
  }
  .btn-noActive {
    width: 360px;
    height: 116px;
    line-height: 116px;
    font-size: 34px;
    color: #ffffff;
    // background-image: url('~assets/classChoice/btn-submit-disable.png');
    @include commonBackground;
  }
}
</style>
