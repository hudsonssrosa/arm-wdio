<img src="arm_wdio_logo.png" height="360">

# arm-wdio-web

# Installing from the Ground up

Run the shell script `./install_wdio_from_ground_up.sh`:

```bash
    sh install_wdio_from_ground_up.sh
```

# Installing Dependencies

For the Allure Report or any other additional dependency, just run the `install_dependencies.sh`:

```bash
    sh install_dependencies.sh
```

# Running the Tests

After the previous set up, now you are able to execute the tests through `run_wdio.sh`:

```bash
    sh run_wdio.sh
```

If you want to execute some specific test case, you can run the command with custom .js test:

```bash
    npx wdio run ./wdio.conf.js --spec <YOUR_TEST_NAME>.js
```