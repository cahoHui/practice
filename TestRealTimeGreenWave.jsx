import React from 'react'
import $ from 'jquery'
import * as d3 from 'd3'
import RealTImeDetection from './RealTimeDetection'

class RealTimeGreenWave extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      linePositions: null,
      realTimeDetection: null,
    }
    this.IntersSignalRunUrl = 'http://192.168.1.213:12344/dws/evlregionOpt/getIntersSignalRun'
    this.greenWaveData = {"msg":"操作成功","code":"1","data":[{"area_name":"美兰区","lenAll":0,"data_version":"20180630","reverseSpeed":"37.41","execute_end_date":"","reverse_phase_plan_id":"1","execute_start_date":"","forward_phase_plan_name":"A","forward_offset":"22.0","reverse_offset":"22.0","is_key_inter":0,"len":0,"inter_name":"和平大道-海甸二东路","forward_phase_plan_id":"1","geohash":"w7w6p470n5","reverse_phase_plan_name":"A","id":"11LKN063Q20","lev":"4","lat":20.05144229,"inter_id":"11LKN063Q20","lng":110.3510575,"adcode":"460100","area_code":"460108","phaseList":[{"inter_id":"11LKN063Q20","offset":22.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":25.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462076,"phase_name":"A","doe_date_type":99},{"inter_id":"11LKN063Q20","offset":22.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":32.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462077,"phase_name":"B","doe_date_type":99},{"inter_id":"11LKN063Q20","offset":22.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":27.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462078,"phase_name":"C","doe_date_type":99},{"inter_id":"11LKN063Q20","offset":22.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":33.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462079,"phase_name":"D","doe_date_type":99},{"inter_id":"11LKN063Q20","offset":22.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":29.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462080,"phase_name":"E","doe_date_type":99}],"name":"和平大道-海甸二东路","cycle_time":146.0,"forwordSpeed":"37.00"},{"area_name":"美兰区","lenAll":301,"data_version":"20180630","reverseSpeed":"38.05","execute_end_date":"","reverse_phase_plan_id":"1","execute_start_date":"","forward_phase_plan_name":"A","forward_offset":"52.0","reverse_offset":"52.0","is_key_inter":0,"len":301,"inter_name":"和平大道-海甸三东路","forward_phase_plan_id":"1","geohash":"w7w6p4dnp9","reverse_phase_plan_name":"A","id":"11LKA063QQ0","lev":"4","lat":20.05383404,"inter_id":"11LKA063QQ0","lng":110.34975398,"adcode":"460100","area_code":"460108","phaseList":[{"inter_id":"11LKA063QQ0","offset":52.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":34.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462072,"phase_name":"A","doe_date_type":99},{"inter_id":"11LKA063QQ0","offset":52.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":53.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462073,"phase_name":"B","doe_date_type":99},{"inter_id":"11LKA063QQ0","offset":52.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":31.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462074,"phase_name":"C","doe_date_type":99},{"inter_id":"11LKA063QQ0","offset":52.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":28.0,"phase_plan_id":"1","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462075,"phase_name":"D","doe_date_type":99}],"name":"和平大道-海甸三东路","cycle_time":146.0,"forwordSpeed":"38.45"},{"area_name":"美兰区","lenAll":567,"data_version":"20180630","reverseSpeed":"0.00","execute_end_date":"","reverse_phase_plan_id":"2","execute_start_date":"","forward_phase_plan_name":"A","forward_offset":"0.0","reverse_offset":"0.0","is_key_inter":0,"len":266,"inter_name":"和平大道-海甸四东路","forward_phase_plan_id":"2","geohash":"w7w6p51g8z","reverse_phase_plan_name":"A","id":"11LK3063RI0","lev":"4","lat":20.0561846,"inter_id":"11LK3063RI0","lng":110.34911926,"adcode":"460100","area_code":"460108","phaseList":[{"inter_id":"11LK3063RI0","offset":0.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":28.0,"phase_plan_id":"2","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462068,"phase_name":"A","doe_date_type":99},{"inter_id":"11LK3063RI0","offset":0.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":40.0,"phase_plan_id":"2","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462069,"phase_name":"B","doe_date_type":99},{"inter_id":"11LK3063RI0","offset":0.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":23.0,"phase_plan_id":"2","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462070,"phase_name":"C","doe_date_type":99},{"inter_id":"11LK3063RI0","offset":0.0,"data_version":"20180630","adcode":"460100","stat_date":"20191219","end_time":"07:00:00","task_id":"99999","split_time":55.0,"phase_plan_id":"2","offset_type_no":1,"dt":"20191219","start_time":"00:00:00","ctlregion_id":"HePingDaDao","cyclesplit_source":1,"update_frequency":0,"cycle_time":146.0,"id":5462071,"phase_name":"D","doe_date_type":99}],"name":"和平大道-海甸四东路","cycle_time":146.0,"forwordSpeed":"38.66"}]}
    this.detectionData = []
    this.secondTimes = []
    this.time = 0
  }
  componentDidMount = () => {
   
    this.getIntersSignalRun()
    // this.realTimer = setInterval(() => {
    //   // if (this.time === 150) {
    //   //   clearInterval(this.realTimer)
    //   //   this.realTimer = null
    //   // }
    //   this.getIntersSignalRun()
    //   this.time++
    // }, 1200)
    console.log('DDDDDDDDDDDDDDDDDD3::::', d3)
  }
  // 获取绿波斜线的点位置
  getGreenWaveLine = () => {
    this.linePositions = []
    this.linePositions2 = []
    this.totleHeight = 0
    this.greenWaveData.data.forEach((item, index) => {
      console.log(item)
      const nextItem = this.greenWaveData.data[index + 1]
      if (nextItem) {
        this.endPos = parseInt(nextItem.len) / parseInt(nextItem.forwordSpeed) * this.calculateHs
      }
      if (index !== this.greenWaveData.data.length - 1) {
        const nextLeft = $($('.realTimeDetectionBox')[index + 1]).closest('.xAxisBox').width()
        const detectionBoxH = $('#detection' + index).length > 0 ?  $('#detection' + index).position().top : 0
        const phaseGreenBox = $($('.realTimeDetectionBox')[index]).find('.phaseGreenBox')
        if (phaseGreenBox.length > 0) {
          phaseGreenBox.each((i, k) => {
            const lines = []
            const lineY1 = detectionBoxH + $(k).position().top + $(k).height() + 6
            const lineX1 = $(k).closest('.xAxisBox').width()
            const lineX2 = nextLeft
            const lineY2 = lineY1 - this.endPos
            if (lineY2 > 0) {
              lines.push(lineX1)
              lines.push(lineY1)
              lines.push(lineX2)
              lines.push(lineY2)
            }
            this.linePositions.push(lines)
          })
        }
      }
    })
    const reverseData = JSON.parse(JSON.stringify(this.greenWaveData.data))
    reverseData.forEach((item, index) => {
      const prevItem = reverseData[index - 1]
      if (prevItem) {
        const len = this.greenWaveData.data[index].len
        const speed = this.greenWaveData.data[index].reverseSpeed
        this.startPos = parseInt(len) / parseInt(speed) * this.calculateHs
        const prevLeft = $($('.realTimeDetectionBox2')[index - 1]).closest('.xAxisBox').width()
        const detectionBoxH = $('#detection2' + index).length > 0 ? $('#detection2' + index).position().top : 0
        const phaseGreenBox = $($('.realTimeDetectionBox2')[index]).find('.phaseGreenBox')
        phaseGreenBox.each((i, k) => {
          const lines = []
          const endX = $(k).closest('.xAxisBox').width() + 35
          const endY = detectionBoxH + $(k).position().top + $(k).height() + 6
          const startX = prevLeft + 35
          const startY = endY - this.startPos
          if (startY > 0) {
            lines.push(startX)
            lines.push(startY)
            lines.push(endX)
            lines.push(endY)
            this.linePositions2.push(lines)
          }
        })
      }
    })
    this.setState({ linePositions: [...this.linePositions, ...this.linePositions2] }, () => {
      setTimeout(() => {
        this.getIntersSignalRun()
      }, 1000)
    })
  }
  // 获取实时干线检测
  getIntersSignalRun = () => {
    $.ajax({
      url: this.IntersSignalRunUrl,
      type: 'post',
      data: { inter_ids: '11LKN063Q20,11LKA063QQ0,11LK3063RI0' },
      success: (result) => {
        result = JSON.parse(result)
        if (result.code === '1') {
          this.detectionData.push(result.data)
          this.setState({ realTimeDetection: this.detectionData })
          if (this.secondTimes.length === 0) {
            this.secondTimes = new Array(result.data.length).fill(0)
          }
          result.data.forEach((item, index) => {
            this.secondTimes[index] ++
            const interId = item.inter_id
            const interData = this.greenWaveData.data.filter(items => items.inter_id = interId)
            const mainPhase = interData[0].forward_phase_plan_name
            const phaseColor = mainPhase === item.phase_name ? 'green' : 'red'
            const classname = phaseColor === 'green' ? 'phaseGreenBox' : ''
            const len = $('#detection' + index).children().length
            if (len > 0) {
              const lastPhase = $('#detection' + index).children().last().text()
              if (lastPhase === item.phase_name) {
                $('#detection' + index).find('.detection'+ index + item.phase_name).last().height(parseInt(this.calculateHs * this.secondTimes[index]))
                $('#detection2' + index).find('.detection'+ index + item.phase_name).last().height(parseInt(this.calculateHs * this.secondTimes[index]))
              } else {
                this.secondTimes[index] = 0
                const phaseStr = '<div class="detection'+ index + item.phase_name +' '+ classname +'" style="height:'+ this.secondTimes[index] * this.calculateHs +'px; background-color:'+ phaseColor +';display:flex;justify-content:center;align-items:center;border-top:1px solid #000;overflow:hidden;transform:rotate(-180deg);transition:all ease .2s;">'+ item.phase_name +'</div>'
                $('#detection' + index).append(phaseStr)
                $('#detection2' + index).append(phaseStr)

              }
              const HEIGHT = 350
              const changeHeight = $('#detection' + index).height()
              const computeHeight = HEIGHT - changeHeight
              if (computeHeight < 0) {
                $('#detection' + index).css({bottom: computeHeight + 'px'})
                $('#detection2' + index).css({bottom: computeHeight + 'px'})
              }
            } else {
              const phaseStr = '<div class="detection'+ index + item.phase_name +' '+ classname +'" style="height:'+ this.secondTimes[index] * this.calculateHs +'px; background-color:'+ phaseColor +';display:flex;justify-content:center;align-items:center;border-top:1px solid #000;overflow:hidden;transform:rotate(-180deg);transition:all ease .2s;">'+ item.phase_name +'</div>'
              $('#detection' + index).append(phaseStr)
              $('#detection2' + index).append(phaseStr)
            }
          })
          // this.getGreenWaveLine()
        }
      }
    })
  }
  getCalculateHs = (Hs) => {
    this.calculateHs = Hs
  }
  render() {
    return (
      <div style={{ padding: '100px' }}>
        <div style={{ width: '1000px', height: '351px', margin: '100px' }}>
          {
            this.state.realTimeDetection &&
              <RealTImeDetection
                chartsData={this.greenWaveData.data}
                totleDistance={this.greenWaveData.data[this.greenWaveData.data.length - 1].lenAll}
                detectionData={this.state.realTimeDetection}
                getCalculateHs={this.getCalculateHs}
                linePositions={this.state.linePositions}
              />
          }
        </div>
      </div>
      
    )
  }
}

export default RealTimeGreenWave
