# Sponsor Detector

This is the plugin / add-on part of the Sponsor Detector.  
It should allow :
- To detect sponsorised content
- To show published / sponsor statistics
- To create a new detection configuration
  
# Contribute

```bash
git clone ...
npm install
npm install -g web-ext
web-ext run

web-ext run --firefox-binay=PATH_TO_FIREFOX
```

- `/popup` : popup files
- `/commons` : commons components like libs, services, dom factories
- `conf_adder` : files related to the configuration adder
- `detector_banner` : files related to the sponsor detector
