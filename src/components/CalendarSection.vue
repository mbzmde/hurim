<template>
  <section class="calendar-section">
    <img src="@/assets/line.svg" alt="line" class="calendar-section__line">
    <p class="calendar-section__title">
      귀한 발걸음을 통해 첫 출발을<br/>
      <span class="calendar-section__title--highlight">축복해주시면 감사하겠습니다.</span>
    </p>
    <table id="calendar" class="calendar">
      <caption class="calendar__caption"></caption>
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
  name: 'CalendarSection',
  setup() {
    const date = new Date(2024, 7, 24);
    const month = date.getMonth();
    const year = date.getFullYear();

    const holidays = [{ month: 7, day: 24 }];

    const updateCalendar = (month, year) => {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const calendar = document.querySelector('.calendar');
      const caption = calendar.querySelector('.calendar__caption');
      const tbody = calendar.querySelector('tbody');
      tbody.innerHTML = '';
      caption.textContent = `${year}년 ${month + 1}월`;

      let currentDay = new Date(firstDay);

      while (currentDay.getDay() !== 0) {
        currentDay.setDate(currentDay.getDate() - 1);
      }

      while (currentDay <= lastDay || currentDay.getDay() !== 0) {
        const row = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
          const cell = document.createElement('td');
          cell.classList.add('calendar__cell');
          if (currentDay.getMonth() === month) {
            cell.textContent = currentDay.getDate();
            if (currentDay.getDate() === date.getDate() && currentDay.getMonth() === date.getMonth() && currentDay.getFullYear() === date.getFullYear()) {
              cell.classList.add('calendar__cell--today');
            }
            if (currentDay.getDay() === 0) {
              cell.classList.add('calendar__cell--sunday');
            }
            if (currentDay.getDay() === 6) {
              cell.classList.add('calendar__cell--saturday');
            }
            if (currentDay.getDate() === 24 && currentDay.getMonth() === 7) {
              cell.classList.add('calendar__cell--highlight');
            }
            holidays.forEach((holiday) => {
              if (currentDay.getDate() === holiday.day && currentDay.getMonth() === holiday.month) {
                cell.classList.add('calendar__cell--holiday');
                cell.style.backgroundColor = '#BC7F40';
                cell.style.borderRadius = '50%';
                cell.style.color = 'white';
                cell.style.fontWeight = 'bold';
                cell.style.padding = '0.5rem !important';
              }
            });
          }
          row.appendChild(cell);
          currentDay.setDate(currentDay.getDate() + 1);
        }
        tbody.appendChild(row);
      }
    };

    onMounted(() => {
      updateCalendar(month, year);
    });

    return {};
  },
}
</script>

<style scoped>
@import "@/components/scss/CalendarSection.scss";
</style>
