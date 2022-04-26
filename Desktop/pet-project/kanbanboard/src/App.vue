<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Kanban board</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Boards</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Vue demo</a>
              <a class="dropdown-item" href="#">Another</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>

        <div class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-3">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Users</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Ivan Ivanov</a>
                <a class="dropdown-item" href="#">Pyotr Petrov</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <button type="submit" class="btn btn-info btn-sm btn-block">
                    Add user
                  </button>
                </a>

                <form class="px-4 py-3">
                  <div class="form-group">
                    <label for="exampleDropdownFormName">Name</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleDropdownFormName"
                      placeholder="Ivan Ivanov"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleDropdownFormAvatar">Avatar</label>

                    <input
                      type="file"
                      onchange="readImage(this);"
                      class="form-control"
                      id="exampleDropdownFormAvatar"
                      style="width: 100%"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleDropdownFormPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleDropdownFormPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary btn-sm btn-block mt-2"
                  >
                    Add user
                  </button>
                </form>
              </div>
            </li>
          </ul>

          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>
      </div>
    </nav>
    <main role="main" class="container-fluid" style="margin-top: 60px">
      <main-board />
    </main>
  </div>
</template>

<script>
import MainBoard from "@/components/MainBoard.vue";
export default {
  name: "App",
  components: {
    MainBoard,
  },
};
</script>

<style></style>
