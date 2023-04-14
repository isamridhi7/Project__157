AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/spiderman.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/aero.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/superman.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/os.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
    
const borderEl = this.createBorder(position , item.id)

      // Thumbnail Element
const thumbNail = this.createThumbNail(item)
borderEl.appendChild(thumbNail)
     

  
      this.placesContainer.appendChild(borderEl);
    }
  },
  
  createBorder : function(position , id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible" , true)
    entityEl.setAttribute("geometry" , {
      primitive   : "plane",
      width : 22 ,
      height : 40   ,
    })
    entityEl.setAttribute("position" ,position)
    entityEl.setAttribute("material" , {

      color : "#fff",
      
    })
    return entityEl
  },

  createThumbNail : function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible" , true)
    entityEl.setAttribute("geometry" , {
      primitive   : "plane",
      width : 20,
      height : 28  ,
    })
    
    
    entityEl.setAttribute("position" ,{x:0, y:5 ,z:0.1})
    entityEl.setAttribute("material" , {src : item.url})
    return entityEl
  },
});
