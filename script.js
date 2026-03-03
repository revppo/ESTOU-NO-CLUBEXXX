async function loadCalendar() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDiv = document.getElementById('calendar');

    const response = await fetch(`data.json?t=${Date.now()}`);
    const data = await response.json();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerText = i;

        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        if (data[dateString] === "sim") {
            dayDiv.classList.add('sim');
        } else if (data[dateString] === "nao") {
            dayDiv.classList.add('nao');
        }

        calendarDiv.appendChild(dayDiv);
    }
}

loadCalendar();