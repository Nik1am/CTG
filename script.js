    let ctrl = document.getElementById("controls")
    let text = document.getElementById("text")
    let size = document.getElementById("fsize")

    window.onload = function() {
      var drawingCanvas = document.getElementById('smile');
      if(drawingCanvas && drawingCanvas.getContext) {
         var context = drawingCanvas.getContext('2d');
         var ctx = drawingCanvas.getContext('2d');

            ctrl.oninput = function() {
               let col = document.getElementById("textcolor")
               let size = document.getElementById("fsize")
               let font = `50px CustomFont`

            ctx.clearRect(0,0,drawingCanvas.width,drawingCanvas.height);

            ctx.canvas.width  = canx.value;
            ctx.canvas.height = cany.value;

            ctx.textBaseline = "hanging";
            ctx.fillStyle = col.value;
            ctx.font = font;
            ctx.fillText(text.value,x.value,y.value);
            };
         };
     };