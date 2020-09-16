import "./styles/main.scss";

class KnowTheRV {
  initialize() {
    console.info("Application initialized");
  }
}

window.onload = function onLoad() {
  new KnowTheRV().initialize();
};
