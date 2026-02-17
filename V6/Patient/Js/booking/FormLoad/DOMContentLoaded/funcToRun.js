const StartFunc = () => {
const days = 7;
		const times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];

		const container = document.getElementById("timeSlotContainer");

		for (let i = 0; i < days; i++) {

			const li = document.createElement("li");

			times.forEach(time => {
				const a = document.createElement("a");
				a.classList.add("timing");
				a.href = "#";
				a.textContent = time;

				// Click selection logic
				a.addEventListener("click", function (e) {
					e.preventDefault();

					document.querySelectorAll(".timing").forEach(t =>
						t.classList.remove("selected")
					);

					a.classList.add("selected");
				});

				li.appendChild(a);
			});

			container.appendChild(li);
		}
        // Get doctor id from URL
		const params = new URLSearchParams(window.location.search);
		const doctorId = params.get("id");

		// Get doctors from localStorage
		const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

		// Find selected doctor
		const selectedDoctor = doctors.find(doc => doc.id == doctorId);

		if (selectedDoctor) {
			document.querySelector(".booking-doctor-name").textContent = selectedDoctor.name;
			document.querySelector(".booking-doctor-rating").textContent = selectedDoctor.rating;
			document.querySelector(".booking-doctor-location").textContent = selectedDoctor.location;
			document.querySelector(".booking-doctor-img").src = selectedDoctor.img;
		}
};

export { StartFunc };
