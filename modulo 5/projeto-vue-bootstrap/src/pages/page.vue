<template>
  <div class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MinhaApp</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="flex-fill">
      <div class="container my-5">
        <h1 class="text-center">Bem-vindo ao Meu Site</h1>
        <p class="text-center">Este conteúdo está centralizado e ocupa a área entre o topo e o rodapé.</p>
      </div>
    </main>

    <footer class="bg-dark text-white text-center py-3 mt-auto">
      &copy; 2025 MinhaApp. Todos os direitos reservados.
    </footer>
  </div>
</template>
