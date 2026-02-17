let StartFunc = () => {
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
        },
        {
            id: 3,
            name: "Dr. Vijaya Lakshmi",
            degree: "BDS, MDS - Oral & Maxillofacial Surgery",
            speciality: "Dentist",
            location: "New York, USA",
            img: "../assets/img/doctors/doctor-thumb-02.jpg",
            rating: "35"
        }
    ];

    localStorage.setItem("doctors", JSON.stringify(doctorsData));
};

export { StartFunc };