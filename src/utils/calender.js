var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();

var holidays = [
    {month: 7, day: 15, name: '광복절'},
];

function initCalender(olddate, newdate) {
    for(let i = year - olddate; i<= year + newdate; i++){
        var yearOption = document.createElement('option');
        yearOption.value = i;
        yearOption.value = i + '년';
        if(i === year) {
            yearOption.selected = true;
        }
    }
    for(let i = 1; i <= 12; i++){
        var monthOption = document.createElement('option');
        monthOption.value = i;
        monthOption.value = i + '월';
        if(i === month + 1){
            monthOption.selected = true;
        }
    }
}

initCalender(60, 10);

function updateCalendar(month, year) {

    // 달력 업데이트 코드...    
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var calendar = document.getElementById('calendar');
    var caption = calendar.querySelector('caption');
    var tbody = calendar.querySelector('tbody');
    tbody.innerHTML = '';
    caption.textContent = year + '년 ' + (month + 1) + '월';

    while (firstDay.getDay() !== 1) {
        firstDay.setDate(firstDay.getDate() - 1);
    }

    while (lastDay.getDay() !== 0) {
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
                if (firstDay.getDay() === 0) { // 일요일
                    cell.classList.add('sunday');
                }
                if (firstDay.getDay() === 6) { // 토요일
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
updateCalendar(month, year);