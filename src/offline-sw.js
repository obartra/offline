import { install, applyUpdate } from "offline-plugin/runtime";

install({
  onUpdateReady() {
    // const proceed = window.confirm("Update is ready, do you wish to proceed?");

    // if (proceed) {
    applyUpdate();
    // }
  },
  onUpdated() {
    window.location.reload();
  }
});
