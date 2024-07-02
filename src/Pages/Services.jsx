import SummaryBox from "../components/services/SummaryBox";

const servicesArray = [
  {
    title: "Ambulance Service",
    description: "Emergency Ambulance Service is the most ",
    value: "1081",
    link: "",
  },
  {
    title: "Resuce Service",
    description: "Specialized Rescue operations & emergencies ",
    value: "5500",
    link: "",
  },
  {
    title: "Fire Service",
    description: "Rescue 1122 also accepted challenge ",
    value: "5500",
    link: "",
  },

  {
    title: "Motorbile Resuce service",
    description: "The Motorbike Rescue Service (MRS) was started ",
    value: "3500",
    link: "",
  },
  {
    title: "Water Rescue Service",
    description: "Perfomance of water rescue ",
    value: "1081",
    link: "",
  },
  {
    title: "Animal rescue service",
    description: "In order to ensure animal rescue ",
    value: "2300",
    link: "",
  },
  {
    title: "Building safety Service",
    description: "These regulations may be citied as",
    value: "5500",
    link: "",
  },
  {
    title: "Community safety",
    description: "The Punjab Emergency Service, Rescue 1122",
    value: "3500",
    link: "",
  },
];

function Services() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-2">
      {servicesArray.map((service) => (
        <SummaryBox
          title={service.title}
          description={service.description}
          value={service.value}
          link={service.link}
          key={service.title}
        />
      ))}
    </div>
  );
}

export default Services;
