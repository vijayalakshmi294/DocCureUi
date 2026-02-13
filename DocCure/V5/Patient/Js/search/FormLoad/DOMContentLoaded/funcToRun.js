const StartFunc = () => {
const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

		const template = document.getElementById("doctorTemplate");
		const container = document.getElementById("doctorContainer");

		// Insert doctors into localStorage if not already present
		if (!localStorage.getItem("doctors")) {

			const doctorsData = [
				{
					id: 1,
					name: "Dr. Keshav Nalam",
					degree: "MDS - Periodontology and Oral Implantology, BDS",
					speciality: "Dentist",
					location: "Florida, USA",
					img: "../assets/img/doctors/doctor-thumb-01.jpg",
					rating: "17"
				},
				{
					id: 2,
					name: "Dr. Meghana Degala",
					degree: "BDS, MDS - Oral & Maxillofacial Surgery",
					speciality: "Dentist",
					location: "New York, USA",
					img: "../assets/img/doctors/doctor-thumb-02.jpg",
					rating: "35"
				}
			];

			localStorage.setItem("doctors", JSON.stringify(doctorsData));
		}


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
		}
		loadDoctors();
};

export { StartFunc };
