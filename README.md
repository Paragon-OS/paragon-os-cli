paragon-os-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/paragon-os-cli.svg)](https://npmjs.org/package/paragon-os-cli)
[![Downloads/week](https://img.shields.io/npm/dw/paragon-os-cli.svg)](https://npmjs.org/package/paragon-os-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g paragon-os-cli
$ paragon-os-cli COMMAND
running command...
$ paragon-os-cli (--version)
paragon-os-cli/0.0.0 darwin-arm64 node-v20.19.5
$ paragon-os-cli --help [COMMAND]
USAGE
  $ paragon-os-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`paragon-os-cli hello PERSON`](#paragon-os-cli-hello-person)
* [`paragon-os-cli hello world`](#paragon-os-cli-hello-world)
* [`paragon-os-cli help [COMMAND]`](#paragon-os-cli-help-command)
* [`paragon-os-cli plugins`](#paragon-os-cli-plugins)
* [`paragon-os-cli plugins add PLUGIN`](#paragon-os-cli-plugins-add-plugin)
* [`paragon-os-cli plugins:inspect PLUGIN...`](#paragon-os-cli-pluginsinspect-plugin)
* [`paragon-os-cli plugins install PLUGIN`](#paragon-os-cli-plugins-install-plugin)
* [`paragon-os-cli plugins link PATH`](#paragon-os-cli-plugins-link-path)
* [`paragon-os-cli plugins remove [PLUGIN]`](#paragon-os-cli-plugins-remove-plugin)
* [`paragon-os-cli plugins reset`](#paragon-os-cli-plugins-reset)
* [`paragon-os-cli plugins uninstall [PLUGIN]`](#paragon-os-cli-plugins-uninstall-plugin)
* [`paragon-os-cli plugins unlink [PLUGIN]`](#paragon-os-cli-plugins-unlink-plugin)
* [`paragon-os-cli plugins update`](#paragon-os-cli-plugins-update)

## `paragon-os-cli hello PERSON`

Say hello

```
USAGE
  $ paragon-os-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ paragon-os-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/paragon-os/paragon-os-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `paragon-os-cli hello world`

Say hello world

```
USAGE
  $ paragon-os-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ paragon-os-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/paragon-os/paragon-os-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `paragon-os-cli help [COMMAND]`

Display help for paragon-os-cli.

```
USAGE
  $ paragon-os-cli help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for paragon-os-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.34/src/commands/help.ts)_

## `paragon-os-cli plugins`

List installed plugins.

```
USAGE
  $ paragon-os-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ paragon-os-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/index.ts)_

## `paragon-os-cli plugins add PLUGIN`

Installs a plugin into paragon-os-cli.

```
USAGE
  $ paragon-os-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into paragon-os-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PARAGON_OS_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PARAGON_OS_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ paragon-os-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ paragon-os-cli plugins add myplugin

  Install a plugin from a github url.

    $ paragon-os-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ paragon-os-cli plugins add someuser/someplugin
```

## `paragon-os-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ paragon-os-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ paragon-os-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/inspect.ts)_

## `paragon-os-cli plugins install PLUGIN`

Installs a plugin into paragon-os-cli.

```
USAGE
  $ paragon-os-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into paragon-os-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PARAGON_OS_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PARAGON_OS_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ paragon-os-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ paragon-os-cli plugins install myplugin

  Install a plugin from a github url.

    $ paragon-os-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ paragon-os-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/install.ts)_

## `paragon-os-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ paragon-os-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ paragon-os-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/link.ts)_

## `paragon-os-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ paragon-os-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ paragon-os-cli plugins unlink
  $ paragon-os-cli plugins remove

EXAMPLES
  $ paragon-os-cli plugins remove myplugin
```

## `paragon-os-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ paragon-os-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/reset.ts)_

## `paragon-os-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ paragon-os-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ paragon-os-cli plugins unlink
  $ paragon-os-cli plugins remove

EXAMPLES
  $ paragon-os-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/uninstall.ts)_

## `paragon-os-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ paragon-os-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ paragon-os-cli plugins unlink
  $ paragon-os-cli plugins remove

EXAMPLES
  $ paragon-os-cli plugins unlink myplugin
```

## `paragon-os-cli plugins update`

Update installed plugins.

```
USAGE
  $ paragon-os-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/update.ts)_
<!-- commandsstop -->
