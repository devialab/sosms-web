# sosms-web

#PEACEHACK #PEACEHACKBCN 2015 Front-End project 

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

