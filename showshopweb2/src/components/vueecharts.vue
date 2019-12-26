<template>
	<el-main>
		<div id="bj">
			<div class="visual">
				<el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="p20-scrollbar__view">
					<el-row :gutter="20">
						<el-col :span="12" class="echarts-item">
							<div class="css1">
								<div class="content-title">柱状图</div>
								<ve-histogram :data="histogramChartData" :settings="histogramChartSettings" :mark-line="histogramChartMarkLine"></ve-histogram>
							</div>
						</el-col>
						<el-col :span="12" class="echarts-item">
							<div class="css1">
								<div class="content-title">用户活跃新增折线图(实时)</div>
								<ve-line :data="lineChartData" :settings="lineChartSettings" :mark-point="lineChartMarkPoint"></ve-line>
							</div>
						</el-col>
						<el-col :span="12" class="echarts-item">
							<div class="css1">
								<div class="content-title">订单总价饼状图(实时)</div>
								<ve-pie :data="pieChartData" :settings="pieChartSettings"></ve-pie>
							</div>
						</el-col>
						<el-col :span="12" class="echarts-item">
							<div class="css1">
								<div class="content-title">商品点击topN(离线)</div>
								<ve-ring :data="ringChartData" :settings="ringChartSettings"></ve-ring>
							</div>
						</el-col>
					</el-row>
				</el-scrollbar>
			</div>
		</div>
	</el-main>
</template>

