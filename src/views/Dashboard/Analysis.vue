<template>
  <div>
    <a-row>
      <a-col :span="24" class="select_area">
        <div>
          <a-select
            default-value="Jan-2020"
            style="width: 200px; text-align-last:center;"
            @change="handleChange"
          >
            <a-select-option value="0">
              Jan-2020
            </a-select-option>
            <a-select-option value="1">
              Feb-2020
            </a-select-option>
            <a-select-option value="2">
              Mar-2020
            </a-select-option>
            <a-select-option value="3">
              Apr-2020
            </a-select-option>
            <a-select-option value="4">
              May-2020
            </a-select-option>
          </a-select>
        </div>
      </a-col>

      <!-- 顯示數據區 -->
      <a-col :span="24" style="padding: 5px">
        <p style="font-size:18px; color:#333; font-weight: bold;">
          Overall Perforamce
        </p>
      </a-col>
      <a-col :span="8" class="data_area">
        <p class="data_area_label">Impressions</p>
        <p class="data_area_data">{{ dataDisplay.monthlyImp }}</p>
        <p :style="dataDisplay.impChangeColor ? 'color:green' : 'color:red'">
          {{ dataDisplay.impChange }}
        </p>
      </a-col>

      <a-col :span="8" class="data_area">
        <p class="data_area_label">Clicks</p>
        <p class="data_area_data">{{ dataDisplay.monthlyClick }}</p>
        <p :style="dataDisplay.clickChangeColor ? 'color:green' : 'color:red'">
          {{ dataDisplay.clickChange }}
        </p>
      </a-col>
      <a-col :span="8" class="data_area">
        <p class="data_area_label">Avg. Position</p>
        <p class="data_area_data">
          {{ dataDisplay.monthlyPos }}
        </p>
        <p :style="dataDisplay.posChangeColor ? 'color:green' : 'color:red'">
          {{ dataDisplay.posChange }}
        </p>
      </a-col>

      <!-- Chart area -->
      <a-col :span="24">
        <div>
          <Chart :option="dailyOption" style="height:400px" />
        </div>
      </a-col>
      <a-col :span="12">
        <div>
          <Chart :option="impOption" style="height:400px" />
        </div>
      </a-col>
      <a-col :span="12">
        <div>
          <Chart :option="clickOption" style="height:400px" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Chart from "../../components/Chart";

