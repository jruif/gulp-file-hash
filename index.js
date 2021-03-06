/*
* @Author: jruif
* @Date:   2016-05-25 14:44:37
* @Last Modified by:   jruif
* @Last Modified time: 2016-05-25 17:32:56
*/

'use strict';

var fs = require('fs');
var through = require('through2');
var crypto = require('crypto');
var objectAssign = require('object-assign');


function hash(data) {
    return crypto.createHash('sha1').update(data).digest("hex");
}

module.exports = function(logFile) {
    var newLogFile = {};
    var oldLogFile = null;

    try {
        oldLogFile = require('../' + logFile);
    } catch (e) {
        oldLogFile = {}
    }

    return through.obj(function (file, enc, cb) {

        if (file.isNull()) {
            cb();
            return;
        }

        newLogFile[file.relative] = hash(file.contents);

        if (!oldLogFile[file.relative] || oldLogFile[file.relative] !== newLogFile[file.relative]) {
            this.push(file);
        }

        cb();

    }, function (cb) {

        fs.writeFile(logFile, JSON.stringify(newLogFile), 'utf8');

        return cb();
    })
}

