<template>
  <div id ="bj">
          <div class="visual">
          <div class="css1">
          <div class="content-title" style="font-weight:bold;">
           柱状图
          </div>
          <ve-histogram :data="histogramChartData" :settings="histogramChartSettings" :mark-line="histogramChartMarkLine" ></ve-histogram>
<!--                  <div class="content-title" style="font-weight:bold;">-->
<!--                    折线图</div>-->
<!--          <ve-line :data="lineChartData" :settings="lineChartSettings" :mark-point="lineChartMarkPoint"></ve-line>-->
          </div>

          <div class="css2">
<!--&lt;!&ndash;            <div class="content-title" style="font-weight:bold;">&ndash;&gt;-->
<!--&lt;!&ndash;             饼图&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          <ve-pie :data="pieChartData" :settings="pieChartSettings"></ve-pie>-->
          <div class="content-title" style="font-weight:bold;">
            环形图
          </div>
          <ve-ring :data="ringChartData" :settings="ringChartSettings"></ve-ring>
          </div>
          </div>
  </div>
</template>

<script>

    import Vue from 'vue'
    import VCharts from 'v-charts'
    import axios from "axios";
    Vue.use(VCharts)
    export default {
        name: 'AdminDashboard',
        data () {
            return {


                histogramChartData: {
                    columns: ['日期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
                    rows: [{
                        '日期': '周一', '直接访问': 320, '邮件营销': 120, '联盟广告': 220, '视频广告': 150, '搜索引擎': 862, '百度': 620, '谷歌': 120, '必应': 60, '其他': 62
                    }, {
                        '日期': '周二', '直接访问': 332, '邮件营销': 132, '联盟广告': 182, '视频广告': 232, '搜索引擎': 1018, '百度': 732, '谷歌': 132, '必应': 72, '其他': 82
                    }, {
                        '日期': '周三', '直接访问': 301, '邮件营销': 101, '联盟广告': 191, '视频广告': 201, '搜索引擎': 964, '百度': 701, '谷歌': 101, '必应': 71, '其他': 91
                    }, {
                        '日期': '周四', '直接访问': 334, '邮件营销': 134, '联盟广告': 234, '视频广告': 154, '搜索引擎': 1026, '百度': 734, '谷歌': 134, '必应': 74, '其他': 84
                    }, {
                        '日期': '周五', '直接访问': 390, '邮件营销': 90, '联盟广告': 290, '视频广告': 190, '搜索引擎': 1679, '百度': 1090, '谷歌': 290, '必应': 190, '其他': 109
                    }, {
                        '日期': '周六', '直接访问': 330, '邮件营销': 230, '联盟广告': 330, '视频广告': 330, '搜索引擎': 1600, '百度': 1130, '谷歌': 230, '必应': 130, '其他': 110
                    }, {
                        '日期': '周日', '直接访问': 320, '邮件营销': 210, '联盟广告': 310, '视频广告': 410, '搜索引擎': 1570, '百度': 1120, '谷歌': 220, '必应': 110, '其他': 120
                    }]
                },
                histogramChartSettings: {
                    metrics: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
                    dimension: ['日期'],
                    stack: {
                        '广告': ['邮件营销', '联盟广告', '视频广告'],
                        '搜索引擎': ['百度', '谷歌', '必应', '其他']
                    }
                },
                histogramChartMarkLine: {
                    data: [
                        [{type: 'min'}, {type: 'max'}]
                    ]
                },
                lineChartSettings: {
                    metrics: ['成本', '利润'],
                    dimension: ['日期']
                },
                lineChartMarkPoint: {
                    data: [{
                        name: '最大值',
                        type: 'max'
                    }]
                },
                pieChartData: {
                    columns: ['日期', '成本', '利润'],
                    rows: [{
                        '日期': '1月1号', '成本': 123, '利润': 3
                    }, {
                        '日期': '1月2号', '成本': 1223, '利润': 6
                    }, {
                        '日期': '1月3号', '成本': 2123, '利润': 90
                    }, {
                        '日期': '1月4号', '成本': 4123, '利润': 12
                    }, {
                        '日期': '1月5号', '成本': 3123, '利润': 15
                    }, {
                        '日期': '1月6号', '成本': 233, '利润': 20
                    }]
                },
                pieChartSettings: {
                    dimension: '成本',
                    metrics: '利润'
                },
                ringChartData: {
                    columns: ['日期', '成本', '利润'],
                    rows: [{
                        '日期': '1月1号', '成本': 123, '利润': 3
                    }, {
                        '日期': '1月2号', '成本': 1223, '利润': 6
                    }, {
                        '日期': '1月3号', '成本': 2123, '利润': 90
                    }, {
                        '日期': '1月4号', '成本': 4123, '利润': 12
                    }, {
                        '日期': '1月5号', '成本': 3123, '利润': 15
                    }, {
                        '日期': '1月6号', '成本': 2333, '利润': 20
                    }]
                },
                ringChartSettings: {
                    dimension: '成本',
                    metrics: '利润'
                }
            }
        },
        created: function () {
        },
        methods: {
        axios.get('http://localhost:8888/clickecharts').then(res => {
        					//[{"jyze":"16187583","tkze":"6393269"}]
        					var jyze = res.data[0].jyze;
        					console.log(jyze);
        					var tkze = res.data[0].tkze;
        					console.log(tkze);
        					var sum = jyze - tkze;
        					console.log(sum);
        }

    }
</script>


<style scoped>
  #bj{
    background: url("../assets/k1.gif");
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }

  .visual {
    height: calc(100% - 0.33rem);
    padding-top: 0.10rem;
  }

  .css1{
    width: 50%;
    height: 44%;
    float: right;
    padding-top:1.146667rem


  }

  .css2{
    width: 45%;
    height: 44%;
    float: left;
    padding-top: 1.146667rem
  }
  .content-title {
    background: linear-gradient(to  right, #5ab1ef 0%, #396eca 25%, #3467be 100%);
    padding: 0.10rem 0.10rem;
  }



</style>
