<?php include "./include/head.php";?>

<body>
  <div class="overlay"></div>
  <div class="frame">

    <button class="btn-right">Next >></button>
    <button class="btn-left">
      << Prev</button>
        <img src="" alt="">
        <div class="figcaption">
          <p></p>
        </div>

  </div>
  <header class="container">
  <div class="row">
  <h1>jQuery Gallery</h1>
  <div class="search">
  <input type="text" name="search" id="search" placeholder="search">    

  </div>
  </div> 
    
  </header>
  <main>
    <section class="container">
      <h2>Filter for gallery</h2>
      <ul class="filter">
        <li>People</li>
        <li>Nature</li>
        <li>Animals</li>
        <li>View All</li>
      </ul>
    </section>
    <section class="container">
      <h2>Gallery</h2>
      <div class="gallery">
        <ul>
          <?php include_once('./include/list.php')?>
        </ul>
      </div>
    </section>
  </main>
  <script src="js/main.js"></script>
</body>

</html>