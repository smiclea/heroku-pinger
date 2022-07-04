# HEROKU PINGER

Create the `config.json` from the `config.sample.json` file to ping the Heroku apps every 20 minutes if you are in the specified time interval. Heroku allows you to ping your app up to 18 hours a day.

Example:

```json
{
  "hosts": [
    {
      "name": "https://my-app.herokuapp.com/",
      "keepAliveBetween": [
        20,
        8
      ]
    }
  ]
}
```

This will ping the app every night at 20 minute interval between 8pm and 8am.

Run the app with `yarn start`, run tests with `yarn test`.

To run this app as a background service on your Windows machine, you can create a shortcut to the `run.cmd` file and place it in the startup folder by running Windows Key + R followed by `shell:startup`.
