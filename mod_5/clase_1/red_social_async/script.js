const data_store = {
  left_sidebar: [
    { title: "Perfil", text: "Ana Dev • 120 contactos" },
    { title: "Grupos", text: "Frontend Latam, JS Daily" },
    { title: "Eventos", text: "Meetup Async este viernes" }
  ],
  main_posts: [
    {
      author: "Carlos",
      text: "Hoy practiqué callbacks y entendí por qué pueden crecer en complejidad 😅"
    },
    {
      author: "Sofía",
      text: "Promises me ayudaron a ordenar mejor mis llamadas asíncronas."
    },
    {
      author: "Luis",
      text: "Async/await se siente más natural para leer flujos secuenciales."
    }
  ],
  right_ads: [
    { title: "Curso JS Pro", text: "Inscríbete hoy con 30% de descuento." },
    { title: "Laptop Dev X1", text: "Rendimiento para tus proyectos web." }
  ]
};

const section_elements = {
  left: document.getElementById("left-content"),
  main: document.getElementById("main-posts"),
  right: document.getElementById("right-content")
};

const run_status = document.getElementById("run-status");

function should_fail(section) {
  if (section === "left") return document.getElementById("fail-left").checked;
  if (section === "main") return document.getElementById("fail-main").checked;
  return document.getElementById("fail-right").checked;
}

function render_loading(section_name, label) {
  section_elements[section_name].innerHTML = `<div class="status loading">Cargando ${label}...</div>`;
}

function render_error(section_name, message) {
  section_elements[section_name].innerHTML = `<div class="status error">${message}</div>`;
}

function render_left_sidebar(items) {
  section_elements.left.innerHTML = items
    .map((item) => `<article class="item-card"><h4>${item.title}</h4><p>${item.text}</p></article>`)
    .join("");
}

function render_main_posts(posts) {
  section_elements.main.innerHTML = posts
    .map(
      (post) =>
        `<article class="item-card"><h4>${post.author}</h4><p>${post.text}</p></article>`
    )
    .join("");
}

function render_right_ads(ads) {
  section_elements.right.innerHTML = ads
    .map((ad) => `<article class="item-card"><h4>${ad.title}</h4><p>${ad.text}</p></article>`)
    .join("");
}

function reset_sections() {
  render_loading("left", "Left Sidebar");
  render_loading("main", "Main Content");
  render_loading("right", "Right Ads");
}

function fetch_left_sidebar_callback(on_success, on_error) {
  setTimeout(() => {
    if (should_fail("left")) {
      on_error("Error en Left Sidebar (callback).");
      return;
    }
    on_success(data_store.left_sidebar);
  }, 900);
}

function fetch_main_posts_callback(on_success, on_error) {
  setTimeout(() => {
    if (should_fail("main")) {
      on_error("Error en Main Content (callback).");
      return;
    }
    on_success(data_store.main_posts);
  }, 1300);
}

function fetch_right_ads_callback(on_success, on_error) {
  setTimeout(() => {
    if (should_fail("right")) {
      on_error("Error en Right Ads (callback).");
      return;
    }
    on_success(data_store.right_ads);
  }, 800);
}

function fetch_left_sidebar_promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (should_fail("left")) {
        reject(new Error("Error en Left Sidebar (promise)."));
        return;
      }
      resolve(data_store.left_sidebar);
    }, 1000);
  });
}

function fetch_main_posts_promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (should_fail("main")) {
        reject(new Error("Error en Main Content (promise)."));
        return;
      }
      resolve(data_store.main_posts);
    }, 3000);
  });
}

function fetch_right_ads_promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (should_fail("right")) {
        reject(new Error("Error en Right Ads (promise)."));
        return;
      }
      resolve(data_store.right_ads);
    }, 2000);
  });
}

function set_mode_status(text) {
  run_status.textContent = text;
}

function run_callbacks_demo() {
  reset_sections();
  set_mode_status("Callbacks en paralelo: cada sección se renderiza cuando llega.");

  fetch_left_sidebar_callback(
    (left_items) => {
      render_left_sidebar(left_items);
      set_mode_status("Callbacks: llegó Left Sidebar");
    },
    (error) => {
      render_error("left", error);
      set_mode_status("Callbacks: error en Left Sidebar");
    }
  );

  fetch_main_posts_callback(
    (posts) => {
      render_main_posts(posts);
      set_mode_status("Callbacks: llegó Main Content");
    },
    (error) => {
      render_error("main", error);
      set_mode_status("Callbacks: error en Main Content");
    }
  );

  fetch_right_ads_callback(
    (ads) => {
      render_right_ads(ads);
      set_mode_status("Callbacks: llegó Right Ads");
    },
    (error) => {
      render_error("right", error);
      set_mode_status("Callbacks: error en Right Ads");
    }
  );
}

function run_promises_demo() {
  reset_sections();
  set_mode_status("Promises en paralelo: cada sección se renderiza cuando llega.");

  fetch_left_sidebar_promise()
    .then((left_items) => {
      render_left_sidebar(left_items);
      set_mode_status("Promises: llegó Left Sidebar");
    })
    .catch((error) => {
      render_error("left", error.message || "Error desconocido en Left Sidebar.");
      set_mode_status("Promises: error en Left Sidebar");
    });

  fetch_main_posts_promise()
    .then((posts) => {
      render_main_posts(posts);
      set_mode_status("Promises: llegó Main Content");
    })
    .catch((error) => {
      render_error("main", error.message || "Error desconocido en Main Content.");
      set_mode_status("Promises: error en Main Content");
    });

  fetch_right_ads_promise()
    .then((ads) => {
      render_right_ads(ads);
      set_mode_status("Promises: llegó Right Ads");
    })
    .catch((error) => {
      render_error("right", error.message || "Error desconocido en Right Ads.");
      set_mode_status("Promises: error en Right Ads");
    });
}

function run_async_await_demo() {
  reset_sections();
  set_mode_status("Async/Await en paralelo: cada sección se renderiza cuando llega.");

  (async () => {
    try {
      const left_items = await fetch_left_sidebar_promise();
      render_left_sidebar(left_items);
      set_mode_status("Async/Await: llegó Left Sidebar");
    } catch (error) {
      render_error("left", error.message || "Error desconocido en Left Sidebar.");
      set_mode_status("Async/Await: error en Left Sidebar");
    }
  })();

  (async () => {
    try {
      const posts = await fetch_main_posts_promise();
      render_main_posts(posts);
      set_mode_status("Async/Await: llegó Main Content");
    } catch (error) {
      render_error("main", error.message || "Error desconocido en Main Content.");
      set_mode_status("Async/Await: error en Main Content");
    }
  })();

  (async () => {
    try {
      const ads = await fetch_right_ads_promise();
      render_right_ads(ads);
      set_mode_status("Async/Await: llegó Right Ads");
    } catch (error) {
      render_error("right", error.message || "Error desconocido en Right Ads.");
      set_mode_status("Async/Await: error en Right Ads");
    }
  })();
}

document.getElementById("run-callbacks").addEventListener("click", run_callbacks_demo);
document.getElementById("run-promises").addEventListener("click", run_promises_demo);
document.getElementById("run-async-await").addEventListener("click", run_async_await_demo);

reset_sections();