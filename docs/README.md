# cybertools
## Authorship & Attribution 
Created by Maddox Dorning
Resources used-
Basic HTML
JS
CSS
Bootstrap
GitHub Pages
Cybersecurity tools sites

## Tagline
All of your cybersecurity needs in one place.

## User Story 
As a cybersecurity student I wanted to make some relevant to me that would put all the tools I have used in one hub, so that I can elimate the time spent finding which tool is best for each specific problem.

## Links: 
Repository: https://github.com/MaddoxDorning/security-tools

Deployed App: https://maddoxdorning.github.io/security-tools/

## Design/Inspiration evidence:

The design of this site was modeled specifically after this Nike page. Many sites use this big card style with a photo followed by the description underneath. I followed this same title and added my own styling theme on top to be more relevant to the sites products.

 <img width="774" height="711" alt="Screenshot 2026-03-08 220450" src="https://github.com/user-attachments/assets/65022cef-e175-4ab1-ad83-74d049babf4d" />

## Code Block + Explanation:
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
    }...
    renderTools(filteredTools);
  }

  searchInput.addEventListener("input", applyFilters);
  filterSelect.addEventListener("change", applyFilters);
.....

...  renderTools(tools);

});
   
Then in this block of code, the searchInput event listener listens for input from the user and every character is put through the function applyFilters() and updated live to the user.
Finally we also have the filter sort method where the user can enter a specific category they are interested in. It then listens for the dropdown menu to be selected and presents the user with the tools in that category.

## Architecture / Infrastructure Note: 

This application a front-end web application built using HTML, CSS, and JS. The structure of the page was built using and HTML while bootstrap and CSS handled the styling of the page. THe internal features are then process through JavaScript such as the login and the different sorting features. The data being used is all stored in an array. Finally the site is deployed through GitHub pages directly through the repository.

## Verification: 
This app was tested and verified on -  
* Edge
* Chrome
* Edge Mobile responsive view

 No major errors were found and all features were compatible.
