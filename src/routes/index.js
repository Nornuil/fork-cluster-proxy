const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

router.get("/signin", (req, res, next) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);

router.get("/profile", isAuthenticated, (req, res, next) => {
  res.render("profile");
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}

router.get("/info", (req, res, next) => {
  const objeto = {
    carpeta_proyecto: process.cwd(),
    path_ejecucion: process.execPath,
    plataforma: process.platform,
    argumentos: process.argv.slice(2),
    version_node: process.version,
    process_id: process.pid,
    memoria_total: process.memoryUsage().rss,
  };

  console.log(objeto);
  res.status(200).json(objeto);
});

module.exports = router;
