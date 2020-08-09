    let ctrl = document.getElementById("controls")
    let text = document.getElementById("text")
    let tfont = document.getElementById("font")

    window.onload = function() {
      var drawingCanvas = document.getElementById('smile');
      if(drawingCanvas && drawingCanvas.getContext) {
         var context = drawingCanvas.getContext('2d');
         var ctx = drawingCanvas.getContext('2d');

            ctrl.oninput = function() {
               let opa = document.getElementById("opacity")
               ctrl.style.opacity = opa.value+"%";

               let cbg = document.getElementById("cbg")
               let cibg = document.getElementById("cibg")
               let deb = document.getElementById("debug")
               let bgurl = document.getElementById("bgurl")
               let cbgcol = document.getElementById("bgcolor")
               let col = document.getElementById("textcolor")
               let size = document.getElementById("fsize")
               let font = `${size.value}`+`px `+`${tfont.value}`
               let rsz = document.getElementById("resize")

            ctx.clearRect(0,0,drawingCanvas.width,drawingCanvas.height);

            ctx.canvas.width  = canx.value;
            ctx.canvas.height = cany.value;
            if(cbg.checked){
               ctx.fillStyle = cbgcol.value;
               ctx.rect(0,00,drawingCanvas.width,drawingCanvas.height);
               ctx.fill()
            }
            if(cibg.checked){
               var img = new Image();
               img.src = bgurl.value;
               ctx.drawImage(img,0,0,drawingCanvas.width,drawingCanvas.height);
               
            //if(rsz.checked){
            //   ctx.canvas.width  = img.src.width;
            //   ctx.canvas.height = img.src.height;
            //}
            }

            ctx.textBaseline = "hanging";
            ctx.fillStyle = col.value;
            ctx.font = font;
            ctx.fillText(text.value,x.value,y.value);
            
            };
         };
     };