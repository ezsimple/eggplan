import React, { Component } from 'react';

export const Const = {
  CONTEXT_PATH: '/mobile',

  LOCAL_HTTP_PORT: '8080',
  LOCAL_HTTPS_PORT: '8443',

  REMOTE_ADDR: 'm.pigplan.io',
  REMOTE_HTTP_PORT: '8080',
  REMOTE_HTTPS_PORT: '8443'
};

export const Server = {
  getRestAPI: function() {
    const context = this._getContext();
    return this._getHostName() == 'localhost'
      ? this._getLocalServer() + context
      : this._getRemoteServer() + context;
  },
  _getLocalServer: function() {
    let scheme = this._getScheme();
    let url = scheme + '//' + 'localhost';
    let port = Const.LOCAL_HTTP_PORT;

    if (scheme === 'http:') {
      port = Const.LOCAL_HTTP_PORT;
      url = url + ':' + port;
      return url;
    }

    if (scheme === 'https:') {
      port = Const.REMOTE_HTTP_PORT;
      url = url + ':' + port;
      return url;
    }

    return undefined;
  },
  _getRemoteServer: function() {
    let scheme = this._getScheme();
    let url = scheme + '//' + Const.REMOTE_ADDR;
    let port = Const.REMOTE_HTTP_PORT;

    if (scheme === 'http:') {
      port = Const.REMOTE_HTTP_PORT;
      url = url + ':' + port;
      return url;
    }

    if (scheme === 'https:') {
      port = Const.REMOTE_HTTPS_PORT;
      url = url + ':' + port;
      return url;
    }

    return undefined;
  },
  _getHostName: function() {
    return window.location.hostname;
  },
  _getScheme: function() {
    // return http: or https:
    const scheme = window.location.protocol;
    return scheme;
  },
  _getContext: function() {
    return Const.CONTEXT_PATH;
  }
};
