import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaLaptop,
    FaShoppingCart,
    FaChartLine,
    FaPalette,
    FaPaintBrush,
    FaRegObjectGroup,
    FaTshirt,
    FaServer,
    FaDatabase,
    FaCreditCard,
    FaLayerGroup
} from "react-icons/fa";

function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Responsive, fast and SEO-friendly websites built with modern tools.",
            icon: <FaLaptop />,
            color: "linear-gradient(135deg, #667eea, #764ba2)",
        },
        {
            title: "E-commerce Solutions",
            description: "Custom online stores with secure payments and admin dashboards.",
            icon: <FaShoppingCart />,
            color: "linear-gradient(135deg, #f7971e, #ffd200)",
        },
        {
            title: "SEO Optimization",
            description: "Improve search rankings and organic traffic with proven strategies.",
            icon: <FaChartLine />,
            color: "linear-gradient(135deg, #00c6ff, #0072ff)",
        },
        {
            title: "UI/UX Design",
            description: "Clean, accessible and delightful user interfaces.",
            icon: <FaPalette />,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)",
        },
        {
            title: "Fabric.js Editors",
            description: "Build custom canvas editors and design tools with Fabric.js.",
            icon: <FaPaintBrush />,
            color: "linear-gradient(135deg, #ff9966, #ff5e62)",
        },
        {
            title: "Canvas & Konva.js Editors",
            description: "Interactive drawings, charts, and graphics powered by Canvas & Konva.js.",
            icon: <FaRegObjectGroup />,
            color: "linear-gradient(135deg, #36d1dc, #5b86e5)",
        },
        {
            title: "T-Shirt Editors",
            description: "Custom T-Shirt and product editors for print-on-demand businesses.",
            icon: <FaTshirt />,
            color: "linear-gradient(135deg, #f953c6, #b91d73)",
        },
        {
            title: "MERN Stack Development",
            description: "Full-stack apps with MongoDB, Express, React, and Node.js.",
            icon: <FaLayerGroup />,
            color: "linear-gradient(135deg, #11998e, #38ef7d)",
        },
        {
            title: "API Development",
            description: "RESTful and GraphQL APIs with secure authentication.",
            icon: <FaServer />,
            color: "linear-gradient(135deg, #fc4a1a, #f7b733)",
        },
        {
            title: "MySQL Database",
            description: "Efficient relational database solutions with MySQLi.",
            icon: <FaDatabase />,
            color: "linear-gradient(135deg, #8360c3, #2ebf91)",
        },
        {
            title: "Payment Gateway Integration",
            description: "Stripe, PayPal and secure payment systems integration.",
            icon: <FaCreditCard />,
            color: "linear-gradient(135deg, #e53935, #e35d5b)",
        },
    ];

    return (
        <section className="py-5" id="services">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark">🚀 Our Services</h2>
                    <p className="text-muted">What we offer to help grow your business</p>
                </div>

                <div className="row">
                    {services.map((s, i) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={i}>
                            <div
                                className="card h-100 text-center border-0 shadow service-card"
                                style={{ transition: "0.35s", borderRadius: 12, overflow: "hidden" }}
                            >
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div
                                        className="icon-circle mb-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: 88,
                                            height: 88,
                                            borderRadius: "50%",
                                            background: s.color,
                                            color: "#fff",
                                            fontSize: 30,
                                            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                                        }}
                                    >
                                        {s.icon}
                                    </div>

                                    <h5 className="card-title fw-bold">{s.title}</h5>
                                    <p className="card-text text-muted" style={{ fontSize: 14 }}>
                                        {s.description}
                                    </p>

                                    <a
                                        href={process.env.REACT_APP_FIVERR}
                                        className="btn btn-outline-primary mt-auto"
                                        style={{ borderRadius: 8 }}
                                    >
                                        Order Now !
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .service-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 18px 40px rgba(18, 38, 63, 0.12); 
        }
        .icon-circle svg { width: 36px; height: 36px; }
      `}</style>
        </section>
    );
}

export default Services;
