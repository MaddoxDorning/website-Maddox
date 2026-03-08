document.addEventListener("DOMContentLoaded", function () {

  const toolContainer = document.getElementById("toolContainer");
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const sortButton = document.getElementById("sortButton");

  let sortAscending = true;

  const tools = [
    {
      name: "Wireshark",
      category: "Network Analysis",
      image: "../assets/wireshark.png",
      description: "GUI-based packet analyzer for inspecting live network traffic.",
      link: "https://www.wireshark.org/"
    },
    {
      name: "tcpdump",
      category: "Network Analysis",
      image: "../assets/tcpdump.png",
      description: "Command-line packet capture tool for analyzing network traffic.",
      link: "https://www.tcpdump.org/"
    },
    {
      name: "Nmap",
      category: "Network Scanning",
      image: "../assets/nmap.png",
      description: "Network discovery and port scanning tool.",
      link: "https://nmap.org/"
    },
    {
      name: "Metasploit",
      category: "Exploitation",
      image: "../assets/metasploit.png",
      description: "Penetration testing framework used for vulnerability exploitation.",
      link: "https://www.metasploit.com/"
    },
    {
      name: "OpenVAS",
      category: "Network Scanning",
      image: "../assets/openvas.png",
      description: "Open-source vulnerability scanner.",
      link: "https://www.openvas.org/"
    },
    {
      name: "Autopsy",
      category: "Digital Forensics",
      image: "../assets/autopsy.png",
      description: "Digital forensics platform for analyzing disk images.",
      link: "https://www.autopsy.com/"
    },
    {
      name: "FTK Imager",
      category: "Digital Forensics",
      image: "../assets/ftk.png",
      description: "Tool used to create and examine forensic disk images.",
      link: "https://accessdata.com/product-download/ftk-imager-version-4-5"
    },
    {
      name: "VeraCrypt",
      category: "Encryption",
      image: "../assets/veracrypt.png",
      description: "Open-source disk encryption software.",
      link: "https://www.veracrypt.fr/"
    }
  ];

  function renderTools(toolArray) {

    toolContainer.innerHTML = "";

    toolArray.forEach(tool => {

      const card = `
      <div class="col-md-4 mb-4">
      <div class="card h-100 text-center p-3">

      <img src="${tool.image}" 
      alt="${tool.name}" 
      class="tool-logo mb-3">
      <h5 class="card-title">${tool.name}</h5>
      <p class="text-muted">${tool.category}</p>
      <p class="card-text">${tool.description}</p>
      <a href="${tool.link}" target="_blank" 
      class="btn btn-primary mt-auto">
      Visit Site
      </a>

      </div>
    </div>
  `;

      toolContainer.innerHTML += card;
    });
  }

  function applyFilters() {

    let filteredTools = [...tools];

    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;


    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(searchValue)
    );


    if (selectedCategory !== "All") {
      filteredTools = filteredTools.filter(tool =>
        tool.category === selectedCategory
      );
    }


    filteredTools.sort((a, b) => {
      if (sortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    renderTools(filteredTools);
  }


  searchInput.addEventListener("input", applyFilters);
  filterSelect.addEventListener("change", applyFilters);

  sortButton.addEventListener("click", function () {
    sortAscending = !sortAscending;
    sortButton.textContent = sortAscending ? "Sort A → Z" : "Sort Z → A";
    applyFilters();
  });


  renderTools(tools);

});
