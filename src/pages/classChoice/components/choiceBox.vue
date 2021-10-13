<template>
  <div class="table">
    <div class="talbe_header cell-bottom-line">
      <div class="time-type">{{ getDay(timeType) }}</div>
      <div class="week-content">
        <div class="week_item" v-for="(item, index) in weekList" :key="index">{{ item }}</div>
      </div>
    </div>
    <div class="cell-bottom-line"></div>
    <div class="table_body">
      <div class="table_body_row" v-for="(time, index) in timeList" :key="index">
        <div class="time_stage">{{ time.name.split('-')[0] }}</div>
        <div class="body_content">
          <div class="content_item" v-for="(weekItem, weekIndex) in weekList" :key="weekIndex">
            <template v-if="tableObj[time.id]">
              <div class="noOpen"></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

function useGetFillter() {
  const getState = (state, userCount) => {
    const map = {
      2: '可选',
      3: '较久',
      4: `差${userCount}人`
    }
    return map[state] || '-'
  }
  const getDay = day => {
    const map = {
      day: '白天',
      night: '晚上'
    }
    return map[day] || '-'
  }
  return { getState, getDay }
}

export default {
  props: {
    // day or night
    timeType: {
      type: String,
      // default: 'day',
      require: true
    },
    timeList: {
      type: Array,
      require: true
    },
    tableObj: {
      type: Object,
      require: true
    }
  },
  setup(props, context) {
    const state = reactive({
      weekList: ['二', '三', '四', '五', '六', '日'],
      weekObj: {
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '六'
      }
    })
    const { getState, getDay } = useGetFillter()
    return {
      ...toRefs(state),
      getState,
      getDay
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin commonBackground {
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.table {
  width: 710px;
  max-width: 540PX;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  .talbe_header {
    height: 110px;
    display: flex;
    align-items: center;
    .time-type {
      width: 110px;
      height: 48px;
      font-size: 30px;
      font-weight: bold;
      color: #ffffff;
      background-image: url('~assets/classChoice/timeType.png');
      @include commonBackground;
    }
    .week-content {
      flex-grow: 1;
      display: flex;
      .week_item {
        width: 100px;
      }
    }
  }
  .table_body {
    padding: 16px 0;
    .table_body_row {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .time_stage {
        width: 110px;
        font-size: 26px;
        color: #333333;
      }
      .body_content {
        flex-grow: 1;
        display: flex;
        .content_item {
          width: 100px;
        }
      }
    }
  }
}

.noOpen {
  width: 72px;
  height: 72px;
  background: #f5f5f5;
  border-radius: 50%;
}
// 差xx人
.greenColor {
  width: 72px;
  height: 72px;
  line-height: 72px;
  background: #74d061;
  box-shadow: 0px 4px 5px 0px rgba(102, 196, 83, 0.29);
  border-radius: 50%;
  font-size: 24px;
  color: #ffffff;
}
.greenColorDisabled {
  width: 72px;
  height: 72px;
  line-height: 72px;
  background: #d8d7d8;
  box-shadow: 0px 4px 5px 0px rgba(102, 196, 83, 0.29);
  border-radius: 50%;
  font-size: 24px;
  color: #ffffff;
}
// 选中的样式--图标
.greenColorSelected {
  width: 72px;
  height: 72px;
  // background-image: url('~assets/classChoice/selected_green.png');
  @include commonBackground;
}
.redColorSelected {
  width: 72px;
  height: 72px;
  // background-image: url('~assets/classChoice/selected_red.png');
  @include commonBackground;
}
.yellowColorSelected {
  width: 72px;
  height: 72px;
  // background-image: url('~assets/classChoice/selected_yellow.png');
  @include commonBackground;
}
// 较久
.redColor {
  width: 72px;
  height: 72px;
  line-height: 72px;
  border: 2px solid #ff4846;
  border-radius: 50%;
  font-size: 24px;
  color: #ff4846;
}
.redColorDisabled,
.yellowColorDisabled {
  width: 72px;
  height: 72px;
  line-height: 72px;
  border: 2px solid #e1e1e1;
  border-radius: 50%;
  font-size: 24px;
  color: #b2b2b2;
}
// 可选
.yellowColor {
  width: 72px;
  height: 72px;
  line-height: 72px;
  border: 2px solid #ffb129;
  border-radius: 50%;
  font-size: 24px;
  color: #ffb129;
}
</style>>
