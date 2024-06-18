<template>
    <section class="calender_area">
        <p class="dot">/</p>
        <h2 class="title">귀한 발걸음을 통해 첫 출발을 <br>축복해주시면 감사하겠습니다.</h2>
        <table id="calendar">
            <caption></caption>
            <thead>
                <tr>                      
                    <th>일</th>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th>토</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </section>
</template>


<script>
import { onMounted } from 'vue';

export default {
    setup () {
        var date = new Date();
        var month = date.getMonth();
        var year = date.getFullYear();

        var holidays = [
            {month:8, day:24, name: '결혼식'},
        ];

        function initCalender(olddate, newdate) {
            for(let i = year - olddate; i <= year + newdate; i++){
                var yearOption = document.createElement('option');
                yearOption.value = i;
                yearOption.textContent = i + '년';
                if(i === year) {
                    yearOption.selected = true;
                }
            }
            for(let i = 1; i <= 12; i++){
                var monthOption = document.createElement('option');
                monthOption.value = i;
                monthOption.textContent = i + '월';
                if(i === month + 1){
                    monthOption.selected = true;
                }
            }
        }

        function updateCalendar(month, year) {
            var firstDay = new Date(year, month, 1);
            var lastDay = new Date(year, month + 1, 0);
            var calendar = document.getElementById('calendar');
            var caption = calendar.querySelector('caption');
            var tbody = calendar.querySelector('tbody');
            tbody.innerHTML = '';
            caption.textContent = year + '년 ' + (month + 3) + '월';

            while (firstDay.getDay() !== 2) {
                firstDay.setDate(firstDay.getDate() - 1);
            }

            while (lastDay.getDay() !== 1) {
                lastDay.setDate(lastDay.getDate() + 1);
            }

            while (firstDay <= lastDay) {
                var row = document.createElement('tr');
                for (var i = 0; i < 7; i++) {
                    var cell = document.createElement('td');
                    if (firstDay.getMonth() === month) {
                        cell.textContent = firstDay.getDate();
                        if (firstDay.getDate() === date.getDate() && firstDay.getMonth() === date.getMonth() && firstDay.getFullYear() === date.getFullYear()){
                            cell.className = 'today';
                        }
                        if (firstDay.getDay() === 1) {
                            cell.classList.add('sunday');
                        }
                        if (firstDay.getDay() === 0) { 
                            cell.classList.add('saturday');
                        }

                        // 공휴일 확인
                        for (var j = 0; j < holidays.length; j++) {
                            if (holidays[j].year && year !== holidays[j].year) {
                                continue;
                            }
                            
                            if (firstDay.getDate() === holidays[j].day && firstDay.getMonth() === holidays[j].month) {
                                cell.classList.add('holiday');
                                cell.textContent += '(' + holidays[j].name + ')';                        
                                break;
                            }
                        }
                    }
                    row.appendChild(cell);
                    firstDay.setDate(firstDay.getDate() + 1);
                }        
                tbody.appendChild(row);
            }
        }

        onMounted(() => {
            initCalender(60, 10);
            updateCalendar(month, year);
        });

        return {}
    }
}
</script>


<style>
    .calender_area .dot{padding-top:24px;text-align:center;}
    .calender_area .title{padding-top:24px;font-size:24px;line-height:36px;color:#BC7F40;text-align:center;}
    #calendar{margin-top:24px;text-align:center;}
    #calendar caption{font-size:20px;color:#393631;}
    #calendar thead th{padding:20px;font-size:16px;line-height:16px;color:#393631;}
    #calendar tbody td{padding:20px;font-size:16px;line-height:16px;color:#393631;}
    .holidays{background:red;}
    
</style>