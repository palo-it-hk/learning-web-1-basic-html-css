export const header = () =><nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img id="header-image" alt="hey" />
    </a>

    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="mainNav"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="mainNav" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/"> Home </a>

      <a class="navbar-item" href="/about/"> About </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="mailto:contact@simonball.me">
            <strong>Get In Contact</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>;

// <script>
//   console.log('yo');
// </script>

// <style scoped>
//   nav {
//     background-color: pink !important;
//   }
// </style>
