function trocarImagem() {
    var imagem = document.getElementById("minhaImagem");
    if (imagem.src.match("imagem1.jpg")) {
       imagem.src = "imagem2.jpg";

    } else {
        imagem.src = "imagem1.jpg";
    }
}