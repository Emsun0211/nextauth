'use client'
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

export default function ChartComp() {
    const [chartData, setChartData] = useState<any>({})

    const colors = ['#F1C40F', '#E74C3C', '#9B59B6', '#3498DB', '#1ABC9C', '#2ECC71', '#E67E22', '#E91E63', '#34495E', '#7F8C8D'];

    useEffect(()=>{
      setChartData(    {series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        //   events: {
        //     click: function(chart, w, e) {
        //       console.log(chart, w, e)
        //     }
        //   }
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: '12px'
            }
          },
          title: {
            text: 'Student Names',
            style: {
                fontSize: '14px',
                fontWeight: 'bold'
            }
        }
        },
        yaxis: {
            max: 100,
            labels: {
                formatter: function (value: number) {
                    return value + "%";
                }
            },
            title: {
                text: 'Percentage Pass',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }
      },
    
    
    })
        // setChartData(
        //     {
        //     options: {
        //         chart: {
        //           id: "basic-bar"
        //         },
        //         xaxis: {
        //           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        //         },
        //         plotOptions: {
        //             bar: {
        //                 columnWidth: ''
        //             }
        //         }

        //       },
             
        //       series: [
        //         {
        //           name: "series-1",
        //           data: [30, 40, 45, 50, 49, 60, 70, 91]
        //         }
        //       ]
            
        // })
    },[])


    // {
          
    
    

    
  return (
    <div>
        { chartData && chartData?.series && <Chart options={chartData?.options} series={chartData?.series} type='bar' width='400px'/>}
        
    </div>
  )
}

