AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
  
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#1565c0",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
  this.el.addEventListener("mouseLeave" ,()=>{
    const{selectedItemId}=this.data
    if(selectedItemId){
      const el = document.querySelector(`#${selectedItemId}`)
      const id = el.getAttribute("id")
      if(id == selectedItemId){
        el.setAttribute("material",{
          color : "#fff" ,
          opacity : 1,
        })
      }
    }
  
  })    
    },
  });
  