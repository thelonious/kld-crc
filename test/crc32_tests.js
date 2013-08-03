var CRC32 = require('../CRC32');

exports.getCRC = function(beforeExit, assert) {
    var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var crc = CRC32.getCRC(data, 0, data.length);

    console.log(crc);
};
