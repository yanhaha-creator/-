<template>
	<div id="myChart"></div>
</template>

<script>
	let echarts = require('echarts/lib/echarts'); // 引入柱状图组件
	import axios from "axios";
	require('echarts/lib/chart/bar');
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	export default {
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'));
				axios.get('http://localhost:8888/thymeleaf/clickecharts').then(res => {
					//[{"jyze":"16187583","tkze":"6393269"}]
					/*var jyze = res.data[0].jyze;
					console.log(jyze);
					var tkze = res.data[0].tkze;
					console.log(tkze);
					var sum = jyze - tkze;*/
					//console.log(res.data);//[{"goods_category":1,"goods_id":112,"click_num":112,"click_time":"121"}]
					//console.log(res.data[0]);//{"goods_category":1,"goods_id":112,"click_num":112,"click_time":"121"}
					var data = res.data[0]
					var category = data.goods_category
					var goods_id = data.goods_id
					var click_num = data.click_num
					var click_time = data.click_time
					//console.log(category,goods_id,click_num,click_time)
					myChart.setOption({ // 绘制图表
						title: {
							text: 'Vue中使用Echarts柱状图',
							left: 'center',
						},
						tooltip: {},
						xAxis: {
							data: ["总交易总额", "总退款总额", "净销售总额","mdzz"]
						},
						yAxis: {},
						series: [{
							name: '销量',
							type: 'bar',
							//data: [1,2,1]
							data: [category,goods_id,click_num,click_time]
						}]
					});
				});
			}
		}
	}
</script>

<style scoped>
	#myChart {
		width: 80%;
		height: 700px;
	}
</style>
