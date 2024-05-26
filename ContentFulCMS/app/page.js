import client from "./lib/contentfulClient";

const fetchServices = async () => {
  try {
    const response = await client.getEntries({ content_type: "services" });
    console.log("fetchServices", response);
    return response.items;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

const Page = async () => {
  const services = await fetchServices();

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {services && services.map((service) => (
          <li key={service.sys.id}>
            <h2>{service.fields.title}</h2>
            <p>{service.fields.description}</p>
            {service.fields.image && service.fields.image.fields && service.fields.image.fields.file && (
              <img src={service.fields.image.fields.file.url} alt={service.fields.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