export default {
  components: {
    Chart
  },
  data() {
    return {
      dataDisplay: {
        monthlyImp: "",
        impChange: "",
        impChangeColor: Boolean,
        monthlyClick: "",
        clickChange: "",
        clickChangeColor: Boolean,
        monthlyPos: "",
        posChange: "",
        posChangeColor: ""
      },

      impOption: {
        title: {
          text: "Impressions by Months",
          textStyle: {
            fontWeight: "bold"
          }
        },
        tooltip: {},
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May"]
        },
        yAxis: [
          {
            type: "value",
            show: true,
            axisLabel: {
              fontSize: 14,
              color: "#333"
            },
            splitLine: {
              show: false //是否显示分隔线。
            }
          }
        ],
        series: [
          {
            name: "網站曝光",
            type: "line",
            barWidth: "30%",
            smooth: true,
            symbolSize: 15,
            lineStyle: {
              color: "#5470C6",
              width: 4
            },
            data: [
              {
                value: 661532,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 600194,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 1000383,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 659041,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 713512,
                itemStyle: {
                  color: "#f5b031"
                }
              }
            ]
          }
        ]
      },
      clickOption: {
        title: {
          text: "Clicks by Months",
          textStyle: {
            fontWeight: "bold"
          }
        },
        tooltip: {},
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May"]
        },
        yAxis: [
          {
            type: "value",
            show: true,
            axisLabel: {
              fontSize: 14,
              color: "#333"
            },
            splitLine: {
              show: false //是否显示分隔线。
            }
          }
        ],
        series: [
          {
            name: "網站點擊",
            type: "bar",
            barWidth: "30%",
            data: [
              {
                value: 26162,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 27559,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 55582,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 31908,
                itemStyle: {
                  color: "#f5b031"
                }
              },
              {
                value: 31962,
                itemStyle: {
                  color: "#f5b031"
                }
              }
            ]
          }
        ]
      },
      dailyRange: [
        [
          "2020-01-01",
          "2020-01-02",
          "2020-01-03",
          "2020-01-04",
          "2020-01-05",
          "2020-01-06",
          "2020-01-07",
          "2020-01-08",
          "2020-01-09",
          "2020-01-10",
          "2020-01-11",
          "2020-01-12",
          "2020-01-13",
          "2020-01-14",
          "2020-01-15",
          "2020-01-16",
          "2020-01-17",
          "2020-01-18",
          "2020-01-19",
          "2020-01-20",
          "2020-01-21",
          "2020-01-22",
          "2020-01-23",
          "2020-01-24",
          "2020-01-25",
          "2020-01-26",
          "2020-01-27",
          "2020-01-28",
          "2020-01-29",
          "2020-01-30",
          "2020-01-31"
        ],
        [
          "2020-02-01",
          "2020-02-02",
          "2020-02-03",
          "2020-02-04",
          "2020-02-05",
          "2020-02-06",
          "2020-02-07",
          "2020-02-08",
          "2020-02-09",
          "2020-02-10",
          "2020-02-11",
          "2020-02-12",
          "2020-02-13",
          "2020-02-14",
          "2020-02-15",
          "2020-02-16",
          "2020-02-17",
          "2020-02-18",
          "2020-02-19",
          "2020-02-20",
          "2020-02-21",
          "2020-02-22",
          "2020-02-23",
          "2020-02-24",
          "2020-02-25",
          "2020-02-26",
          "2020-02-27",
          "2020-02-28",
          "2020-02-29"
        ],
        [
          "2020-03-01",
          "2020-03-02",
          "2020-03-03",
          "2020-03-04",
          "2020-03-05",
          "2020-03-06",
          "2020-03-07",
          "2020-03-08",
          "2020-03-09",
          "2020-03-10",
          "2020-03-11",
          "2020-03-12",
          "2020-03-13",
          "2020-03-14",
          "2020-03-15",
          "2020-03-16",
          "2020-03-17",
          "2020-03-18",
          "2020-03-19",
          "2020-03-20",
          "2020-03-21",
          "2020-03-22",
          "2020-03-23",
          "2020-03-24",
          "2020-03-25",
          "2020-03-26",
          "2020-03-27",
          "2020-03-28",
          "2020-03-29",
          "2020-03-30",
          "2020-03-31"
        ],
        [
          "2020-04-01",
          "2020-04-02",
          "2020-04-03",
          "2020-04-04",
          "2020-04-05",
          "2020-04-06",
          "2020-04-07",
          "2020-04-08",
          "2020-04-09",
          "2020-04-10",
          "2020-04-11",
          "2020-04-12",
          "2020-04-13",
          "2020-04-14",
          "2020-04-15",
          "2020-04-16",
          "2020-04-17",
          "2020-04-18",
          "2020-04-19",
          "2020-04-20",
          "2020-04-21",
          "2020-04-22",
          "2020-04-23",
          "2020-04-24",
          "2020-04-25",
          "2020-04-26",
          "2020-04-27",
          "2020-04-28",
          "2020-04-29",
          "2020-04-30"
        ],
        [
          "2020-05-01",
          "2020-05-02",
          "2020-05-03",
          "2020-05-04",
          "2020-05-05",
          "2020-05-06",
          "2020-05-07",
          "2020-05-08",
          "2020-05-09",
          "2020-05-10",
          "2020-05-11",
          "2020-05-12",
          "2020-05-13",
          "2020-05-14",
          "2020-05-15",
          "2020-05-16",
          "2020-05-17",
          "2020-05-18",
          "2020-05-19",
          "2020-05-20",
          "2020-05-21",
          "2020-05-22",
          "2020-05-23",
          "2020-05-24",
          "2020-05-25",
          "2020-05-26",
          "2020-05-27",
          "2020-05-28",
          "2020-05-29",
          "2020-05-30",
          "2020-05-31"
        ]
      ],
      dailyData: [
        {
          impressions: [
            23627,
            28795,
            20337,
            16576,
            24560,
            27884,
            29781,
            28768,
            28680,
            21744,
            15922,
            26685,
            30550,
            28343,
            27809,
            26071,
            20637,
            14834,
            22293,
            25495,
            23330,
            21168,
            17201,
            11725,
            9809,
            9935,
            13603,
            15646,
            18188,
            17531,
            14005
          ],
          clicks: [
            1041,
            1265,
            781,
            566,
            929,
            1128,
            1153,
            1158,
            1112,
            755,
            501,
            938,
            1210,
            1194,
            1091,
            1059,
            936,
            530,
            896,
            1065,
            1045,
            840,
            694,
            346,
            299,
            306,
            458,
            721,
            801,
            765,
            579
          ]
        },
        {
          impressions: [
            11740,
            18952,
            19400,
            19571,
            20644,
            19307,
            15431,
            12744,
            18710,
            22689,
            24357,
            23050,
            21502,
            16339,
            13760,
            19065,
            21870,
            22423,
            22558,
            22379,
            17756,
            14649,
            22767,
            28426,
            28109,
            27697,
            30057,
            24973,
            19269
          ],
          clicks: [
            471,
            759,
            813,
            817,
            860,
            866,
            639,
            443,
            706,
            860,
            1102,
            1073,
            1079,
            726,
            591,
            795,
            1049,
            1034,
            1020,
            974,
            775,
            578,
            1046,
            1468,
            1415,
            1339,
            1664,
            1440,
            1157
          ]
        },
        {
          impressions: [
            26041,
            30703,
            33988,
            30734,
            29942,
            23420,
            17671,
            29587,
            47903,
            35342,
            36491,
            52583,
            34029,
            21884,
            34018,
            46230,
            38602,
            44451,
            38913,
            30254,
            22919,
            30688,
            34160,
            34992,
            34179,
            33469,
            24487,
            17375,
            26527,
            28748,
            30053
          ],
          clicks: [
            1263,
            1559,
            1930,
            1637,
            1549,
            1251,
            904,
            1573,
            2880,
            2082,
            2187,
            3370,
            2037,
            1179,
            1923,
            2936,
            2375,
            2763,
            2307,
            1724,
            1114,
            1620,
            1802,
            1952,
            1852,
            1831,
            1145,
            844,
            1157,
            1343,
            1493
          ]
        },
        {
          impressions: [
            27466,
            29611,
            21938,
            16168,
            24643,
            27904,
            28611,
            28294,
            22285,
            16311,
            13852,
            16637,
            22694,
            27121,
            26866,
            26724,
            21352,
            14082,
            20707,
            25452,
            23719,
            23126,
            21924,
            17524,
            12684,
            19777,
            23196,
            22399,
            20047,
            15927
          ],
          clicks: [
            1364,
            1329,
            1005,
            667,
            1138,
            1555,
            1504,
            1456,
            1022,
            695,
            610,
            663,
            1100,
            1472,
            1306,
            1399,
            1079,
            656,
            913,
            1274,
            1202,
            1176,
            1016,
            819,
            584,
            914,
            1175,
            1155,
            963,
            697
          ]
        },
        {
          impressions: [
            14076,
            12378,
            19432,
            23492,
            22532,
            24407,
            22392,
            18414,
            13317,
            19194,
            23959,
            24326,
            24487,
            23430,
            19247,
            14465,
            20011,
            25537,
            29423,
            28273,
            26139,
            21157,
            16732,
            29486,
            33474,
            30483,
            31107,
            30974,
            24564,
            18962,
            27642
          ],
          clicks: [
            630,
            479,
            872,
            1071,
            1104,
            1052,
            1033,
            771,
            526,
            818,
            1116,
            1297,
            1188,
            1057,
            784,
            581,
            844,
            1103,
            1104,
            1062,
            1209,
            913,
            564,
            1287,
            1539,
            1467,
            1530,
            1635,
            1110,
            836,
            1380
          ]
        }
      ],
      dailyOption: {
        title: {
          text: "Daily Performance",
          textStyle: {
            fontWeight: "bold"
          }
        },
        tooltip: {},
        xAxis: {
          data: []
        },
        yAxis: [
          {
            type: "value",
            show: true,
            axisLabel: {
              fontSize: 14,
              color: "#333"
            },
            splitLine: {
              show: false //是否显示分隔线。
            }
          },
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "clicks",
            type: "bar",
            barWidth: "50%",
            data: [],
            itemStyle: {
              normal: {
                color: "#f5b031"
              }
            }
          },
          {
            name: "impressions",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            symbolSize: 10,
            data: [],
            itemSyle: {
              normal: {
                color: "black"
              }
            }
          }
        ]
      },

      //0~5, Mon~May
      monthlyData: [
        { imp: 661532, click: 26162, pos: 18.8 },
        { imp: 600194, click: 27559, pos: 19.0 },
        { imp: 1000383, click: 55582, pos: 18.3 },
        { imp: 659041, click: 31908, pos: 19.0 },
        { imp: 713512, click: 31962, pos: 19.6 }
      ]
    };
  },
  mounted() {
    //default value
    this.handleChange(0);
  },

  methods: {
    toPersent(point) {
      const per = Number(point * 100).toFixed(1) + "%";
      return per;
    },
    handleChange(value) {
      let dataIndex = Number(value);
      let preIndex = dataIndex - 1;

      //控制dataDisplay之data
      if (preIndex < 0) {
        this.dataDisplay = {
          monthlyImp: this.monthlyData[dataIndex].imp,
          impChange: "None",
          monthlyClick: this.monthlyData[dataIndex].click,
          clickChange: "None",
          monthlyPos: this.monthlyData[dataIndex].pos,
          posChange: "None"
        };
      } else {
        this.dataDisplay = {
          monthlyImp: this.monthlyData[dataIndex].imp,
          impChange: this.toPersent(
            (this.monthlyData[dataIndex].imp - this.monthlyData[preIndex].imp) /
              this.monthlyData[preIndex].imp
          ),
          monthlyClick: this.monthlyData[dataIndex].click,
          clickChange: this.toPersent(
            (this.monthlyData[dataIndex].click -
              this.monthlyData[preIndex].click) /
              this.monthlyData[preIndex].click
          ),
          monthlyPos: this.monthlyData[dataIndex].pos,
          posChange: this.toPersent(
            (this.monthlyData[dataIndex].pos - this.monthlyData[preIndex].pos) /
              this.monthlyData[preIndex].pos
          )
        };
        if (this.dataDisplay.posChange.search("-") === 0) {
          this.dataDisplay.posChangeColor = false;
        } else {
          this.dataDisplay.posChangeColor = true;
        }
        if (this.dataDisplay.clickChange.search("-") === 0) {
          this.dataDisplay.clickChangeColor = false;
        } else {
          this.dataDisplay.clickChangeColor = true;
        }
        if (this.dataDisplay.impChange.search("-") === 0) {
          this.dataDisplay.impChangeColor = false;
        } else {
          this.dataDisplay.impChangeColor = true;
        }
      }

      //控制dailyOption之data
      this.dailyOption.xAxis.data = this.dailyRange[dataIndex];
      this.dailyOption.series[0].data = this.dailyData[dataIndex].impressions;
      this.dailyOption.series[1].data = this.dailyData[dataIndex].clicks;

      //控制impOption、clickOption之高亮
      for (let i = 0; i <= 4; i++) {
        if (i === dataIndex) {
          this.impOption.series[0].data[i].itemStyle.color = "#a90000";
          this.clickOption.series[0].data[i].itemStyle.color = "#a90000";
        } else {
          this.impOption.series[0].data[i].itemStyle.color = "#f5b031";
          this.clickOption.series[0].data[i].itemStyle.color = "#f5b031";
        }
      }
      // console.log(this.impOption.series[0].data[0].itemStyle);
    },
    getTestingData() {
      this.dailyOption = {
        title: {
          text: "ECharts try 一波"
        },
        tooltip: {},
        xAxis: {
          data: this.dailyRange[0]
        },
        yAxis: [
          {
            type: "value",
            show: true,
            axisLabel: {
              fontSize: 14,
              color: "#333"
            },
            splitLine: {
              show: false //是否显示分隔线。
            }
          },
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "销量",
            type: "bar",
            barWidth: "50%",
            data: this.dailyData[0].impressions,
            itemStyle: {
              normal: {
                color: "#f5b031"
              }
            }
          },
          {
            name: "收益",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            symbolSize: 10,
            data: this.dailyData[0].clicks,
            itemSyle: {
              normal: {
                color: "black"
              }
            }
          }
        ]
      };
    }
  }
};
</script>

<style>
.select_area {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: right;
}
.chart_area {
  border-color: coral;
}
.data_area {
  text-align: center;
}
.data_area_label {
  padding: 0;
  text-align: center;
  font-size: 20px;
  size: 20px;
  margin-bottom: 1px;
  color: #333;
}
.data_area_data {
  padding: 0;
  margin-bottom: 0;
  font-size: 30px;
  text-align: center;
}
</style>
