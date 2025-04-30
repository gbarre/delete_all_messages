# Delete All Messages

## Overview

**Delete All Messages** is a Thunderbird extension that allows users to
permanently delete all emails from a selected folder with a single action. This
tool is designed for users who need to quickly and efficiently clean up their
email folders.

## Features

- Permanently delete all messages in a selected folder.
- Simple and intuitive context menu integration.
- Lightweight and easy to use.

## Installation

1. Download the latest release from the
   [Releases](https://github.com/gbarre/delete_all_messages/releases) page.
2. Open Thunderbird and navigate to `Add-ons` > `Extensions`.
3. Click on the gear icon and select `Install Add-on From File...`.
4. Select the downloaded `.zip` file and install the extension.

## Usage

1. Right-click on a folder in the folder pane.
2. Select the option **"Supprimer tous les messages (définitivement)"** from
   the context menu.
3. All messages in the selected folder will be permanently deleted.

## Permissions

This extension requires the following permissions:

- `accountsFolders`: Access to email folders.
- `accountsRead`: Read account information.
- `menus`: Add custom context menu items.
- `messagesRead`: Read messages in folders.
- `messagesMove`: Move messages between folders.
- `messagesDelete`: Delete messages permanently.

## Development

### Prerequisites

- Node.js and npm installed.
- Thunderbird installed for testing.

### Building the Extension

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/delete_all_messages.git
   cd delete_all_messages
   ```

2. Make your changes to the code.
3. Create a ZIP archive for the extension:

   ```bash
   zip -r delete_all_messages.zip manifest.json background.js _locales
   ```

### Testing

1. Open Thunderbird and navigate to `Add-ons` > `Extensions`.
2. Click on the gear icon and select `Debug Add-ons`.
3. Load the unpacked extension by selecting the project folder.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the
[GitHub repository](https://github.com/your-repo/delete_all_messages).

## License

This project is licensed under the [MIT License](LICENSE).
