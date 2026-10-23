function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pega a tag img do perfil
  const img = document.querySelector("#profile img")

  // Substitui a imagem de acordo com o modo ativado
  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/seu-usuario.png")
    img.setAttribute("alt", "Sua foto em modo claro")
  } else {
    img.setAttribute("src", "https://github.com/seu-usuario.png")
    img.setAttribute("alt", "Sua foto em modo escuro")
  }
}
