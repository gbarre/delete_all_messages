async function main() {
  messenger.menus.create({
    id: "delete_all_permanent",
    title: messenger.i18n.getMessage("contextTitle"),
    contexts: ["folder_pane"],
    async onclick(info) {
      let page = await messenger.messages.list(info.selectedFolder);

      while (page.messages.length > 0) {
        page = await messenger.messages.list(info.selectedFolder);
        let ids = page.messages.map(a => a.id);
        messenger.messages.delete(ids, true);
      }
    }
  });
}

main();