<script>
	import axios from "axios"
	import Vue from 'vue'
	import VCharts from 'v-charts'
	Vue.use(VCharts)
	export default {
		name: 'AdminDashboard',
		data() {
			return {
				//柱状图
				histogramChartData: {
					columns: ['日期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
					rows: [{
						'日期': '周一',
						'直接访问': 320,
						'邮件营销': 120,
						'联盟广告': 220,
						'视频广告': 150,
						'搜索引擎': 862,
						'百度': 620,
						'谷歌': 120,
						'必应': 60,
						'其他': 62
					}, {
						'日期': '周二',
						'直接访问': 332,
						'邮件营销': 132,
						'联盟广告': 182,
						'视频广告': 232,
						'搜索引擎': 1018,
						'百度': 732,
						'谷歌': 132,
						'必应': 72,
						'其他': 82
					}, {
						'日期': '周三',
						'直接访问': 301,
						'邮件营销': 101,
						'联盟广告': 191,
						'视频广告': 201,
						'搜索引擎': 964,
						'百度': 701,
						'谷歌': 101,
						'必应': 71,
						'其他': 91
					}, {
						'日期': '周四',
						'直接访问': 334,
						'邮件营销': 134,
						'联盟广告': 234,
						'视频广告': 154,
						'搜索引擎': 1026,
						'百度': 734,
						'谷歌': 134,
						'必应': 74,
						'其他': 84
					}, {
						'日期': '周五',
						'直接访问': 390,
						'邮件营销': 90,
						'联盟广告': 290,
						'视频广告': 190,
						'搜索引擎': 1679,
						'百度': 1090,
						'谷歌': 290,
						'必应': 190,
						'其他': 109
					}, {
						'日期': '周六',
						'直接访问': 330,
						'邮件营销': 230,
						'联盟广告': 330,
						'视频广告': 330,
						'搜索引擎': 1600,
						'百度': 1130,
						'谷歌': 230,
						'必应': 130,
						'其他': 110
					}, {
						'日期': '周日',
						'直接访问': 320,
						'邮件营销': 210,
						'联盟广告': 310,
						'视频广告': 410,
						'搜索引擎': 1570,
						'百度': 1120,
						'谷歌': 220,
						'必应': 110,
						'其他': 120
					}],

				},
				histogramChartSettings: {
					metrics: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
					dimension: ['日期'],
					stack: {
						'广告': ['邮件营销', '联盟广告', '视频广告'],
						'搜索引擎': ['百度', '谷歌', '必应', '其他']
					},
					label: {
						fontStyle: {
							color: '#e4ebf3'
						}
					}
				},
				histogramChartMarkLine: {
					data: [
						[{
							type: 'min'
						}, {
							type: 'max'
						}]
					],
					textStyle: {
						color: '#e4ebf3;'

					}
				},
				//折线图
				lineChartData: {
					columns: ['count_time', 'active_num', 'increase_num'],
					rows: []
				},
				lineChartSettings: {
					metrics: ['active_num', 'increase_num'],
					dimension: ['count_time']
				},
				lineChartMarkPoint: {
					data: [{
						name: '最大值',
						type: 'max'
					}]
				},
				//饼图
				pieChartData: {
					columns: ['time', 'dcount', 'price'],
					rows: [{
						'日期': '1月1号',
						'成本': 123,
						'利润': 3
					}, {
						'日期': '1月2号',
						'成本': 1223,
						'利润': 6
					}, {
						'日期': '1月3号',
						'成本': 2123,
						'利润': 90
					}, {
						'日期': '1月4号',
						'成本': 4123,
						'利润': 12
					}, {
						'日期': '1月5号',
						'成本': 3123,
						'利润': 15
					}, {
						'日期': '1月6号',
						'成本': 7123,
						'利润': 20
					}]
				},
				pieChartSettings: {
					dimension: 'dcount',
					metrics: 'price'
				},
				//环形图
				ringChartData: {
					columns: ['day', 'num', 'ratio'],
					rows: [{
						'day': '1月1号',
						'num': 123,
						'ratio': 123
					}, {
						'day': '1月2号',
						'num': 1223,
						'ratio': 1223
					}, {
						'day': '1月3号',
						'num': 2123,
						'ratio': 2123
					}, {
						'day': '1月4号',
						'num': 4123,
						'ratio': 4123
					}, {
						'day': '1月5号',
						'num': 3123,
						'ratio': 3123
					}, {
						'day': '1月6号',
						'num': 2333,
						'ratio': 233
					}]
				},
				ringChartSettings: {
					dimension: 'day',
					metrics: 'ratio'
				}
			}
		},
		mounted() {
			let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
			//初始化
			axios.get('http://localhost:8888/hxt').then(res => {
      					//console.log(this.ringChartData)
      					//console.log(this.ringChartData.rows)
      					//环形图数据[{'',''}]
      					this.ringChartData.rows = res.data

      				}).catch(
      					function(error) {
      						console.log(error);
      					});
      				axios.get('http://localhost:8888/zxt').then(res => {
      					//折线图数据[{'',''}]
      					this.lineChartData.rows = res.data
      					console.log(this.lineChartData.rows)
      				}).catch(
      					function(error) {
      						console.log(error);
      					});
      				axios.get('http://localhost:8888/bzt').then(res => {
                      					//饼状图数据[{'',''}]
                      					this.pieChartData.rows = res.data
                      					console.log(this.lineChartData.rows)
                      				}).catch(
                      					function(error) {
                      						console.log(error);
                      					});
			this.timer = setInterval(() => {
				axios.get('http://localhost:8888/hxt').then(res => {
					//console.log(this.ringChartData)
					//console.log(this.ringChartData.rows)
					//环形图数据[{'',''}]
					this.ringChartData.rows = res.data

				}).catch(
					function(error) {
						console.log(error);
					});
				axios.get('http://localhost:8888/zxt').then(res => {
					//折线图数据[{'',''}]
					this.lineChartData.rows = res.data
					console.log(this.lineChartData.rows)
				}).catch(
					function(error) {
						console.log(error);
					});
					axios.get('http://localhost:8888/bzt').then(res => {
                                					//饼状图数据[{'',''}]
                                					this.pieChartData.rows = res.data
                                					console.log(this.lineChartData.rows)
                                				}).catch(
                                					function(error) {
                                						console.log(error);
                                					});
			}, 5000)
		},
		beforeDestroy() {
			if(this.timer) {
				clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.content-title {
		clear: both;
		font-weight: 400;
		line-height: 50px;
		padding: 10px 10px;
		font-size: 22px;
		color: #e4ebf3;
	}

	.visual {
		height: calc(100% - 0.33rem);
		padding-top: 0.10rem;
	}

	.css1 {
		width: 50%;
		height: 44%;
		float: right;
		padding-top: 1.146667rem
	}

	#bj {
		background: url("../assets/k9.gif");
		background-size: 100% 100%;
		height: 100%;
		position: fixed;
		width: 100%
	}
</style>
