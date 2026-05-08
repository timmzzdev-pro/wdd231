const courses = [
    {
        subject: 'CSE',
        number: 110,
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        credits: 2,
        completed: false
    }
];

const coursesContainer = document.querySelector('#courses');

function displayCourses(courseList) {

    coursesContainer.innerHTML = '';

    courseList.forEach(course => {

        const card = document.createElement('div');

        card.classList.add('course-card');

        if (course.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `
            ${course.subject} ${course.number}
        `;

        coursesContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    document.querySelector('#totalCredits').textContent =
    totalCredits;
}

displayCourses(courses);

document.querySelector('#all').addEventListener('click', () => {
    displayCourses(courses);
});

document.querySelector('#wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course =>
        course.subject === 'WDD'
    );

    displayCourses(wddCourses);
});

document.querySelector('#cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course =>
        course.subject === 'CSE'
    );

    displayCourses(cseCourses);
});