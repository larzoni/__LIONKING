let p = document.querySelectorAll("p");
      let div = document.querySelector("div");
      div.addEventListener("mouseover", mouseOverHandler);
      div.addEventListener("mouseleave", mouseLeaveHandler);
      function mouseOverHandler(e) {
        //top
        p[0].style.top = 0;
        //left
        p[1].style.left = 0;
        //right
        p[2].style.right = 0;
      }
      function mouseLeaveHandler(e) {
        //top
        p[0].style.top = "0px";
        //left
        p[1].style.left = "-75px";
        //right
        p[2].style.right = "-75px";
      }