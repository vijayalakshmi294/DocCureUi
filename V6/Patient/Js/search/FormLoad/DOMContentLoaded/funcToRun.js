import { StartFunc as StartFuncFormAddListeners } from "./AddListeners/entryFile.js";

const StartFunc = () => {
	const template = document.getElementById("doctorTemplate");
	const container = document.getElementById("doctorContainer");

	function loadDoctors() {

		const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
		container.innerHTML = "";

		doctors.forEach(doc => {

			const clone = template.content.cloneNode(true);

			clone.querySelector(".doctor-img-src").src = doc.img;
			clone.querySelector(".doctor-name").textContent = doc.name;
			clone.querySelector(".doctor-degree").textContent = doc.degree;
			clone.querySelector(".doctor-speciality").textContent = doc.speciality;
			clone.querySelector(".doctor-location").append(doc.location);
			clone.querySelector(".doctor-rating").textContent = doc.rating;

			const bookBtn = clone.querySelector(".BookAppointmentClass");
			bookBtn.href = `booking.html?id=${doc.id}`;

			container.appendChild(clone);
		});
	};

	loadDoctors();
	StartFuncFormAddListeners();
};

export { StartFunc };
