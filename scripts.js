const productContent = {
    crm: {
      img: "images/headway-5QgIuuBxKwM-unsplash.jpg",
      title: "Zoho CRM",
      desc: "Learn how to manage leads, automate workflows, and close deals faster using Zoho CRM. Our training covers contact management, deal pipelines, email automation, analytics, and real-world sales tracking."
    },
    mail: {
      img: "images/kenny-eliason-1-aA2Fadydc-unsplash.jpg",
      title: "Zoho Mail",
      desc: "Master secure, ad-free email hosting for your business with calendar, tasks, and collaboration tools built in. Learn mailbox setup, filters, groups, and security policies."
    },
    books: {
      img: "images/mapbox-ZT5v0puBjZI-unsplash.jpg",
      title: "Zoho Books",
      desc: "Train in invoicing, expense tracking, inventory, tax compliance, and automated workflows for your accounting processes. Perfect for finance teams and freelancers alike."
    },
    people: {
      img: "images/mapbox-pzFzd1AD8Ow-unsplash.jpg",
      title: "Zoho People",
      desc: "Get trained on employee management, attendance tracking, self-service portals, and performance appraisals to automate your HR processes with Zoho People."
    },
    assist: {
      img: "images/scott-graham-5fNmWej4tAA-unsplash.jpg",
      title: "Zoho Assist",
      desc: "Learn how to offer remote IT support using Zoho Assist. Includes session setup, unattended access, file transfer, and real-time screen control for clients."
    }
  };

  const buttons = document.querySelectorAll(".accordion-btn");
  const productDetails = document.getElementById("product-details");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const key = btn.getAttribute("data-product");
      const content = productContent[key];

      productDetails.innerHTML = `
        <img src="${content.img}" alt="${content.title}" />
        <h3>${content.title}</h3>
        <p>${content.desc}</p>
        <button class="learn-btn">Learn more</button>
      `;
    });
  });
  // Toggle Drawer Navigation
const menuToggle = document.querySelector(".menu-toggle");
const drawer = document.querySelector(".drawer-nav");
const drawerClose = document.querySelector(".drawer-close");

menuToggle.addEventListener("click", () => {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

drawerClose.addEventListener("click", () => {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});
