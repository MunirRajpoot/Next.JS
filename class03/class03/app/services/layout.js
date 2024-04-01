import ServicesFooter from "../(components)/servicesFooter/servicesFooter";

function Service({ children }) {
    return (
        <div>
            {children}
            <ServicesFooter />
        </div>
    )
}

export default Service;