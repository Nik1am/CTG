    let ctrl = document.getElementById("controls")
    let text = document.getElementById("text")
    let tfont = document.getElementById("font")

    window.onload = function() {
      var drawingCanvas = document.getElementById('smile');
      if(drawingCanvas && drawingCanvas.getContext) {
         var context = drawingCanvas.getContext('2d');
         var ctx = drawingCanvas.getContext('2d');

            ctrl.oninput = function() {
               let cbg = document.getElementById("cbg")
               let deb = document.getElementById("debug")
               let cbgcol = document.getElementById("bgcolor")
               let col = document.getElementById("textcolor")
               let size = document.getElementById("fsize")
               let font = `${size.value}`+`px `+`${tfont.value}`

            ctx.clearRect(0,0,drawingCanvas.width,drawingCanvas.height);

            ctx.canvas.width  = canx.value;
            ctx.canvas.height = cany.value;
            if(cbg.checked){
               ctx.fillStyle = cbgcol.value;
               ctx.rect(0,00,drawingCanvas.width,drawingCanvas.height);
               ctx.fill()
            }

            ctx.textBaseline = "hanging";
            ctx.fillStyle = col.value;
            ctx.font = font;
            ctx.fillText(text.value,x.value,y.value);
            
            };
         };
     };