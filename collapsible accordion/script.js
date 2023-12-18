//Find all button elements in an element with the id "faq" and iterate them
document.querySelectorAll('#faq button').forEach(item => {
    //Add a on click event handler to each element
    item.addEventListener('click', function(event) {
      //Get parent element
      let parent = this.parentNode;
  
      //get current section with class="active"
      let active = document.querySelector("#faq .active");
  
      //Toggle active state class on parent
      parent.classList.toggle("active");
  
      //Remove the active class if not on clicked buttons parent.
      if (active && parent != active) {
        active.classList.remove("active");
      }
  
    });
  });