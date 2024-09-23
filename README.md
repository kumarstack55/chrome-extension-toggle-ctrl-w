# ToggleCtrlW - Toggle switch for Ctrl + W

This chrome extension allows `Ctrl + W` to close tabs only as long as you
allow it.

Example of use: When operating a Linux terminal on the web, avoid closing
the browser tab when trying to erase a word with `C-w`.

## Requirements

- Google Chrome 128+

## Installation

Installation can be performed in a variety of ways:

1. Download a zip from `https://github.com/kumarstack55/chrome-extension-toggle-ctrl-w/archive/refs/heads/main.zip` and unarchive it.
    - Example: Save unarchived files to `$HOME/chrome-extension-toggle-ctrl-w`.
1. Open `chrome://extensions`.
    1. Enable `Developer mode`, if not already enabled.
    1. Click `Load unpacked`.
        - Example: Select the folder `$HOME/chrome-extension-toggle-ctrl-w/extension`
1. Open `chrome://extensions/shortcuts`.
    1. Find `ToggleCtrlW - Toggle Switch for Ctrl + W`.
        1. Find `ToggleCtrlW - Ctrl + W Command`, and then click the pencil icon.
            1. Type a shortcut: `Ctrl + W`

TODO: Install from Chrome Web Store

## Usage

By default, Ctrl + W will not close the tab.

1. Click Toggle switch icon from Extensions.
1. Enable only if you want to close a tab when you presses `C-w`.

## Contributing

This project is completely open source.
For more information, please refer to the following links:

https://github.com/kumarstack55/chrome-extension-toggle-ctrl-w

## TODO

- TODO: Disable Ctrl + W for a certain period of time (1 hour).
- TODO: Notify when Ctrl + W is pressed.

## License

MIT
