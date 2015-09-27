![Codeship Status for devialab/sosms-web](https://codeship.com/projects/cbf1f790-46b0-0133-24a7-3a7a159e2683/status?branch=master) [status](https://codeship.com/projects/104938)

# sosms-web

`#PEACEHACK` `#PEACEHACKBCN` 2015 Front-End project

# [Live demo](http://sosms.devialab.com/)

# Installation

```
gem install compass
npm install -g bower
npm install
```

# Run project

* Dev mode
	
	```
	grunt serve
	```

* Prod mode (optimized)

	```
	grunt serve:dist
	```

## Supported options

  * **serverPort** (`9000`): Change server port.
  * **testPort** (`9001`): Change test port
  * **liveReloadPort** (`35729`): Change liveReload port

	```
	grunt serve --serverPort 9003 --testPort 1234
	```


# Build project

```
grunt build
```

# Run tests

```
grunt test
```

