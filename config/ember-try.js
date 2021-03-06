/*jshint node:true*/

module.exports = {
  useVersionCompatibility: false,
  scenarios: [{
    name: 'default',
    bower: {
      dependencies: {}
    }
  }, {
    name: 'ember-lts-2.4',
    bower: {
      dependencies: {
        'ember': 'components/ember#lts-2-4'
      },
      resolutions: {
        'ember': 'lts-2-4'
      }
    }
  }, {
    name: 'ember-lts-2.8',
    bower: {
      dependencies: {
        'ember': 'components/ember#lts-2-8'
      },
      resolutions: {
        'ember': 'lts-2-8'
      }
    }
  }, {
    name: 'ember-2.10',
    bower: {
      dependencies: {
        'ember': '2.10.2'
      },
      resolutions: {
        'ember': '2.10.2'
      }
    }
  }, {
    name: 'ember-release',
    bower: {
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    }
  }, {
    name: 'ember-beta',
    allowedToFail: true,
    bower: {
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    }
  }, {
    name: 'ember-canary',
    allowedToFail: true,
    bower: {
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  }]
};
